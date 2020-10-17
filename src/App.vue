<template lang="pug">
  div(id="app")
    nav(id="nav").outline-blue
      router-link(to="/").outline-brown Sign-In
      router-link(to="/about") Analytics
    router-view
</template>

<style lang="scss">
  $color: #2c3e50;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: $color;
    text-align: center;
  }

  #nav {
    display: grid;
    grid-auto-flow: column;
    place-content: center center;
    gap: 2rem;
    padding: 30px;

    a {
      font-weight: bold;
      color: $color;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
