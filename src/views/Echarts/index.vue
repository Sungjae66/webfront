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
        
        <div>
            <h1>手写响应式</h1>
            <div>
                <input type="text">
                <div id="model" style="color: #fff;height: 40px;"></div>
            </div>
        </div>
        
        <div>
            <h1>事件捕捉和事件冒泡</h1>
            <div class="wrap">
                <div class="box">
                    <div class="inner">我是最里面的div</div>
                </div>
            </div>
        </div>
        
        
        <div style="margin-top: 20px">
            <h1>事件代理（事件委托）</h1>
            <div id="eventBox">
                <el-button type="success">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
            </div>
        </div>
        
        
        <div style="margin-top: 20px;width: 50%;">
            <h1>BFC块级格式化上下文实现两栏布局</h1>
            <div style="border: 1px solid #fff;">
                <div class="floatBox">
                    浮动元素
                </div>
                <div class="bfcBox">
                    <p>我是第一个p</p>
                    <p>我是另一个p</p>
                </div>
            </div>
        
        </div>
        
        <!--        函数的防抖和节流-->
        <div style="margin-top: 20px">
            <h1>函数的防抖</h1>
            <el-input v-model="debounceText" placeholder="请输入内容"></el-input>
        </div>
    
        <div style="margin-top: 20px">
            <h1>函数的节流</h1>
            <el-button :plain="true" @click="alertMsg">打开消息提示</el-button>
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

                debounceText: '',  //防抖文本框
                timer: null, //定时器
                canRun: true, // 开关
            }
        },

        components: {},

        mounted() {
            that = this;
            //响应式
            let input = document.querySelector('input')
            let p = document.querySelector('#model')
            const obj = {}
            let inputValue = ''
            Object.defineProperty(obj, 'msg', {
                get() {
                    return inputValue;
                },
                set(value) {
                    inputValue = value;
                    p.innerHTML = inputValue;
                }
            })

            input.addEventListener('keyup', (e) => {
                obj.msg = e.target.value;
            })

            //事件冒泡
            let wrap = document.getElementsByClassName('wrap')[0]
            let box = document.getElementsByClassName('box')[0]
            let inner = document.getElementsByClassName('inner')[0]

            wrap.addEventListener('click', function () {
                console.log('我是冒泡: wrap')
            }, false)
            box.addEventListener('click', function () {
                console.log('我是冒泡: box')
            }, false)
            inner.addEventListener('click', function (e) {
                if (e.stopPropagation) {
                    e.stopPropagation();
                } else {
                    e.cancelBubble = true;
                }
                console.log('我是冒泡: inner')
            }, false)

            //事件捕获
            wrap.addEventListener('click', function () {
                console.log('我是捕获: wrap111')
            }, true)
            box.addEventListener('click', function () {
                console.log('我是捕获: box111')
            }, true)
            inner.addEventListener('click', function () {
                console.log('我是捕获: inner111')
            }, true)

            //事件委托
            let button = document.getElementById('eventBox')
            button.onclick = function (e) {
                var e = e || window.event;
                var target = e.target || e.srcElement;  //兼容IE
                if (target.nodeName.toLowerCase() == 'span') {
                    console.log(target.innerHTML)
                }
            }
        },

        watch: {
            debounceText(){
                this.debounce(this.changeText, 500)
            }
        },

        methods: {
            /*
            * 防抖：短时间内持续触发一个事件，函数不执行，停止触发后的一段时间内才执行
            * 实现：input输入框实时搜索，设置一个定时器，让事件延迟执行。当再次输入时，则清空上一个还未结束的定时器，并开启新的定时任务。
            * 理解：持续触发时不断清空定时器，直到不再触发时才开始执行定时器内的任务。
            * */
            debounce (fn, wait) {
                if (this.timer !== null) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(fn, wait)
            },
            //防抖：input输入框实时搜索
            changeText(){
                console.log(this.debounceText)
            },

            /*
            * 节流：持续触发函数时，一段时间内只执行一次函数。
            * 实现：按钮的点击，设置一个开关为true，此时代表可以执行任务。用户首次触发后，关闭开关并执行任务，此时再次触发事件不会执行。在n秒内任务执行完成，再打开开关，代表可以执行新的任务。
            * 实现：滚动条的持续滚动
            * 理解：用户首次触发后，在n秒内持续触发也只会执行一次函数，直到任务执行完成后，用户触发才会再次执行。
            * */
            //节流：按钮的点击发送
            alertMsg(){
                if(!this.canRun) return false
                this.canRun = false
                setTimeout(() => {
                    this.$message('这是一条消息提示');
                    this.canRun = true
                }, 1000)
            },
            
            
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
