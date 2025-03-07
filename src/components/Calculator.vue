<script setup lang="ts">
defineProps<{
  operation: string
}>()
</script>

<template>
  <div>
    <h3>You want to {{ operation }}? Nice!</h3>
  </div>
</template>

<style scoped></style>
