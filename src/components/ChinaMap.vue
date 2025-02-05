<template>
  <div class="chart" ref="chartRef"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue'
import * as echarts from 'echarts'
import chinaJson from '../assets/china.json'

const { proxy } = getCurrentInstance()
const chartRef = ref(null)
let chart = null

// 注册地图数据
echarts.registerMap('china', chinaJson)

const cities = [
  { name: '北京', value: [116.405285, 39.904989] },
  { name: '上海', value: [121.472644, 31.231706] },
  { name: '广州', value: [113.280637, 23.125178] },
  { name: '深圳', value: [114.085947, 22.547] },
  { name: '杭州', value: [120.153576, 30.287459] },
  { name: '武汉', value: [114.298572, 30.584355] },
  { name: '成都', value: [104.065735, 30.659462] },
  { name: '西安', value: [108.948024, 34.263161] },
  { name: '哈尔滨', value: [126.642464, 45.756967] }
]

const linesData = [
  { coords: [[116.405285, 39.904989], [121.472644, 31.231706]], lineStyle: { color: '#ffa022' } },
  { coords: [[116.405285, 39.904989], [113.280637, 23.125178]], lineStyle: { color: '#ffa022' } },
  { coords: [[116.405285, 39.904989], [114.298572, 30.584355]], lineStyle: { color: '#ffa022' } },
  { coords: [[121.472644, 31.231706], [120.153576, 30.287459]], lineStyle: { color: '#00f2f1' } },
  { coords: [[121.472644, 31.231706], [114.298572, 30.584355]], lineStyle: { color: '#00f2f1' } },
  { coords: [[114.298572, 30.584355], [104.065735, 30.659462]], lineStyle: { color: '#00b4ff' } },
  { coords: [[114.298572, 30.584355], [108.948024, 34.263161]], lineStyle: { color: '#00b4ff' } },
  { coords: [[126.642464, 45.756967], [116.405285, 39.904989]], lineStyle: { color: '#ffa022' } }
]

const option = {
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'item',
    formatter: '{b}'
  },
  geo: {
    map: 'china',
    roam: false,
    zoom: 1.2,
    center: [105, 36],
    label: {
      show: false
    },
    itemStyle: {
      areaColor: '#142957',
      borderColor: '#0692a4',
      borderWidth: 1,
      shadowColor: 'rgba(0,180,255,0.3)',
      shadowBlur: 10
    },
    emphasis: {
      itemStyle: {
        areaColor: '#2B91B7'
      },
      label: {
        show: false
      }
    },
    select: {
      label: {
        show: false
      }
    }
  },
  series: [
    {
      type: 'lines',
      coordinateSystem: 'geo',
      zlevel: 2,
      effect: {
        show: true,
        period: 4,
        trailLength: 0.4,
        symbol: 'arrow',
        symbolSize: 6,
        loop: true
      },
      lineStyle: {
        width: 1,
        opacity: 0.6,
        curveness: 0.2
      },
      data: linesData
    },
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 3,
      data: cities,
      symbolSize: 12,
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke',
        scale: 4,
        period: 4
      },
      itemStyle: {
        color: '#f4e925',
        shadowBlur: 10,
        shadowColor: '#333'
      },
      emphasis: {
        scale: true
      },
      label: {
        show: true,
        position: 'right',
        formatter: '{b}',
        fontSize: 12,
        color: '#fff',
        textBorderColor: '#000',
        textBorderWidth: 3
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