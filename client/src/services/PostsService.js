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
  getEvent (params) {
    return Api().get('events/' + params._id)
  },
  /* deletePost (id) {
    return Api().delete('events/' + id)
  }, */
  fetchTickets () {
    return Api().get('tickets')
  },
  getTicket (params) {
    return Api().get('tickets' + params.id)
  }
}
