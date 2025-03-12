<script setup lang="ts">
import type { Operator } from '@/types'
import { useCalculatorStore } from '@/stores/calculator'

defineProps<{
  operation: Operator
}>()

const store = useCalculatorStore()
</script>

<template>
  <div class="flexRow">
    <div class="numberContainer">
      <button
        id="decreaseNumber1Button"
        @click="store.num1 = store.num1 - 1"
        aria-label="Decrease number 1"
      >
        -
      </button>
      <p id="number1">{{ store.num1 }}</p>
      <button
        id="increaseNumber1Button"
        @click="store.num1 = store.num1 + 1"
        aria-label="Increase number 1"
      >
        +
      </button>
    </div>
    <div class="numberContainer">
      <button
        id="decreaseNumber2Button"
        @click="store.num2 = store.num2 - 1"
        aria-label="Decrease number 2"
      >
        -
      </button>
      <p id="number2">{{ store.num2 }}</p>
      <button
        id="increaseNumber2Button"
        @click="store.num2 = store.num2 + 1"
        aria-label="Increase number 2"
      >
        +
      </button>
    </div>
  </div>

  <div class="flexRow">
    <button id="calculateButton" @click="store.calculate(operation)">Calculate</button>
  </div>

  <div class="flexRow">
    <h3 id="calculatedValue" aria-live="polite">
      The calculated value is {{ store.calculatedValue }}
    </h3>
  </div>
</template>

<style scoped>
button {
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  margin: auto 20px;
  transition: background-color 0.1s linear;
}

button:hover {
  background-color: #f5f5f5;
}

.numberContainer {
  display: flex;
  flex-direction: row;
}

.flexRow {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#calculateButton {
  border-radius: 5px;
  width: auto;
  height: auto;
  padding: 10px 20px;
  margin-top: 20px;
}
</style>
