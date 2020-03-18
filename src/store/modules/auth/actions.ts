import Vue from "vue";
import { ActionContext, ActionTree } from "vuex";
import { AuthState, User } from "@/store/modules/auth/types";
import { RootState } from "@/store/types";
import { AxiosResponse } from "axios";
import store from "@/store/index";

type AuthActionContext = ActionContext<AuthState, RootState>;
type AuthActionTree = ActionTree<AuthState, RootState>;

export const actions: AuthActionTree = {

  async login(context: AuthActionContext, payload: User): Promise<any> {
    try {
      //const token: string = store.getters["authModule/getToken"];
      const response: AxiosResponse = await Vue.axios({
        method: "POST",
        url: "/usuario/authenticate",
        data: payload
      });
      context.commit("setUser", response.data);
      return true;
    } catch (e) {
      return false;
    } finally {}
  }

};
