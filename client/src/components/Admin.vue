<template>
  <div class="admin">
    <div v-if="posts.length > 0" class="table-wrap">
        <table class ="test">
        <tr>
          <th>Namn</th>
          <th>Var</th>
          <th>Antal platser</th>
          <th>Sälda biljetter</th>
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
    <br>
    <aside class="form">
                <input type="text" placeholder="Name" v-model="name">
                <input type="text" placeholder="Where" v-model="place">
                <input type="text" placeholder="Date" v-model="date">
                <input type="text" placeholder="From time" v-model="start">
                <input type="text" placeholder="To time" v-model="end">
                <input type="number" placeholder="Price" v-model="price">
            </aside>
            <br>
                <a href="#" class="btn" @click="createEvent">Add the event</a>

  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'Admin',
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
body{
  margin: 5%;
  padding-bottom: 10%;
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
  padding: 2%;
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
aside{
    padding-top: 1%;
}
table.test {
    border-collapse: separate;
    border-spacing: 10px;
    *border-collapse: expression('separate', cellSpacing = '10px');
}
a {
  display: block;
  color: pink;
  text-decoration: none;
  padding: 1%;
  font-weight: bold;
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
