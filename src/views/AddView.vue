<script setup lang="ts">
import Calculator from '../components/Calculator.vue'
</script>

<template>
  <div>
    <h2 id="addTitle">Add</h2>

    <Calculator operation="add" />
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
}
</style>
