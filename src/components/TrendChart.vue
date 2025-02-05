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
    text: '播放量和转发量趋势',
    textStyle: {
      color: '#fff',
      fontSize: 16
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['播放量', '转发量'],
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
    data: Array.from({ length: 28 }, (_, i) => i + 1),
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
      name: '播放量',
      type: 'line',
      smooth: true,
      data: [30, 40, 20, 50, 60, 40, 80, 30, 40, 20, 50, 60, 40, 80, 30, 40, 20, 50, 60, 40, 80, 30, 40, 20, 50, 60, 40, 80],
      itemStyle: {
        color: '#00f2f1'
      },
      lineStyle: {
        color: '#00f2f1'
      },
      areaStyle: {
        color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(0,242,241,0.3)' },
          { offset: 1, color: 'rgba(0,242,241,0.1)' }
        ])
      }
    },
    {
      name: '转发量',
      type: 'line',
      smooth: true,
      data: [130, 110, 120, 90, 100, 110, 90, 130, 110, 120, 90, 100, 110, 90, 130, 110, 120, 90, 100, 110, 90, 130, 110, 120, 90, 100, 110, 90],
      itemStyle: {
        color: '#ed3f35'
      },
      lineStyle: {
        color: '#ed3f35'
      },
      areaStyle: {
        color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(237,63,53,0.3)' },
          { offset: 1, color: 'rgba(237,63,53,0.1)' }
        ])
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