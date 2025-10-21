import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../pages/auth/Login.vue'),
    },
    {
      path: '/admin',
      component: () => import('@/layouts/AdminLayout.vue'),
      // meta: { title: 'Admin' },
      meta: { requiresAuth: true, scope: 'ADMIN' },
      children: [
        {
          path: '', // nghĩa là /admin
          name: 'AdminDashboard',
          component: () => import('@/views/Ecommerce.vue'),
          meta: { title: 'Dashboard' },
        },
      ],
    },
    
    {
      path: '/',
      name: 'User',
      component: () => import('../pages/home/Home.vue'),
      // meta: { title: 'User' },
      // meta: { requiresAuth: true, scope: 'USER' },

    },
    {
      path: '/product-detail',
      name: 'ProductDetail',
      component: () => import('../pages/ProductDetail.vue'),
      meta: {
        title: 'ProductDetail',
      },
    },

    {
      path: '/info-user',
      name: 'Account',
      component: () => import('../pages/InfoUser.vue'),
      meta: {
        requiresAuth: true,
        scope: 'USER'
      },
      children: [
        {
          path: '',
          name: 'Overview',
          component: () => import('../components/user/Overview.vue'),
        },
        {
          path: 'profile',
          name: 'UserProfile',
          component: () => import('../components/user/MyProfile.vue'),
        },
        {
          path: 'orders',
          name: 'UserOrders',
          component: () => import('../components/user/MyOders.vue'),
        },
        {
          path: 'vouchers',
          name: 'UserVouchers',
          component: () => import('../components/user/MyVoucher.vue'),
        },
        {
          path: 'purchase-history',
          name: 'PurchaseHistory',
          component: () => import('../components/user/PurchaseHistory.vue'),
        },
        {
          path: 'comments',
          name: 'CommentManagement',
          component: () => import('../components/user/CommentManagement.vue'),
        },
        {
          path: 'reviews',
          name: 'ReviewManagement',
          component: () => import('../components/user/ReviewManagement.vue'),
        },
      ]
    },
    {
      path: '/account/info',
      name: 'InfoUser',
      component: () => import('../components/user/MyProfile.vue'),
      meta: {
        title: 'InfoUser',
        requiresAuth: true,
        scope: 'USER'
      },
    },
    // {
    //   path: '/',
    //   redirect: '/login',
    // },
    // {
    //   path: '/',
    //   name: 'Ecommerce',
    //   component: () => import('../views/Ecommerce.vue'),
    //   meta: {
    //     title: 'eCommerce Dashboard',
    //   },
    // },
    {
      path: '/calendar',
      name: 'Calendar',
      component: () => import('../views/Others/Calendar.vue'),
      meta: {
        title: 'Calendar',
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Others/UserProfile.vue'),
      meta: {
        title: 'Profile',
      },
    },
    {
      path: '/form-elements',
      name: 'Form Elements',
      component: () => import('../views/Forms/FormElements.vue'),
      meta: {
        title: 'Form Elements',
      },
    },
    {
      path: '/basic-tables',
      name: 'Basic Tables',
      component: () => import('../views/Tables/BasicTables.vue'),
      meta: {
        title: 'Basic Tables',
      },
    },
    {
      path: '/line-chart',
      name: 'Line Chart',
      component: () => import('../views/Chart/LineChart/LineChart.vue'),
    },
    {
      path: '/bar-chart',
      name: 'Bar Chart',
      component: () => import('../views/Chart/BarChart/BarChart.vue'),
    },
    {
      path: '/alerts',
      name: 'Alerts',
      component: () => import('../views/UiElements/Alerts.vue'),
      meta: {
        title: 'Alerts',
      },
    },
    {
      path: '/avatars',
      name: 'Avatars',
      component: () => import('../views/UiElements/Avatars.vue'),
      meta: {
        title: 'Avatars',
      },
    },
    {
      path: '/badge',
      name: 'Badge',
      component: () => import('../views/UiElements/Badges.vue'),
      meta: {
        title: 'Badge',
      },
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: () => import('../views/UiElements/Buttons.vue'),
      meta: {
        title: 'Buttons',
      },
    },
    {
      path: '/images',
      name: 'Images',
      component: () => import('../views/UiElements/Images.vue'),
      meta: {
        title: 'Images',
      },
    },
    {
      path: '/videos',
      name: 'Videos',
      component: () => import('../views/UiElements/Videos.vue'),
      meta: {
        title: 'Videos',
      },
    },
    {
      path: '/blank',
      name: 'Blank',
      component: () => import('../views/Pages/BlankPage.vue'),
      meta: {
        title: 'Blank',
      },
    },
    {
      path: '/error-404',
      name: '404 Error',
      component: () => import('../views/Errors/FourZeroFour.vue'),
      meta: {
        title: '404 Error',
      },
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('../views/Auth/Signin.vue'),
      meta: {
        title: 'Signin',
      },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/Auth/Signup.vue'),
      meta: {
        title: 'Signup',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  // Rehydrate from localStorage if store is empty
  if (!userStore.token) {
    const persistedToken = localStorage.getItem('token')
    if (persistedToken) userStore.setToken(persistedToken)
  }
  if (!userStore.user) {
    const persistedUser = localStorage.getItem('user')
    if (persistedUser) {
      try {
        userStore.setUser(JSON.parse(persistedUser))
      } catch (_) {
        // corrupted user payload → clear
        userStore.clearUser()
      }
    }
  }

  const token = userStore.token
  let userScope = userStore.user?.scope

  // Validate JWT expiration and scope from token if available
  const isJwt = token && token.split('.').length === 3
  if (isJwt) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      const nowInSeconds = Math.floor(Date.now() / 1000)
      if (payload.exp && payload.exp < nowInSeconds) {
        // Token expired → force logout
        userStore.clearUser()
        if (to.meta.requiresAuth) return next('/login')
      }
      // derive scope from token if not already set
      if (!userScope && payload.scope) {
        userScope = payload.scope
        userStore.setUser({ ...(userStore.user || {}), scope: payload.scope })
      }
    } catch (_) {
      // invalid token → clear
      userStore.clearUser()
      if (to.meta.requiresAuth) return next('/login')
    }
  }

  if (to.meta.requiresAuth) {
    if (!token) return next('/login') // chưa login → login
    if (to.meta.scope && to.meta.scope !== userScope) {
      // đã login nhưng không đúng quyền → redirect về trang mặc định
      return next(userScope === 'ADMIN' ? '/admin' : '/')
    }
  }

  next()
})


export default router

router.beforeEach((to, from, next) => {
  document.title = `Vue.js ${to.meta.title} | TailAdmin - Vue.js Tailwind CSS Dashboard Template`
  next()
})


