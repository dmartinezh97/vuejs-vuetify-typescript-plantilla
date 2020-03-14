//@ts-nocheck
import { Component, Vue, Watch } from "vue-property-decorator";
import Template from "./template.vue";

Component.registerHooks(["beforeRouteEnter"]);

@Component({
  mixins: [Template]
})
export default class Home extends Vue {
  public valid: boolean = false;
  public btnLoading: boolean = false;
  public termino: string = "";
  public tipos: object = [
    { nombre: 'Usuario', valor: '1'},
    { nombre: 'Correo electrónico', valor: '2'},
    { nombre: 'Teléfono', valor: '3'},
    { nombre: 'Contraseña (hash)', valor: '4'},
    { nombre: 'Contraseña (texto plano)', valor: '5'},
  ];
  public rulesTermino: object = [
    v => !!v || 'El termino es obligatorio',
    v => (v && v.length >= 3) || 'El termino debe tener minimo 3 caracteres',
    v => (v && v.length <= 50) || 'El termino debe tener menos de 50 caracteres',
  ];
  public rulesTipo: object = [
    v => !!v || 'El tipo es obligatorio',
  ];

  submit(): void{
    if(this.$refs.form.validate()){

    }
  }


}
