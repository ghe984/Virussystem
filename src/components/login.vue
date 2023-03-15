<template>
  <div class="login">
    <h1>我是login的内若</h1>
    <div class="login-con">
      <form action="">
        输入账号: <el-input v-model="zhanghao.id" placeholder="请输入内容"></el-input>
        <br>
        输入密码:<el-input placeholder="请输入密码" v-model="zhanghao.password" show-password></el-input> <br>
      </form>
      <button type="submit" @click="bookSubmit()">submit</button>
    </div>
  </div>
</template>

<script>
export default {
  // 给组件取名，辨别是哪个组件
  name: "login",
  data(){
    return{
      zhanghao:{
        id:'',
        password:''
      }
    }
  }
}
</script>

<style scoped>
.login{
  width: 100%;
  height: 100%;
  background-image: url('../assets/logintu.png');
  background-size: cover;
  background-position: center;
  position: relative;
/*  &-con{*/
/*   position: absolute;*/
/*   right: 160px;*/
/*   top: 50%;*/
/*   transform: translateY(-60%);*/
/*   width: 300px;*/
/*&-header{*/
/*   font-size: 16px;*/
/*   font-weight: 300;*/
/*   text-align: center;*/
/*   padding: 30px 0;*/
 }
.form-con{
  padding: 10px 0 0;
}
.login-tip{
  font-size: 10px;
  text-align: center;
  color: #c3c3c3;
}

</style>
