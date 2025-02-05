<template>
  <div class="chart" ref="chartRef"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()
const chartRef = ref(null)
let chart = null

const option = {
  title: {
    text: '地区分布',
    textStyle: {
      color: '#fff',
      fontSize: 16
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    right: 10,
    top: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  series: [
    {
      name: '地区分布',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 20, name: '北京', itemStyle: { color: '#00f2f1' } },
        { value: 18, name: '山东', itemStyle: { color: '#00b4ff' } },
        { value: 15, name: '河北', itemStyle: { color: '#0066ff' } },
        { value: 12, name: '江苏', itemStyle: { color: '#41b883' } },
        { value: 10, name: '浙江', itemStyle: { color: '#68a063' } },
        { value: 8, name: '四川', itemStyle: { color: '#ed3f35' } },
        { value: 7, name: '湖北', itemStyle: { color: '#ff9f7f' } }
      ]
    }
  ]
}

onMounted(() => {
  chart = proxy.$echarts.init(chartRef.value)
  chart.setOption(option)
  
  window.addEventListener('resize', () => {
    chart.resize()
  })
})

onUnmounted(() => {
  if (chart) {
    chart.dispose()
  }
})
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style> 