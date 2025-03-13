import { createRouter, createWebHistory } from 'vue-router'
import ClientList from '@/views/ClientList.vue'
import EditClient from '@/views/EditClient.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/client' },
    { path: '/client', component: ClientList },
    { path: '/client/:id', component: EditClient }
  ]
})

export default router
