//@ts-nocheck
import { MutationTree } from "vuex";
import { Fuga } from "@/store/modules/fuga/types";

type FugaMutationTree = MutationTree<Fuga>;

export const mutations: FugaMutationTree = {
    setFuga(state: Fuga, fugas: object) {
        const objFugas: object = [];
        fugas.forEach(element => {
            objFugas.push({
                id: element.id,
                fuente: element.fuente,
                dominio: element.dominio,
                empresa: element.empresa,
                usuario: element.usuario,
                email: element.email,
                numtelf: element.numtelf,
                password: element.password,
                password_hash: element.password_hash,
            });
        });
        state.fugas = objFugas;
    },
};