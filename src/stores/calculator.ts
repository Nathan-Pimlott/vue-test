import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Operator } from '@/types'

export const useCalculatorStore = defineStore('calculator', () => {
  const num1 = ref(0)
  const num2 = ref(0)
  const calculatedValue = ref(0)

  function calculate(operator: Operator) {
    switch (operator) {
      case 'add':
        calculatedValue.value = num1.value + num2.value
        break
      case 'subtract':
        calculatedValue.value = num1.value - num2.value
        break
      case 'multiply':
        calculatedValue.value = num1.value * num2.value
        break
      case 'divide':
        calculatedValue.value = num1.value / num2.value
        break
      default:
        break
    }
  }

  return { num1, num2, calculatedValue, calculate }
})
