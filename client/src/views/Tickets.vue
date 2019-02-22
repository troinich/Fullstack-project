<template>
  <main id="tickets">
      <ticket v-for="(ticket, index) in tickets" :key="index" :ticket="ticket" />
  </main>
</template>

<script>

import ticket from '@/components/Ticket';

export default {
  name: 'tickets',
  components: {
      ticket
  },
  computed: {
      tickets(){
          return this.$store.state.tickets;
      }
  },
  beforeMount(){
      if(localStorage.getItem('tickets')){
          this.$store.dispatch('getTickets');
      }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';

#tickets {
    @extend %center;
    background: $darkblue;
    background: linear-gradient(to bottom, $pink 0%,$darkblue 50%);
}
</style>