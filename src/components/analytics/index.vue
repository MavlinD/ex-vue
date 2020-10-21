<template lang="pug">
  .analytics
    line-chart-container
</template>

<script>

  export default {
    title: 'Аналитика',
    name: 'Analytics',
    components: {
      LineChartContainer: () => {
        return import('@/components/chart/index')
      },
    },
    beforeRouteEnter(to, from, next) {
      if (!localStorage.getItem('leadhit-site-id')) {
        next({ name: 'SignIn' })
      } else next()
    },
  }
</script>

<style lang="scss">
  .analytics {
    canvas {
      background-color: #d5f2ff;
    }
  }
</style>
