<template lang="pug">
  .analytics
    h1 This is an analytics page
</template>

<script>

  export default {
    name: 'Analytics',
    components: {},
    beforeRouteEnter(to, from, next) {
      if (!localStorage.getItem('leadhit-site-id')) {
        next({ name: 'SignIn' })
      } else next()
    },

  }
</script>
