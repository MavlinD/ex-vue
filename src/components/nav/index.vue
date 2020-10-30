<template lang="pug">
  div
    hr
    nav.outline-blue
      router-link(to="/").outline-brown
        span Main
      router-link(to="/analytics")
        span Analytics
      router-link(v-if="isAuth()" to="/sign-out").outline-brown
        span Sign-Out
      router-link(v-if="!isAuth()" to="/sign-in").outline-brown
        span Sign-In
    hr
    router-view
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        isAuth: () => !!localStorage.getItem('leadhit-site-id'),
      }
    },
  }
</script>
