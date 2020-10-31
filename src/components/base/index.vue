<template lang="pug">
  .home
    h1 Vue app for example
    slot
    img(alt="Vue logo" src="@/assets/logo.png")
</template>

<script>
  export default {
    name: 'Base',
  }
</script>
