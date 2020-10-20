<template lang="pug">
  div(id="app")
    Home
    Nav
</template>

<script>
  import Home from '@/components/home/index.vue'
  import Nav from '@/components/nav/index.vue'

  export default {
    name: 'App',
    components: {
      Home,
      Nav
    },
  }
</script>

<style lang="scss">
  $color: #2c3e50;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: $color;
    text-align: center;
  }

  hr {
    width: 50%;
  }

  nav {
    display: grid;
    padding: 30px;
    grid-auto-flow: column;
    place-content: center center;
    gap: 2rem;

    a {
      font-weight: bold;
      color: $color;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
