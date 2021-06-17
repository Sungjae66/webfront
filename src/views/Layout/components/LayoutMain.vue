<template>
  <el-main class="layout_main">
    <el-scrollbar style="height:100%;">
      <!-- 子路由显示区 -->
      <keep-alive>
        <!-- 需要缓存 -->
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <!-- 不需要缓存 -->
      <router-view v-if="!$route.meta.keepAlive"/>
    </el-scrollbar>
  </el-main>
</template>

<script>
  export default {
    name: "LayoutMain",

  }
</script>

<style lang="less">
  .el-scrollbar__wrap{
    overflow-x: hidden;
  }
</style>
