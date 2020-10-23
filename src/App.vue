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
