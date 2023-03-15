<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside
        style="width: 210px; background-color: rgb(238, 241, 246)"
    >
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
          default-active="this.$route.path"
          class="el-menu-vertical-demo"
          :unique-opened="true"
          router
          @open="handleOpen"
          @close="handleClose">
        <el-menu-item index="/index" >
          <i class="el-icon-document"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>登记管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title"></template>
            <el-menu-item index="/abnormals">异常登记</el-menu-item>
            <el-menu-item index="/accessregs">出入登记</el-menu-item>
            <el-menu-item index="/vaccinations">接种记录</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/residents">
          <i class="el-icon-menu"></i>
          <span slot="title">住户信息管理</span>
        </el-menu-item>
        <el-menu-item index="/materials" >
          <i class="el-icon-document"></i>
          <span slot="title">物资申请管理</span>
        </el-menu-item>
        <el-menu-item index="/inform">
          <i class="el-icon-setting"></i>
          <span slot="title">通知发布管理</span>
        </el-menu-item>
      </el-menu>
      </el-col>
  </el-row>
     </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    </el-container>

</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goto(path){
      this.$router.replace(path);
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.table{

}
</style>
