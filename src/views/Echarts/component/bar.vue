<template>
    <div id="echartsBox" style="width: 600px;height:400px;"></div>
</template>

<script>
    export default {
        name: "bar",
        props:['barData'],
        data(){
            return{
                dataObj:{},
                color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
            }
        },
        mounted(){
            this.initEchart()
        },
        methods: {
            //初始化图表
            initEchart(){
                // 基于准备好的dom，初始化echarts实例
                this.dataObj = this.barData;
                var myChart = this.$echarts.init(document.getElementById('echartsBox'));
                // 绘制图表
                myChart.setOption({
                    color:this.dataObj.color?this.dataObj.color:this.color,
                    backgroundColor: this.dataObj.backgroundColor?this.dataObj.backgroundColor:'#fff',
                    title: {
                        text:this.dataObj.title?this.dataObj.title:''
                    },
                    tooltip: {},
                    dataset: {
                        source: this.dataObj.source
                    },
                    xAxis: {
                        type:'category'
                    },
                    yAxis: {},
                    series: this.dataObj.series
                });
            },
        },
    }
</script>

<style scoped>

</style>
