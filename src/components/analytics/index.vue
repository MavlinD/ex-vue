<template lang="pug">
  .analytics
    line-chart-container
</template>

<script>
  import { checkSiteId } from '@/components/analytics'

  export default {
    title: 'Аналитика',
    name: 'Analytics',
    components: {
      LineChartContainer: () => {
        return import('components/chart/index')
      },
    },
    beforeRouteEnter(to, from, next) {
      checkSiteId(to, from, next)
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
