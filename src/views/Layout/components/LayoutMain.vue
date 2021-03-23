<template>
  <el-main>
    <!-- 子路由显示区 -->
    <keep-alive>
      <!-- 需要缓存 -->
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <!-- 不需要缓存 -->
    <router-view v-if="!$route.meta.keepAlive"/>
  </el-main>
</template>

<script>
  export default {
    name: "LayoutMain",

  }
</script>

<style scoped lang="less">
  .mainWrapper {
    width: calc(100% - 200px);
    height: calc(100% - 60px);
  }
</style>
