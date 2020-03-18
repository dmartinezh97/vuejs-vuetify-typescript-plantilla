import { Module } from 'vuex';
import { state } from './state';
import { actions } from './actions';
import { mutations } from "./mutations";
import { Fuga } from './types';
import { RootState } from '@/store/types';

const namespaced: boolean = true;

type FugaModule = Module<Fuga, RootState>;

export const fugaModule: FugaModule = {
    namespaced,
    state,
    actions,
    mutations,
};