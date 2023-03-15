<template>
  <div id="app">
    <h2 style="color: slategrey">欢迎进入社区疫情管理系统</h2>
    <HelloWorld></HelloWorld>
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="欢迎登录智慧社区疫情管理系统"/>-->
<!--    <router-link active-class="active" to='login'>登录</router-link>-->
<!--    <router-link active-class="active" to='admin'>admin</router-link>-->
<!--    <div>-->
<!--      <router-view></router-view>-->
<!--    </div>-->
<!--    -->
<!--<admin></admin>-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

// import admin from "./pages/admin";

export default {
  name: 'App',
  components: {
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  /*background-image: url("./assets/logintu.png");*/
  /*background-repeat:repeat-y;*/
}
</style>
