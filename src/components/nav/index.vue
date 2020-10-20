<template lang="pug">
  div
    hr
    nav.outline-blue
      router-link(to="/").outline-brown Главная
      router-link(to="/analytics") Аналитика
      User(:isAuth="isAuth()")
    hr
    router-view
</template>

<script>

  import User from '@/components/user/index'

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
