import { MutationTree } from "vuex";
import { AuthState, User } from "@/store/modules/auth/types";

type AuthMutationTree = MutationTree<AuthState>;

export const mutations: AuthMutationTree = {
  setUser(state: AuthState, user: User) {
    state.user = user;
    state.isLogged = true;
  },
  unsetUser(state: AuthState) {
    state.user = null;
    state.isLogged = false;
  },
};
