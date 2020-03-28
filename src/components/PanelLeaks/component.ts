import { Component, Vue, Watch } from "vue-property-decorator";
import { State } from "vuex-class";
import { Route } from "vue-router";
import { User } from "@/store/modules/auth/types";
import Template from "./template.vue";
import AuthMixin from '@/mixins/AuthMixin';

@Component({
  mixins: [Template],
  props: ["fugas"]
})

export default class PanelLeaks extends Vue {
  public headers: object = [
    { text: 'Fuente', value: 'fuente' },
    /* { text: 'Dominio', value: 'dominio' }, */
    { text: 'Empresa', value: 'empresa' },
    { text: 'Usuario', value: 'usuario' },
    { text: 'Email', value: 'email' },
    { text: 'Password', value: 'password' },
    { text: 'Hash', value: 'password_hash' },
  ];
}