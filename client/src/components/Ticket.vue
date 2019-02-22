<template>
    <article class="ticket">
        <section class="what">
            <p class="type">what</p>
            <h1>{{ ticket.name }}</h1>
        </section>
        <section class="where">
            <p class="type">Where</p>
            <h2>{{ ticket.place }}</h2>
        </section>
        <section class="when">
            <p class="type">When</p>
            <h2>{{ ticket.date }}</h2>
        </section>
        <section class="from">
            <p class="type">From</p>
            <h2>{{ ticket.start }}</h2>
        </section>
        <section class="to">
            <p class="type">To</p>
            <h2>{{ ticket.end }}</h2>
        </section>
        <section class="info">
            <p class="type">Price</p>
            <p>{{ ticket.price }}</p>
        </section>
       <!--  <section class="code">
            <h1 class="barcode">
                {{ ticket.code }}
            </h1>
            <p class="utfcode">#{{ ticket.code }}</p>
        </section> -->
    </article>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'ticket',
  data () {
    return {
      ticket: ''
    }
  },
  mounted () {
    this.getThisTicket()
  },
  methods: {
    async getThisTicket () {
      const response = await PostsService.getEvent()
      this.ticket = response.data
    }
  }
}
</script>
<style>

</style>
