import Vue from 'vue'
import Router from 'vue-router'
import Hello from '/home/natalia/posts/client/src/components/Hello'
import Posts from '/home/natalia/posts/client/src/components/Posts'
// import NewPost from '/home/natalia/posts/client/src/components/NewPost'
// import EditPost from '/home/natalia/posts/client/src/components/EditPost'

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
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
    /*    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    } */
    /* {
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
    } */
  ]
})
