<template lang="pug">
  div(id="app")
    nav.outline-blue
      router-link(to="/").outline-brown Вход
      router-link(to="/about") Аналитика
    router-view
</template>

<style lang="scss">
  $color: #2c3e50;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: $color;
    text-align: center;
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
