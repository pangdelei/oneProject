import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/Footer.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/bookcase'
    },
    {
      path: '/bookcase',
      name: 'bookcase',
      components: {
        default: () => import('./views/bookcase/index.vue'),
        footer: Footer // 为什么不用懒加载，因为多出需要调用，先引入再使用
      }
    },
    {
      path: '/bookinfo/:id',
      name: 'bookinfo',
      components: {
        default: () => import('./views/bookinfo/index.vue')
      }
    },
    {
      path: '/booktext/:id/:id',
      name: 'booktext',
      components: {
        default: () => import('./views/booktext/index.vue')
      }
    },
    {
      path: '/booklist',
      name: 'booklist',
      components: {
        default: () => import('./views/booklist/index.vue')
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('./views/register/index.vue')
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('./views/login/index.vue')
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('./views/user/index.vue'),
        footer: Footer // 为什么不用懒加载，因为多出需要调用，先引入再使用
      },
      children: [
        {
          path: '',
          redirect: '/user/nologin'
        },
        {
          path: 'login',
          components: {
            default: () => import('@/components/user/Login.vue')
          }
        },
        {
          path: 'nologin',
          components: {
            default: () => import('@/components/user/NoLogin.vue')
          }
        }
      ]
    },
    {
      path: '/found',
      name: 'found',
      components: {
        default: () => import('./views/found/index.vue'),
        footer: Footer // 为什么不用懒加载，因为多出需要调用，先引入再使用
      }
    },
    {
      path: '/select',
      name: 'select',
      components: {
        default: () => import('./views/select/index.vue'),
        footer: Footer // 为什么不用懒加载，因为多出需要调用，先引入再使用
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
