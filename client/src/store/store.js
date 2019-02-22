import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    event: {},
    events: [],
    tickets: [],
    verifyData: null
  },
  mutations: {
    selectEvent (state, event) {
      state.event = event
    },
    setTickets (state, tickets) {
      state.tickets = tickets
    },
    setEvents (state, events) {
      state.events = events
    },
    setVerifyData (state, data) {
      state.verifyData = data
    }
  },
  actions: {
    async createEvent (ctx, event) {
      try {
        // Post new event
        await axios.post('http://localhost:8081/api/events', event)

        // refresh events list
        ctx.dispatch('getEvents')
      } catch (err) {
        console.err(err.stack)
      }
    },
    async getEvents (ctx) {
      let events = await axios.get('http://localhost:8081/api/events')
      ctx.commit('setEvents', events.data)
    },
    async buy (ctx, buyData) {
      let tickets = await axios.post('http://localhost:8081/api/tickets', buyData)
      ctx.commit('setTickets', tickets.data)
      localStorage.setItem('tickets', JSON.stringify(tickets.data))
    },
    getTickets (ctx) {
      let tickets = localStorage.getItem('tickets')
      ctx.commit('setTickets', JSON.parse(tickets))
    },
    async verifyTicket (ctx, code) {
      let verification = await axios.get(`http://localhost:8081/api/verify/${code}`)
      ctx.commit('setVerifyData', verification.data)
    }
  }
})
