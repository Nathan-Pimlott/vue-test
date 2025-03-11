import { createRouter, createWebHistory } from 'vue-router'
import AddView from '../views/AddView.vue'
import SubtractView from '../views/SubtractView.vue'

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
  ],
})

export default router
