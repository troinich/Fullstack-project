<template>
  <div class="posts">
    <div v-if="posts.length > 0" class="table-wrap">
      <div></div>
      <table class="test">
        <tr>
          <th>Name</th>
          <th>Place</th>
          <th>Date</th>
          <th>Start</td>
          <th>End</th>
          <th>Price</th>
        </tr>
        <tr v-for="(post, index) in posts" :key="index">
          <td>{{ post.name }}</td>
          <td>{{ post.place }}</td>
          <td>{{ post.date }}</td>
          <td>{{ post.start }}</td>
          <td>{{ post.end }}</td>
          <td>{{ post.price }}</td>
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
body{
  margin: 5%;
}
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th {
  text-align: center;
}
table tr {
  text-align: left;
}
table thead {
color:pink;
}
table tr td {
  padding: 10px;
}

tr:nth-child(even) {
  background: #393366;
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
table.test {
    border-collapse: separate;
    border-spacing: 10px;
    *border-collapse: expression('separate', cellSpacing = '10px');
}
</style>
