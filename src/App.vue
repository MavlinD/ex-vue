<template lang="pug">
  div(id="app")
    Base
      slot
        p Author: &nbsp;
            strong MDV
    Nav
</template>

<script>
  import Base from 'components/base/index.vue'
  import Nav from 'components/nav/index.vue'

  export default {
    name: 'App',
    components: {
      Base,
      Nav,
    },
  }
</script>
