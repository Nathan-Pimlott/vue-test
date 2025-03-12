import { createRouter, createWebHistory } from 'vue-router'

import AddView from '@/views/AddView.vue'
import SubtractView from '@/views/SubtractView.vue'
import MultiplyView from '@/views/MultiplyView.vue'
import DivideView from '@/views/DivideView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'add',
      component: AddView,
    },
    {
      path: '/subtract',
      name: 'subtract',
      component: SubtractView,
    },
    {
      path: '/multiply',
      name: 'multiply',
      component: MultiplyView,
    },
    {
      path: '/divide',
      name: 'divide',
      component: DivideView,
    },
  ],
})

export default router
