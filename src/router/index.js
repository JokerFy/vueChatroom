import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/index'
import Chat from '../views/chat/index'
import Center from '../views/center/index'
import Main from '../views/layout/index'
import Login from '../views/common/login'

Vue.use(Router)

const mainRoutes = [{
  path: '/',
  component: Main,
  name: 'main',
  meta: { title: '主入口整体布局' },
  children: [
    { path: '/index', component: Index, name: 'index', meta: { title: '消息' } },
    { path: '/chat', component: Chat, name: 'index', meta: { title: '通讯录' } },
    { path: '/center', component: Center, name: 'index', meta: { title: '个人中心' } }
  ]
},
{
  path: '/login',
  component: Login,
  name: 'login',
  meta: { title: '登录' }
}
]

const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
  routes: mainRoutes
})

export default router
