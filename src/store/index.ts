import { createStore, createLogger } from 'vuex';
import {
  DomainModule,
  Store as DomainStore,
  State as DomainState,
} from './domain/index';

export type State = {
  domain: DomainState
}

// export type Store = AuthStore<Pick<State, 'auth'>> &
//   DomainStore<Pick<State, 'domain'>>

export type Store = DomainStore<Pick<State, 'domain'>>;

export const store = createStore({
  strict: true,
  plugins: [createLogger()],
  modules: { 
    DomainModule
  },
})

export function useStore(): Store {
  return store as Store
}

export default store