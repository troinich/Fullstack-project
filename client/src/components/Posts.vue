<template>
  <div class="posts">
    <div v-if="posts.length > 0" class="table-wrap">
      <div></div>
      <table>
        <tr>
          <td>Name</td>
          <td>Place</td>
          <td>Date</td>
          <td>Start</td>
          <td>End</td>
          <td>Price</td>

        </tr>
        <tr v-for="(post, index) in posts" :key="index">
          <td>{{ post.name }}</td>
          <td>{{ post.place }}</td>
          <td>{{ post.date }}</td>
          <td>{{ post.start }}</td>
          <td>{{ post.end }}</td>
          <td>{{ post.price }}</td>

            <!-- <a href="#" @click="deletePost(post._id)">Delete</a> -->
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
      this.posts = response.data
    }/* ,
    async deletePost (id) {
      await PostsService.deletePost(id)
      this.getPosts()
      this.$router.push({ name: 'Posts' })
    } */
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
