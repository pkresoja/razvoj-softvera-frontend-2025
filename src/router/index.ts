import { createRouter, createWebHistory } from 'vue-router'
import ClientList from '@/views/client/ClientList.vue'
import EditClient from '@/views/client/EditClient.vue'
import NewClient from '@/views/client/NewClient.vue'
import Login from '@/views/Login.vue'
import ArticleList from '@/views/article/ArticleList.vue'
import EditArticle from '@/views/article/EditArticle.vue'
import NewArticle from '@/views/article/NewArticle.vue'
import VehicleList from '@/views/vehicle/VehicleList.vue'
import NotFound from '@/views/NotFound.vue'
import EditVehcile from '@/views/vehicle/EditVehcile.vue'
import NewVehicle from '@/views/vehicle/NewVehicle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/client'
    },
    {
      path: '/client',
      component: ClientList,
      meta: {
        title: 'Clients'
      }
    },
    {
      path: '/client/new',
      component: NewClient,
      meta: {
        title: 'New Client'
      }
    },
    {
      path: '/client/:id/vehicle',
      component: VehicleList,
      meta: {
        title: 'Vehicles'
      }
    },
    {
      path: '/client/:id',
      component: EditClient,
      meta: {
        title: 'Edit Client'
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/article',
      component: ArticleList,
      meta: {
        title: 'Articles'
      }
    },
    {
      path: '/article/new',
      component: NewArticle,
      meta: {
        title: 'New Article'
      }
    },
    {
      path: '/article/:id',
      component: EditArticle,
      meta: {
        title: 'Edit Article'
      }
    },
    {
      path: '/vehicle/new',
      component: NewVehicle,
      meta: {
        title: 'New Vehicle'
      }
    },
    {
      path: '/vehicle/:id',
      component: EditVehcile,
      meta: {
        title: 'Edit Vehicle'
      }
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound,
      meta: {
        title: 'Not Found'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `RS2025 :: ${to.meta.title}`
  }
  next()
})

export default router
