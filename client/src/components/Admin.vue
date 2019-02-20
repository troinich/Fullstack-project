/* eslint-disable */

<template>
  <div class="admin">
    <div v-if="posts.length > 0" class="table-wrap">
        <table>
        <tr>
          <td>Namn</td>
          <td>Var</td>
          <td>Antal platser</td>
          <td>Sälda biljetter</td>
        </tr>
        <tr v-for="(post, index) in posts" :key="index">
          <td>{{ post.name }}</td>
          <td>{{ post.place }}</td>
          <td>{{ post.available }}</td>
          <td>{{ post.sold }}</td>
               </tr>
      </table>
    </div>
    <div v-else>Any available events</div>
    <aside class="form">
                <input type="text" placeholder="Name" v-model="name" required>
                <input type="text" placeholder="Where" v-model="place" required>
                <input type="text" placeholder="Date" v-model="date" required>
                <input type="text" placeholder="From time" v-model="start" required>
                <input type="text" placeholder="To time" v-model="end" required>
                <input type="number" placeholder="Price" v-model="price" required>
                <a href="#" class="btn" @click="createEvent">Add the event</a>
            </aside>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'posts',
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
    },
    async createEvent () {
      await PostsService.addPost({
        name: this.name,
        place: this.place,
        date: this.date,
        start: this.start,
        end: this.end,
        price: this.price
      })
      this.getPosts()
      this.$router.push({ name: 'Admin' })
      this.getPosts()
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
