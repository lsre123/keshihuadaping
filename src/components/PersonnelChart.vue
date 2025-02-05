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
    text: '人员变化(2020-2021)',
    textStyle: {
      color: '#fff',
      fontSize: 16
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['新增访客', '新增咨询'],
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1月', '3月', '5月', '7月', '9月', '11月'],
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255,255,255,0.1)'
      }
    }
  },
  series: [
    {
      name: '新增访客',
      type: 'line',
      data: [120, 132, 101, 134, 90, 230],
      itemStyle: {
        color: '#00f2f1'
      },
      lineStyle: {
        color: '#00f2f1'
      }
    },
    {
      name: '新增咨询',
      type: 'line',
      data: [220, 182, 191, 234, 290, 330],
      itemStyle: {
        color: '#ed3f35'
      },
      lineStyle: {
        color: '#ed3f35'
      }
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