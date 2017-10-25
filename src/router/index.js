import Vue from 'vue'
import Router from 'vue-router'
// import VueResource from 'vue-resource'

// 1.调用vue.use
Vue.use(Router)
// Vue.use(VueResource)

// 2.定义路由组件
import goods from '@/components/goods/goods.vue'
import ratings from '@/components/ratings/ratings.vue'
import seller from '@/components/seller/seller.vue'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ],
  linkActiveClass: 'active'
})

