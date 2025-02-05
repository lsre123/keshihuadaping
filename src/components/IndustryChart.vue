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
    text: '就业行业分布',
    textStyle: {
      color: '#fff',
      fontSize: 16
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: '15%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['旅游行业', '游戏行业', '电商行业', '金融行业'],
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
    axisLabel: {
      interval: 0,
      color: '#fff'
    }
  },
  yAxis: {
    type: 'value',
    max: 1500,
    axisLine: {
      show: true,
      lineStyle: {
        color: '#fff'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,0.1)',
        type: 'dashed'
      }
    }
  },
  series: [
    {
      data: [200, 250, 800, 1200],
      type: 'bar',
      barWidth: '40%',
      itemStyle: {
        color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#00feff' },
          { offset: 1, color: '#027eff' }
        ]),
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowBlur: 10,
        borderRadius: [4, 4, 0, 0]
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