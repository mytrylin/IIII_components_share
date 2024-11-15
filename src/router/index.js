import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
const index = () => import('@/views/Index.vue')

const router = createRouter ({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: '首頁',
      }
    },
    { path: '/:catchAll(.*)', name: '404', component: index } // router 例外處理
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      if (!window.location.hash) {
        // 為了防止頁面中的錨點功能被吃掉
        setTimeout(() => {
          resolve({ left: 0, top: 0 , behavior: 'smooth'})
        }, 300);
      }
    });
  }
});

export default router
