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
      Nav,
    },
  }
</script>

<style lang="scss">
  $color: #2c3e50;
  $bg-color: #42b983;
  $txt-color: #c7d2ce;

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
    grid-auto-flow: column;
    place-content: center center;
    place-items: center;

    a {
      font-weight: bold;
      color: $txt-color;
      text-decoration: none;
      padding: 20px 40px;
      background-color: $color;

      span {
        padding-bottom: 3px;
        transition: all 0.2s;
        border: solid currentColor;
        border-width: 0 0 2px;
      }

      &:hover {
        transition: all 0.2s;
        background-color: #0b2c44;

        span {
          transition: all 0.2s;
          border-color: transparent;
        }
      }

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
