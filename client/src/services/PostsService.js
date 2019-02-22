import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('events')
  },
  addPost (params) {
    return Api().post('events', params)
  },
  /*  updatePost (params) {
    return Api().put('posts/' + params.id, params)
  }, */
  getPost (params) {
    return Api().get('events/' + params.id)
  },
  deletePost (id) {
    return Api().delete('events/' + id)
  },
  fetchTickets () {
    return Api().get('tickets')
  }
}
