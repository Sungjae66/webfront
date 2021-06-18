<template>
    <div class="echartsWrapper">
        <div>
            <h1>可视化插件</h1>
            <dv-loading>Loading...</dv-loading>
            <div id="container" style="padding: 30px;width:40%;height: 400px;">
                <dv-border-box-1>
                    <dv-charts :option="option1"/>
                </dv-border-box-1>
            </div>
        
        </div>
    </div>
</template>

<script>
    // import bar from './component/bar'

    let that;
    export default {
        name: "index",
        data() {
            return {
                //离散的类目数据
                option1: {
                    title: {
                        text: '气温与降雨量走势图'
                    },
                    legend: {
                        data: ['降雨量', '气温'],
                        bottom: 10
                    },
                    xAxis: {
                        data: [
                            '一月份', '二月份', '三月份', '四月份', '五月份', '六月份',
                            '七月份', '八月份', '九月份', '十月份', '十一月份', '十二月份'
                        ],
                        axisLabel: {
                            style: {
                                rotate: 20,
                                textAlign: 'left',
                                textBaseline: 'top'
                            }
                        },
                        axisTick: {
                            show: false
                        }
                    },
                    yAxis: [
                        {
                            name: '降雨量',
                            data: 'value',
                            min: 0,
                            max: 300,
                            interval: 50,
                            splitLine: {
                                style: {
                                    lineDash: [3, 3]
                                }
                            },
                            axisLabel: {
                                formatter: '{value} ml'
                            },
                            axisTick: {
                                show: false
                            }
                        },
                        {
                            name: '气温',
                            data: 'value',
                            position: 'right',
                            min: 0,
                            max: 30,
                            interval: 5,
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                formatter: '{value} °C',
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    series: [
                        {
                            name: '降雨量',
                            data: [
                                175, 125, 90, 130, 45, 65,
                                65, 47, 50, 52, 45, 37
                            ],
                            type: 'bar',
                            gradient: {
                                color: ['#37a2da', '#67e0e3']
                            },
                            animationCurve: 'easeOutBounce'
                        },
                        {
                            name: '气温',
                            data: [
                                23, 18, 16, 14, 10, 8,
                                6, 6, 6, 6, 6, 5
                            ],
                            type: 'line',
                            yAxisIndex: 1,
                            animationCurve: 'easeOutBounce'
                        }
                    ]
                },

                option2: {
                    title: {
                        text: '气温与降雨量走势图'
                    },
                    legend: {
                        data: ['降雨量', '气温'],
                        bottom: 10
                    },
                    xAxis: {
                        data: [
                            '一月份', '二月份', '三月份', '四月份', '五月份', '六月份',
                            '七月份', '八月份', '九月份', '十月份', '十一月份', '十二月份'
                        ],
                        axisLabel: {
                            style: {
                                rotate: 20,
                                textAlign: 'left',
                                textBaseline: 'top'
                            }
                        },
                        axisTick: {
                            show: false
                        }
                    },
                    yAxis: [
                        {
                            name: '降雨量',
                            data: 'value',
                            min: 0,
                            max: 300,
                            interval: 50,
                            splitLine: {
                                style: {
                                    lineDash: [3, 3]
                                }
                            },
                            axisLabel: {
                                formatter: '{value} ml'
                            },
                            axisTick: {
                                show: false
                            }
                        },
                        {
                            name: '气温',
                            data: 'value',
                            position: 'right',
                            min: 0,
                            max: 30,
                            interval: 5,
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                formatter: '{value} °C',
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    series: [
                        {
                            name: '降雨量',
                            data: [
                                155, 135, 100, 120, 40, 55,
                                70, 50, 45, 55, 40, 37
                            ],
                            type: 'bar',
                            gradient: {
                                color: ['#37a2da', '#67e0e3']
                            },
                            animationCurve: 'easeOutBounce'
                        },
                        {
                            name: '气温',
                            data: [
                                22, 18, 15, 14, 11, 9,
                                5, 5, 5, 5, 5, 4
                            ],
                            type: 'line',
                            yAxisIndex: 1,
                            animationCurve: 'easeOutBounce'
                        }
                    ]
                },
            }
        },

        components: {},

        mounted() {
            that = this;
        },

        watch: {
        
        },

        methods: {
        
        },
    }
</script>

<style scoped lang="less">
    .echartsWrapper {
        color: #fff;
        
        .wrap {
            width: 300px;
            height: 100px;
            text-align: center;
            border: 1px solid #fff;
            
            .box {
                width: 200px;
                height: 70px;
                line-height: 70px;
                margin: 15px auto;
                border: 1px solid #fff;
                
                .inner {
                    width: 150px;
                    height: 30px;
                    line-height: 30px;
                    margin: 20px auto;
                    border: 1px solid #fff;
                }
            }
        }
        
        #eventBox {
            margin-top: 20px;
            width: 50%;
            display: flex;
            justify-content: space-between;
            
            input {
                display: inline-block;
            }
        }
        
        .floatBox {
            float: left;
            width: 150px;
            text-align: center;
        }
        
        .bfcBox {
            display: flex;
            flex-direction: column;
            border-left: 1px solid #fff;
            
            p {
                border: 1px solid #fff;
                margin: auto;
            }
        }
        
    }

</style>
