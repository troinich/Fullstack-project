<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link v-bind:to="{ name: 'Posts' }" class>Go to the list of events</router-link>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'There will be the logo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div .hello{
  background-color: #231F42;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
