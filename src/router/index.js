import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
	{
		name:'home',
		path: '/home',
    component: () => import('@/pages/home'), // 路由懒加载
    meta: {
      title: '首页',
      showFooter: true
    },
		children: [
			{
				name: 'home-product',
				path: 'product/:id',
				component: () => import('@/pages/product')
			}
		]
	},
	{
		name:'category',
		path: '/category',
    component: () => import('@/pages/category'),
    meta: {
      title: '商品分类',
      showFooter: true
    }
	},
	{
		name:'cart',
		path: '/cart',
    component: () => import('@/pages/cart'),
    meta: {
      title: '购物车',
      showFooter: true
    }
	},
	{
		name:'personal',
		path: '/personal',
    component: () => import('@/pages/personal'),
    meta: {
      title: '个人中心',
      showFooter: true
    }
	},
	{
		name:'search',
		path: '/search',
    component: () => import('@/pages/search'),
    meta: {
      title: '搜索',
      showFooter: false
    },
	},
	{
		path: '*',
   	redirect: '/home'
	}
]
export default new Router({
  routes
})
