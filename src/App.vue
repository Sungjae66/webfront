<template>
    <div id="app">
        <router-view/>
    </div>

</template>

<style lang="less">
    #app {
        width: 100%;
        height: 100%;
        font: 14px/1.5 Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        .el-header, .el-footer {
            background-color: #000;
            color: #fff;
            line-height: 60px;
        }
        
        .el-aside {
            background-color: #000;
            color: #333;
        }
        
        .el-main {
            background-color: #141a24;
            color: #333;
            overflow: hidden;
            border: 1px solid #fff;
        }
    }
</style>
