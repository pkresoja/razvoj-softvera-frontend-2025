import { createRouter, createWebHistory } from 'vue-router'
import ClientList from '@/views/client/ClientList.vue'
import EditClient from '@/views/client/EditClient.vue'
import NewClient from '@/views/client/NewClient.vue'
import Login from '@/views/Login.vue'
import ArticleList from '@/views/article/ArticleList.vue'
import EditArticle from '@/views/article/EditArticle.vue'
import NewArticle from '@/views/article/NewArticle.vue'
import VehicleList from '@/views/vehicle/VehicleList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/client' },
    { path: '/client', component: ClientList },
    { path: '/client/new', component: NewClient },
    { path: '/client/:id/vehicle', component: VehicleList },
    { path: '/client/:id', component: EditClient },
    { path: '/login', component: Login },
    { path: '/article', component: ArticleList },
    { path: '/article/new', component: NewArticle },
    { path: '/article/:id', component: EditArticle }
  ]
})

export default router
