<template lang="pug">
  .hello
    h1 {{ msg }}
    p.
      For a guide and recipes on how to configure / customize this project, </br> check out the
    p Lorem ipsum dolor sit amet, consectetur
      |  adipisicing elit.
</template>

<script>
  let ggg

  export default {
    name: 'SignIn',
    props: {
      msg: String,
    },
  }
</script>

<style lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
