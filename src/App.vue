<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <!-- This uses the router/index.ts file to add the routes in and render based off that. -->
  <div class="routerContainer">
    <RouterView />
  </div>
</template>

<style scoped>
.routerContainer {
  padding: 0 20px;
}
</style>
