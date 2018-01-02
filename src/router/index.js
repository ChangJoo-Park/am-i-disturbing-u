import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'

const LoginPage = () => import(/* webpackChunkName: "auth" */ '@/pages/Login')
const SignUpPage = () => import(/* webpackChunkName: "auth" */ '@/pages/SignUp')
const NotFoundPage = () => import(/* webpackChunkName: "not-found" */ '@/pages/NotFound')
const AdminPage = () => import(/* webpackChunkName: "admin" */ '@/pages/Admin')
const MainPage = () => import(/* webpackChunkName: "main" */ '@/pages/Main')
const TeamSettingPage = () => import(/* webpackChunkName: "main" */ '@/pages/TeamSetting')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login-page',
      component: LoginPage
    },
    {
      path: '/sign-up',
      name: 'signup-page',
      component: SignUpPage
    },
    {
      path: '/admin',
      name: 'admin-page',
      component: AdminPage,
      beforeEnter: AuthGuard
    },
    {
      path: '/app',
      name: 'main-page',
      component: MainPage,
      beforeEnter: AuthGuard
    },
    {
      path: '/team-settings',
      name: 'team-setting-page',
      component: TeamSettingPage
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFoundPage
    }
  ]
})
