//@ts-nocheck
import { Component, Vue, Watch } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { Route } from "vue-router";
import { User } from "@/store/modules/auth/types";
import Template from "./template.vue";

Component.registerHooks(["beforeRouteEnter"]);

@Component({
  mixins: [Template]
})
export default class Login extends Vue {
  public user: Partial<User> = {};
  @State("isLogged", { namespace: "authModule" }) isLogged!: boolean;
  @State("error", { namespace: "authModule" }) error!: boolean;
  @State("errorMessage", { namespace: "authModule" }) errorMessage!: string;
  @Action("login", { namespace: "authModule" }) login!: Function;

  public rulesUsuario: object = [
    v => !!v || 'El usuario es obligatorio',
    v => (v && v.length >= 3) || 'El nombre debe tener minimo 3 caracteres',
    v => (v && v.length <= 10) || 'El nombre debe tener menos de 10 caracteres',
  ];
  public rulesPassword: object = [
    v => !!v || 'La contraseña es obligatoria',
    v => (v && v.length >= 3) || 'La contraseña debe tener minimo 3 caracteres',
    v => (v && v.length <= 10) || 'La contraseña debe tener menos de 10 caracteres',
  ];

  public errorLogin: boolean = false;
  public valid: boolean = false;
  public verPassword: boolean = false;
  public btnLoading: boolean = false;
  public usuario: string = "";
  public password: string = "";

  async submit(): Promise<void>{
    if(this.$refs.form.validate()){
      this.btnLoading=true;
      let result = await this.login({
        username: this.usuario,
        password: this.password
      });
      this.btnLoading=false;
      if(result){
        this.$router.push({name: "Inicio"});
      }else{
        this.password = "";
        this.errorLogin = true;
      }
    }
  }

  async beforeRouteEnter(from: Route, to: Route, next: any) {
    next((vm: Login) => {
      if (vm.isLogged) {
        next({name: 'Inicio'});
      }
    });
  }

}
