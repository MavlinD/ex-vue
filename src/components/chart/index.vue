<template lang="pug">
  .container
    h2 Аналитика
    line-chart(
      v-if="loaded"
      :chartdata="chartdata"
      :chartoptions="chartoptions")
</template>

<script>
  import LineChart from './Chart.vue'
  import moment from 'moment'

  moment.locale('ru')

  function setLabels(arg) {
    return arg.map(val => {
      return moment(val.date)
    })
  }

  function setData(arg) {
    return arg.map(val => {
      return val.visits
    })
  }

  const chartData = arg => {
    return {
      labels: arg.labels,
      datasets: [
        {
          label: 'Кол-во посетителей',
          data: arg.data,
          lineTension: 0.25,
          fill: true,
          borderColor: '#9400fb',
          backgroundColor: 'rgb(229,199,249, .65)',
          pointBackgroundColor: '#9400fb',
          pointRadius: 7,
          pointHoverRadius: 12,
          pointHitRadius: 30,
          pointStyle: 'circle',
        },
      ],
    }
  }

  const chartOptions = {
    title: {
      display: true,
      fontSize: 24,
      text: 'Аналитика по визитам',
    },
    legend: {
      display: false,
    },
    layout: {
      padding: 25,
    },
    tooltips: {
      xPadding: 15,
      yPadding: 10,
      caretPadding: 12,
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          bounds: 'ticks',
          time: {
            unit: 'week',
            unitStepSize: 1,
            round: 'day',
            tooltipFormat: 'D MMMM YYYY',
          },
          gridLines: {
            color: 'black',
            borderDash: [5, 5],
            zeroLineColor: 'black',
            zeroLineBorderDash: [5, 5],
            drawBorder: true,
            drawOnChartArea: true,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            drawBorder: true,
            drawOnChartArea: true,
            color: 'black',
            borderDash: [5, 5],
          },
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  }

  export default {
    name: 'LineChartContainer',
    components: { LineChart },
    data: () => ({
      loaded: false,
      chartdata: null,
      chartoptions: null,
    }),
    async mounted() {
      this.loaded = false
      try {
        const data = await import('./data.json')
        this.chartdata = chartData({
          labels: setLabels(data.default),
          data: setData(data.default),
        })
        this.chartoptions = chartOptions
        this.loaded = true
      } catch (e) {
        console.error(e)
      }
    },
  }
</script>

<style lang="scss">
  .container {
    width: unquote('max(75%, min(1200px, 100%))');
    margin: 0 auto;
  }
</style>
