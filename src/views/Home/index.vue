<template>
    <div class="homeWrapper">
        <div>
            <h1>MVC和MVVM的区别</h1>
            <div>
                <h3>MVC</h3>
                <div style="margin-left: 25px;">
                    <p>MVC：Model View Controller，即模型（model）—— 视图（view）—— 控制器（controller）。</p>
                    <p>对MVC的解读：MVC是单向通信模式，View跟Model必须通过Controller来承上启下</p>
                    <div style="margin-left: 25px;">
                        <p>M：是应用程序中用于处理应用程序数据逻辑的部分，通常负责在数据库中存取数据。它需要提供接口给Controller访问数据。</p>
                        <p>V：是应用程序中处理数据显示的部分，通常是依据模型数据创建的。</p>
                        <p>C：是应用程序中处理用户交互的部分，通常负责从视图读取数据，控制用户输入，并向模型发送数据。</p>
                        <p>通信过程：View 接受用户交互请求==>请求转交给Controller处理==>Controller 操作Model进行数据更新保存==>Model通知View更新==>View 更新变化数据使用户得到反馈。</p>
                    </div>
                    <p>MVC的思想：Controller负责将model的数据用View显示出来。</p>
                </div>
            </div>
    
            <div class="box2">
                <h3>MVVM</h3>
                <div style="margin-left: 25px;">
                    <p>MVVM：Model View ViewModel，即数据模型（model）—— 视图（view）—— 视图模型（ViewModel）。</p>
                    <p>对MVVM的解读：</p>
                    <div style="margin-left: 25px;">
                        <p>M：是后端传递的数据。</p>
                        <p>V：是所看到的页面。</p>
                        <p>VM：是MVVM模式的核心，它是连接View和Model的桥梁。它有两个方向：一是将模型（Model）转化成视图(View)，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。二是将视图(View)转化成模型(Model)，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。这两个方向都实现的，我们称之为数据的双向绑定。</p>
                    </div>
                    <p>数据双向绑定的方式：</p>
                    <div style="margin-left: 25px;">
                    
                    </div>
                    <p>MVVM的优点：</p>
                    <div style="margin-left: 25px;">
                        <p>实现了视图和数据模型的相互解耦，减少了对DOM的操作，降低了维护成本，提高了代码的复用性和开发效率。</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="box1">
            <h1>手写响应式</h1>
            <div>
                <input type="text">
                <div id="model" style="color: #fff;height: 40px;"></div>
            </div>
        </div>
        
        <div class="box1">
            <h1>事件捕捉和事件冒泡</h1>
            <div class="wrap">
                <div class="middle">
                    <div class="inner">我是最里面的div</div>
                </div>
            </div>
        </div>
        
        
        <div class="box1">
            <h1>事件代理（事件委托）</h1>
            <div id="eventBox">
                <el-button type="success">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
            </div>
        </div>
        
        
        <div style="width: 50%;" class="box1">
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
        <div class="box1">
            <h1>函数的防抖</h1>
            <el-input v-model="debounceText" placeholder="请输入内容"></el-input>
        </div>
        
        <div class="box1">
            <h1>函数的节流</h1>
            <el-button :plain="true" @click="alertMsg">打开消息提示</el-button>
        </div>
        <div class="box1">
            <h1>回流和重绘</h1>
            <div>
                <div>
                    <h3>首先了解浏览器渲染的过程：</h3>
                    <p>1)、浏览器根据HTML生成DOM树（包括隐藏和动态生成的节点）。</p>
                    <p>2)、根据样式表生成样式结构体。</p>
                    <p>3)、两者结合生成render tree(不包含display：none和head节点，但包含visibility：hidden节点)</p>
                    <p>4)、浏览器根据render tree渲染页面。</p>
                </div>
                <div class="box2">
                    <p>回流：当render tree中的部分或全部因元素的布局、尺寸、显隐等改变而需要重新构建时，即为回流。</p>
                    <p></p>
                </div>
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
                debounceText: '',  //防抖文本框
                timer: null, //定时器
                canRun: true, // 开关
            }
        },

        components: {},

        mounted() {
            that = this;
            /*
            * 手写响应式
            * */
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

            /*
           * 事件冒泡、事件捕获和事件代理
           * */
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

            //事件代理（事件委托）
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
            debounceText() {
                this.debounce(this.changeText, 500)
            }
        },

        methods: {
            /*
            * 防抖：短时间内持续触发一个事件，函数不执行，只有触发间隔超过指定间隔时，任务才会执行。
            * 实现：input输入框实时搜索，设置一个定时器，让事件延迟执行。当再次输入时，则清空上一个还未结束的定时器，并开启新的定时任务。
            * 理解：持续触发时不断清空定时器，直到不再触发时才开始执行定时器内的任务。
            * */
            debounce(fn, wait) {
                if (this.timer !== null) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(fn, wait)
            },
            //防抖：input输入框实时搜索
            changeText() {
                console.log(this.debounceText)
            },

            /*
            * 节流：持续触发函数时，一段时间内只执行一次函数。
            * 实现：按钮的点击，设置一个开关为true，此时代表可以执行任务。用户首次触发后，关闭开关并执行任务，此时再次触发事件不会执行。在n秒内任务执行完成，再打开开关，代表可以执行新的任务。
            * 实现：滚动条的持续滚动
            * 理解：用户首次触发后，在n秒内持续触发也只会执行一次函数，直到任务执行完成后，用户触发才会再次执行。
            * */
            //节流：按钮的点击发送
            alertMsg() {
                if (!this.canRun) return false
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
    .homeWrapper {
        color: #fff;
        
        .box1, .box2 {
            margin-top: 20px;
        }
        
        .wrap {
            width: 300px;
            height: 100px;
            text-align: center;
            border: 1px solid #fff;
            
            .middle {
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
