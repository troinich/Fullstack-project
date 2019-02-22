<template>
  <div id="hello">
    <section class="content">
      <img src="../assets/logo1.svg" alt="Where its @" @click="$router.push('/events')">
      <h1>Where it´s @</h1>
    </section>
  </div>
</template>

<script>

export default {
}
</script>

<style>

#hello{
  background: #231f42;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
h1 {
  color: red;
  font-size: 2.2rem;
  margin: 0.5rem 0;
}
