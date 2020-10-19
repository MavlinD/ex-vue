<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png"/>
    <SignIn head="Тестовое задание для Lead-hit"/>
  </div>
</template>

<script>
  import SignIn from '@/components/sign-in/index.vue'

  export default {
    name: 'Home',
    components: {
      SignIn,
    },
  }
</script>
