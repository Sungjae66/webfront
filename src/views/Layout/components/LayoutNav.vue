<template>
  <el-aside class="navWrapper">
    <el-menu v-if="activeIndex"
             :default-active="$route.path"
             class="el-menu-vertical-demo"
             :collapse="isCollapse"
             router
    >
      <el-menu-item @click="openMenu" class="openMenu">
        <i :class="iconName"></i>
        <span slot="title">菜单栏目</span>
      </el-menu-item>
      <template v-for="(item,index) in routers" v-if="!item.hidden">
        <template v-if="!item.leaf">
          <el-submenu :key="item.meta.name" :index="item.path">
            <!-- 一级菜单 -->
            <template slot="title">
              <i :class="item.meta.icon"></i>
              <span slot="title">{{item.meta.name}}</span>
            </template>
            <!-- 子级菜单 -->
            <template v-for="subItem in item.children">
              <el-menu-item v-if="!subItem.hidden" :key="subItem.meta.name" :index="subItem.path">
                {{subItem.meta.name}}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else v-for="subItem in item.children">
          <el-menu-item v-if="!subItem.hidden" :key="item.meta.name" :index="subItem.path">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{ item.meta.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    name: "LayoutNav",
    data() {
      return {
        isCollapse: false,
        iconName: 'el-icon-s-fold',
        routers: [],
      };
    },
    computed:{
      activeIndex(){
        return this.$route.path
      }
    },
    watch: {
    
    },
    created() {
      this.routers = this.$router.options.routes
    },
    methods: {
      //菜单折叠
      openMenu() {
        this.isCollapse = !this.isCollapse;
        if (!this.isCollapse) {
          this.iconName = 'el-icon-s-unfold'
        } else {
          this.iconName = 'el-icon-s-fold'
        }
      },
    }
  }
</script>

<style scoped lang="less">
  .navWrapper {
    width: auto !important;
    
    .openMenu {
      min-width: 200px;
      background-color: #70b8ba;
      color: #fff;
    }
  }
</style>
