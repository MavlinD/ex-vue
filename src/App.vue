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
      padding: 20px 40px;
      font-weight: bold;
      background-color: $color;
      color: $txt-color;
      text-decoration: none;

      span {
        padding-bottom: 3px;
        border: solid currentColor;
        border-width: 0 0 2px 0;
        transition: all 0.2s;
      }

      &:hover {
        background-color: #0b2c44;
        transition: all 0.2s;

        span {
          border-color: transparent;
          transition: all 0.2s;
        }
      }

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
