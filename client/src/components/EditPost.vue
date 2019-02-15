<template>
  <div class="posts">
    <h1>Edit Event</h1>
    <div class="form">
      <div>
        <input type="text" placeholder="Name" v-model="name">
      </div>
      <div>
        <input type="text" placeholder="Where" v-model="place">
      </div>
      <div>
        <input type="text" placeholder="Date" v-model="date">
      </div>
      <div>
        <input type="text" placeholder="From time" v-model="start">
      </div>
      <div>
        <input type="text" placeholder="To time" v-model="end">
      </div>
      <div>
        <input type="text" placeholder="# Seats" v-model="seats">
      </div>
      <div>
        <button class="app_post_btn" @click="updatePost">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'EditPost',
  data () {
    return {
      name: '',
      place: '',
      date: '',
      start: '',
      end: '',
      seats: ''
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.description = response.data.description
      this.name = response.data.name
      this.place = response.data.place
      this.date = response.data.date
      this.start = response.data.start
      this.end = response.data.end
      this.seats = response.data.seats
    },
    async updatePost () {
      await PostsService.updatePost({
        id: this.$route.params.id,
        name: this.name,
        place: this.place,
        date: this.date,
        start: this.start,
        end: this.end,
        seats: this.seats
      })
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
<style type="text/css">
.form input,
.form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
