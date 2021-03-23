<template>
  <div class="userWrapper">
    <div id="echartsBox" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {}
    },

    mounted(){
      this.initEchart()
    },
    
    methods: {
      //初始化图表
      initEchart(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('echartsBox'));
        // 绘制图表
        myChart.setOption({
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      },
    },
  }
</script>

<style scoped lang="less">

</style>
