<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <!-- This uses the router/index.ts file to add the routes in and render based off that. -->
  <RouterView />
</template>

<style scoped>
.operation {
  font-size: 2rem;
  background-color: yellow;
  color: black;
  border-radius: 10%;
  width: 40px;
  margin: 10px;
  display: inline-flex;
  justify-content: center;
}

.operation:hover {
  background-color: white;
}
</style>
