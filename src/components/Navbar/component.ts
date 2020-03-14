import { Component, Vue, Watch } from "vue-property-decorator";
import { State } from "vuex-class";
import { Route } from "vue-router";
import { User } from "@/store/modules/auth/types";
import Template from "./template.vue";
import AuthMixin from '@/mixins/AuthMixin';

const namespace: string = "authModule";

@Component({
  mixins: [Template, AuthMixin]
})
export default class Navbar extends Vue {
  @State("isLogged", { namespace }) isLogged!: boolean;
  @State("user", { namespace }) user!: User;

  public drawer: boolean = false;
  
  public items: object = [
    {
      titulo: "Inicio",
      enlace: "Inicio",
      icono: "mdi-home",
      auth: false,
    },
    { 
      titulo: "Iniciar sesión",
      enlace: "Login",
      icono: "mdi-login",
      auth: false,
    }
  ];
}