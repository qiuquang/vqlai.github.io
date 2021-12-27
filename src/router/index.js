import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/pages/home/home')
export default new Router({
	// mode: 'history',
  routes: [
  	{
  	  path:"/",
  	  redirect: '/index'
  	},
    {
      path: '/index',
      name: 'Home',
      component: Home
    },
    {
      path: '/video',
      name: 'Video',
      component: () => import('@/pages/video/index.vue'),
      props: (route) => {
        return {
          videoSrc: route.query.videoSrc
        }
      }
    }
  ]
})
