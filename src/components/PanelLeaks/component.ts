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
  
}