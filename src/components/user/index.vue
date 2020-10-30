<template lang="pug">
  div
    router-link(v-if="isAuth" to="/sign-out").outline-brown
      span Sign-Out
    router-link(v-if="!isAuth" to="/sign-in").outline-brown
      span Sign-In
</template>

<script>
  export default {
    name: 'User',
    props: {
      isAuth: {
        type: Boolean,
        default: !!['isAuth'],
      },
    },
  }
</script>
