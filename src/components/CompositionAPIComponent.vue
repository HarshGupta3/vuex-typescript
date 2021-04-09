<template>
  hi
  {{domains}}
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '../store';
import { ActionTypes } from '../store/domain';

export default defineComponent({
  name: 'Composition',
  setup() {
    const store = useStore();
    console.log("🚀 ~ file: CompositionAPIComponent.vue ~ line 15 ~ setup ~ store", store);
    // const path = `DomainModule/${ActionTypes.FETCH_DOMAINS}`;
    // const Module = 'Domains';
    // store.dispatch(`${[Module]}/${[ActionTypes.FETCH_DOMAINS]}`, '3223');
    // store.dispatch(`Domains/${ActionTypes.FETCH_DOMAINS}`, '3223');
    // const path:NamespacedMutations = `Domains/${ActionTypes.FETCH_DOMAINS}`
    // const path:Namespaced = "DomainModule/FETCH_DOMAINS";
    // const path: Name = Namespaced<ActionTypes.FETCH_DOMAINS, 'DomainModule'>
    
    const test = `${ActionTypes.FETCH_DOMAINS}`;
    store.dispatch(test, '21');
    const domains = computed(() => store.state);
    return {
      domains,
    }
  },
})
</script>
