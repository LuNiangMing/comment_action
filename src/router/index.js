import Vue from 'vue'
import Router from 'vue-router'
let home = () =>
    import ('@/components/home.vue')
let list = () =>
    import ('@/components/list.vue')
let about = () =>
    import ('@/components/about.vue')

let other = () => improt('@/components/other')
let upload = () =>
    import ('@/components/upload.vue')

Vue.use(Router)
let router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: home,

            meta: {
                keepAlive: false
            }
        },
        {
            path: '/list',
            name: 'list',
            component: list,

            meta: {
                keepAlive: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: about,

            meta: {
                keepAlive: true
            }
        },
        {
            path: '/other',
            name: 'other',
            component: other,
            meta: {
                keepAlive: true
            },

        },
        {
            path: '/upload',
            name: 'upload',
            component: upload,
            meta: {
                keepAlive: false
            },

        }


    ],
    linkExactActiveClass: 'current', //路由精确匹配

    scrollBehavior: (to, from, savedPosition) => {
        // console.log(to, from, savedPosition)
        if (savedPosition) {
            // savedPosition is only available for popstate navigations.
            return savedPosition
        } else {
            const position = {}
                // new navigation.
                // scroll to anchor by returning the selector
            if (to.hash) {
                position.selector = to.hash
            }
            // 如果meta中有scrollTop
            if (to.matched.some(m => m.meta.scrollToTop)) {
                // cords will be used if no selector is provided,
                // or if the selector didn't match any element.
                position.x = 0
                position.y = 0
            }
            // if the returned position is falsy or an empty object,
            // will retain current scroll position.
            return position
        }


    }

})
router.beforeEach((to, from, next) => {
    console.log(to, from)
    next()
})

export default router