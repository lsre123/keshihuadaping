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
    text: '技术栈使用比例',
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
    right: '20%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    max: 100,
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'category',
    data: ['NODE', 'VUE', 'JavaScript', 'CSS3', 'HTML5'],
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#fff',
      fontSize: 14
    }
  },
  series: [
    {
      type: 'bar',
      barWidth: 20,
      data: [
        {
          value: 60,
          itemStyle: {
            color: new proxy.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: '#68a063' },
              { offset: 1, color: '#68a063' }
            ])
          }
        },
        {
          value: 70,
          itemStyle: {
            color: new proxy.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: '#41b883' },
              { offset: 1, color: '#41b883' }
            ])
          }
        },
        {
          value: 60,
          itemStyle: {
            color: new proxy.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: '#4788fb' },
              { offset: 1, color: '#4788fb' }
            ])
          }
        },
        {
          value: 34,
          itemStyle: {
            color: new proxy.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: '#00b4ff' },
              { offset: 1, color: '#00b4ff' }
            ])
          }
        },
        {
          value: 70,
          itemStyle: {
            color: new proxy.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: '#00f2f1' },
              { offset: 1, color: '#00f2f1' }
            ])
          }
        }
      ],
      label: {
        show: true,
        position: 'right',
        formatter: '{c}%',
        color: '#fff',
        fontSize: 14
      },
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.1)'
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