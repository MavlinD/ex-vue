<template lang="pug">
  div
    hr
    nav.outline-blue
      router-link(to="/").outline-brown
        span Main
      router-link(to="/analytics")
        span Analytics
      User(:isAuth="isAuth()")
    hr
    router-view
</template>

<script>
  import User from 'components/user/index'

  export default {
    name: 'Nav',
    data() {
      return {
        isAuth: () => !!localStorage.getItem('leadhit-site-id'),
      }
    },
    components: {
      User,
    },
  }
</script>
