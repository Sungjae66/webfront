<template>
<div class="layoutWrapper">
  <LayoutHeader />
  <el-container style="height: calc(100% - 60px)">
    <LayoutNav />
    <LayoutMain />
  </el-container>
  
</div>
</template>

<script>
  import LayoutNav from './components/LayoutNav.vue';
  import LayoutMain from './components/LayoutMain.vue';
  import LayoutHeader from './components/LayoutHeader.vue';
  export default {
    name: "index",
    components:{
      LayoutNav,
      LayoutMain,
      LayoutHeader
    },
  }
</script>

<style scoped lang="less">
.layoutWrapper{
  width: 100%;
  height: 100%;
}
</style>
