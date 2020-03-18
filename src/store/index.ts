import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import VuexPersist from "@/plugins/vuex-persist";
import { RootState } from "@/store/types";
import { authModule } from '@/store/modules/auth';
import { fugaModule } from '@/store/modules/fuga';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    appName: "Vueleaks",
    appVersion: "0.0.1"
  },
  modules: {
    authModule,
    fugaModule,
  },
  // @ts-ignore
  plugins: [VuexPersist.plugin]
};

export default new Vuex.Store<RootState>(store);
