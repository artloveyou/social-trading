<template>
    <line-chart :data="lineChartData" :options="lineChartOptions" :height="70"/>
</template>

<script>
  import LineChart from '~/components/charts/LineChart'

  const chartColors = {
    blue: '#DCF0FB',
    deepblue: '#95CFF3'
  };

  export default {
    components: {
      LineChart
    },
    props: ['labels', 'data'],
    data() {
      return {
        lineChartData: {
          labels: this.labels,
          datasets: [
            {
              label: 'Income',
              lineTension: 0,
              borderColor: [chartColors.deepblue],
              borderWidth: 1,
              radius: 0,
              backgroundColor: [chartColors.blue],
              data: this.data
            }
          ]
        },
        lineChartOptions: {
          responsive: true,
          legend: {
            display: false
          },
          title: {
            display: false,
            text: 'Title'
          },
          scales: {
            yAxes: [
              {
                display: false
              }
            ],
            xAxes: [
              {
                display: false
              }
            ]
          }
        }
      }
    }
  }
</script>
