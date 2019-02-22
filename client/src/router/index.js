import Vue from 'vue'
import Router from 'vue-router'
import Hello from '/home/natalia/posts/client/src/components/Hello'
import Posts from '/home/natalia/posts/client/src/components/Posts'
// import Verify from '/home/natalia/posts/client/src/components/Verify'
import Ticket from '/home/natalia/posts/client/src/components/Ticket'
import Admin from '/home/natalia/posts/client/src/components/Admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/events',
      name: 'Posts',
      component: Posts
    },
    /* {
      path: '/verify',
      name: 'Verify',
      component: Verify
    },
    {
      path: '/tickets',
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay
    }, */
    {
      path: '/tickets',
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]

})
