<template>
  <section id="app">
    <h1>Counter</h1>
    <CompositionAPIComponent></CompositionAPIComponent>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CompositionAPIComponent from './components/CompositionAPIComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    CompositionAPIComponent,
  },
})
</script>

<style>
#app {
  font-family: Arial, sans-serif;
}
</style>
