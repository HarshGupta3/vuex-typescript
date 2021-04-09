import {
    ActionContext,
    ActionTree,
    GetterTree,
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
    MutationTree,
    Module,
    NamespacedMappers,
    MapperForActionWithNamespace,
  } from 'vuex'
  
import { State as RootState } from '../index';
  
  
// state start
  // Declare state
  export type State = {
    domains: string
  }
  // Create initial state
  const state: State = {
    domains: 'domain',
  }
// state end

//   mutations start
  // mutations enums
  export enum MutationTypes {
    SET_DOMAINS = 'SET_DOMAINS',
    SET_REDIRECTIONS = 'SET_REDIRECTIONS',
  }
  // Mutation contracts
  export type Mutations<S = State> = {
    [MutationTypes.SET_DOMAINS](state: S, domains: string): void
  }
  // Define mutations
  const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_DOMAINS](state: State, domains: string) {
    console.log("🚀 ~ file: index.ts ~ line 43 ~ domains", domains, state);
      state.domains = domains
    },
  }
//   mutations end
  
  // Action enums
  export enum ActionTypes {
    FETCH_DOMAINS = 'FETCH_DOMAINS',
    FETCH_REDIRECTIONS = 'FETCH_REDIRECTIONS',
  }
  
  // Actions context
  type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1],
    ): ReturnType<Mutations[K]>
  } & Omit<ActionContext<State, RootState>, 'commit'>
  
  // Actions contracts
  export interface Actions {
    [ActionTypes.FETCH_DOMAINS](
      { commit }: AugmentedActionContext,
      teamId: string,
    ): void
  }
  
  // Define actions
  export const actions: ActionTree<State, RootState> & Actions = {
    [ActionTypes.FETCH_DOMAINS]({ commit }, teamId: string) {
      console.log("🚀 ~ file: index.ts ~ line 73 ~ teamId", teamId);
        commit(MutationTypes.SET_DOMAINS, teamId);
    },
  }
  // getters types
  export type Getters = {
    getDomains(state: State): string
  }
  // getters
  export const getters: GetterTree<State, RootState> & Getters = {
    getDomains: (state) => {
      return state.domains
    },
  }


  type Namespaced<T, N extends string> = {
    [P in keyof T & string as `${N}/${P}`]: T[P]
  }
  type NamespacedMutations = Namespaced<Actions, "domains">

  //setup store type
  export type Store<S = State> = Omit<
    VuexStore<S>,
    'commit' | 'getters' | 'dispatch'
  > & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
      key: K,
      payload: P,
      options?: CommitOptions,
    ): ReturnType<Mutations[K]>
  } & {
    getters: {
      [K in keyof Getters]: ReturnType<Getters[K]>
    }
  } & {
    dispatch<K extends keyof Actions>(
      // key: K,
      key: NamespacedMutations,
      payload: Parameters<Actions[K]>[1],
      options?: DispatchOptions,
    ): ReturnType<Actions[K]>
  }
  
  export const DomainModule: Module<State, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  }