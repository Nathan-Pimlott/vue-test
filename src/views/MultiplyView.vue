<script setup lang="ts">
import Calculator from '../components/Calculator.vue'
</script>

<template>
  <div>
    <h2 id="multiplyTitle">Multiply</h2>

    <Calculator operation="multiply" />
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
}
</style>
