<template>
  <div class="posts">
    <div v-if="posts.length > 0" class="table-wrap">
      <div></div>
      <table>
        <tr>
          <td>NAMN</td>
          <td>VAR</td>
          <td>ANTAL PLATSER</td>
          <td>SÅLDA BILJETTER</td>

          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="(post, index) in posts" :key="index">
          <td>{{ post.name }}</td>
          <td>{{ post.place }}</td>
          <td>{{ post.total }}</td>
          <td>{{ post.sold }}</td>

          <td align="center">
            <a href="#" @click="deletePost(post._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>There are no events.. Lets add one now</div>
    <!-- <NewPost/> -->
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
// import NewPost from './NewPost'

export default {
  name: 'posts',
  /*  components: {
    NewPost
  }, */

  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    },
    async deletePost (id) {
      await PostsService.deletePost(id)
      this.getPosts()
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th,
table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
