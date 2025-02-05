<template>
  <div class="dashboard">
    <!-- 顶部标题 -->
    <header class="header">
      <h1>数据可视化-ECharts</h1>
      <div class="time">{{ currentTime }}</div>
    </header>

    <!-- 主体内容 -->
    <main class="main">
      <!-- 左侧图表 -->
      <div class="left-panel">
        <div class="chart-container">
          <IndustryChart />
        </div>
        <div class="chart-container">
          <PersonnelChart />
        </div>
        <div class="chart-container">
          <AgeChart />
        </div>
      </div>

      <!-- 中间内容 -->
      <div class="center-panel">
        <div class="number-board">
          <div class="number-item">
            <div class="label">访问需求人数</div>
            <div class="value">{{ formatNumber(12434) }}</div>
          </div>
          <div class="number-item">
            <div class="label">市场供应人数</div>
            <div class="value">{{ formatNumber(10983) }}</div>
          </div>
        </div>
        <div class="map-container">
          <ChinaMap />
        </div>
      </div>

      <!-- 右侧图表 -->
      <div class="right-panel">
        <div class="chart-container">
          <TechStackChart />
        </div>
        <div class="chart-container">
          <TrendChart />
        </div>
        <div class="chart-container">
          <RegionChart />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import dayjs from 'dayjs'
import IndustryChart from './components/IndustryChart.vue'
import PersonnelChart from './components/PersonnelChart.vue'
import AgeChart from './components/AgeChart.vue'
import ChinaMap from './components/ChinaMap.vue'
import TechStackChart from './components/TechStackChart.vue'
import TrendChart from './components/TrendChart.vue'
import RegionChart from './components/RegionChart.vue'

const currentTime = ref('')
let timer = null

const updateTime = () => {
  currentTime.value = dayjs().format('YYYY年MM月DD日 HH:mm:ss')
}

const formatNumber = (num) => {
  return num.toString().padStart(5, '0')
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.05);

  h1 {
    font-size: 24px;
    color: #fff;
  }

  .time {
    font-size: 16px;
    color: #00f2f1;
  }
}

.main {
  flex: 1;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  gap: 20px;
  padding: 20px 0;
}

.left-panel,
.right-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .chart-container {
    flex: 1;
  }
}

.center-panel {
  .number-board {
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(25, 186, 139, 0.17);
    padding: 20px;

    .number-item {
      text-align: center;
      position: relative;
      padding: 10px 30px;

      &::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 50%;
        background: rgba(255,255,255,0.2);
        right: 0;
        top: 25%;
      }

      &:last-child::after {
        display: none;
      }

      .label {
        font-size: 16px;
        color: #00f2f1;
        margin-bottom: 10px;
      }

      .value {
        font-family: 'DS-Digital', sans-serif;
        font-size: 36px;
        font-weight: bold;
        color: #ffeb7b;
        text-shadow: 0 0 10px rgba(255,235,123,0.5);
      }
    }
  }

  .map-container {
    height: calc(100% - 120px);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(25, 186, 139, 0.17);
  }
}
</style> 