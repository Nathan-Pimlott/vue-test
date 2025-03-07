<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Calculator from './components/Calculator.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Calculator</h1>

      <nav>
        <RouterLink class="operation" to="/">+</RouterLink>
        <RouterLink class="operation" to="/subtract">-</RouterLink>
        <RouterLink class="operation" to="/multiply">*</RouterLink>
        <RouterLink class="operation" to="/divide">/</RouterLink>
      </nav>
    </div>
  </header>

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
