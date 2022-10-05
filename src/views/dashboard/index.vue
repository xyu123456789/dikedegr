<template>
  <div class="dashboard-container">
    <div class="dashboard-one-box">
      <div class="dashboard-one-box-left">
        <div class="dashboard-one-box-left-top">
          <div>1</div>
          <div>2</div>
        </div>
        <div class="dashboard-one-box-left-bottom">
          <div id="bottom-main-left" />
          <div id="bottom-main-right" />
        </div>
      </div>
      <div class="dashboard-one-box-right" />
    </div>
    <div class="dashboard-two-box">
      <div id="dashboard-two-box-noe" />
      <div id="dashboard-two-box-two">异常设备监控</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as echarts from 'echarts'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['name'])
  },
  mounted() {
    const myChart = echarts.init(document.getElementById('bottom-main-left'))
    const newMyChart = echarts.init(
      document.getElementById('bottom-main-right')
    )
    const newRadiusMyChart = echarts.init(
      document.getElementById('dashboard-two-box-noe')
    )
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['星期一', '星期二', '星期三']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224],
          type: 'line'
        }
      ]
    })
    newMyChart.setOption({
      xAxis: {
        type: 'category',
        data: ['北京平', '霍营街']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200],
          type: 'bar',
          barWidth: 10
        }
      ]
    })

    newRadiusMyChart.setOption({
      legend: {
        top: 'bottom'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [50, 250],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data: [
            { value: 40, name: 'rose 1' },
            { value: 38, name: 'rose 2' },
            { value: 32, name: 'rose 3' },
            { value: 30, name: 'rose 4' },
            { value: 28, name: 'rose 5' },
            { value: 26, name: 'rose 6' },
            { value: 22, name: 'rose 7' },
            { value: 18, name: 'rose 8' }
          ]
        }
      ] })
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  .dashboard-one-box {

    display: flex;
    .dashboard-one-box-left {
      display: flex;
      flex: 0 0 75%;
      flex-direction: column;
      .dashboard-one-box-left-top {
        height: 166px;
        display: flex;
        margin-bottom: 20px;
        > div {
          background-color: rgb(207, 35, 35);
          border-radius: 20px;
          flex: 1;
        }
        > div:nth-of-type(1),
        div:nth-of-type(2) {
          margin-right: 20px;
        }
      }
      .dashboard-one-box-left-bottom {
        background-color: #fff;
        border-radius: 20px;
        flex: 1;
        display: flex;
        > div {
          flex: 1;
        }
      }
    }
    .dashboard-one-box-right {
      flex: 0 0 25%;
      background-color: rgb(42, 35, 35);
      height: 166px;
      border-radius: 20px;
      height: 540px;
    }
  }
  .dashboard-two-box {
    margin-top: 20px;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    height: 360px;
    > div {
      flex: 1;
    }
    > div:nth-of-type(1) {
      margin-right: 20px;
    }
  }
}
</style>
