<template>
  <el-header>
    <div style="text-align: right">
      <el-dropdown trigger="click">
        <div style="width: 40px;height: 40px;border-radius: 50%">
          <img style="border-radius: 50%;" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" width="100%" height="100%">
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus" @click.native="loginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
  export default {
    name: "LayoutHeader",
    data(){
      return{
      
     }
    },
    methods:{
      //退出登录
      loginOut(){
        this.$store.commit('DEL_TOKEN',null);
        this.$router.replace('/login')
      }
    }
  }
</script>

<style scoped lang="less">
.header{
  width: 100%;
  height: 60px;
}
</style>
