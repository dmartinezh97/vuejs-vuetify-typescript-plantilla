//@ts-nocheck
import Vue from "vue";
import { ActionContext, ActionTree } from "vuex";
import { Fuga } from "@/store/modules/fuga/types";
import { User } from "@/store/modules/auth/types";
import { RootState } from "@/store/types";
import { AxiosResponse } from "axios";
import store from "@/store/index";

type FugaActionContext = ActionContext<Fuga, RootState>;
type FugaActionTree = ActionTree<Fuga, RootState>;

export const actions: FugaActionTree = {
  async getFuga(context: FugaActionContext, payload: object): Promise<any> {
    try {
      const token: string = store.getters["authModule/getToken"];
      const response: AxiosResponse = await Vue.axios({
        method: "POST",
        url: "/Fuga/GetFuga",
        headers: {
          Authorization: "Bearer " + token
        },
        data: payload
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
};
