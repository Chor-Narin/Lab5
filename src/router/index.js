import { createRouter, createWebHistory } from 'vue-router'
import  Main from '../views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'page1',
          name: 'page1',
          component: () => import('../components/Page1.vue'),
          children: [
              {
                  path: 'section1',
                  name: 'section1',
                  component: () => import('../components/Section1.vue')
              },
              {
                path: 'section2',
                name: 'section2',
                component: () => import('../components/Section2.vue')
              },
              {
                path: 'section3',
                name: 'section3',
                component: () => import('../components/Section3.vue')
              },
              {
                path: 'section4',
                name: 'section4',
                component: () => import('../components/Section4.vue')
              }
          ]
        },
        {
          path: 'page2',
          name: 'page2',
          component: () => import('../components/Page2.vue'),
         
        },
        {
          path: 'page3',
          name: 'page3',
          component: () => import('../components/Page3.vue'),
          
        }
      ]
    },
    
    
  ],
})

export default router
