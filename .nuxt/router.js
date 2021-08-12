import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4e176f35 = () => interopDefault(import('../pages/indicacoes/index.vue' /* webpackChunkName: "pages/indicacoes/index" */))
const _2ff6773a = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _43b1badd = () => interopDefault(import('../pages/indicacoes/_id.vue' /* webpackChunkName: "pages/indicacoes/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/indicacoes",
    component: _4e176f35,
    name: "indicacoes"
  }, {
    path: "/inspire",
    component: _2ff6773a,
    name: "inspire"
  }, {
    path: "/indicacoes/:id",
    component: _43b1badd,
    name: "indicacoes-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
