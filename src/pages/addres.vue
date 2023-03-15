<template>
  <div>
    <el-form :model="ruleForm"  ref="ruleForm" label-width="70px" class="demo-ruleForm">
      <el-form-item label="住户编号" prop="res_id" margin-bottom="0px">
        <el-input  v-model="ruleForm.res_id"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="res_name" :rules="[
      { required: true, message: '姓名不能为空'},]"
      >
        <el-input  v-model="ruleForm.res_name" ></el-input>
      </el-form-item>
      <el-form-item label="社区地址" prop="res_address" :rules="[
      { required: true, message: '地址不能为空'},]"
      >
        <el-input v-model.number="ruleForm.res_address"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="res_age" :rules="[
      { required: true, message: '年龄不能为空'},]"
      >
        <el-input v-model="ruleForm.res_age"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="res_tel" margin-bottom="10px">
        <el-input v-model="ruleForm.res_tel"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="res_idnumber" margin-bottom="10px">
        <el-input v-model="ruleForm.res_idnumber" ></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="res_password" margin-bottom="10px">
        <el-input v-model="ruleForm.res_password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
<!--        <el-button @click="resetForm('ruleForm')">重置</el-button>-->
        <el-button @click="fromEditToRes()">返回</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>


import {postRes} from "../api/api";

export default {
  name: "edit",
  data() {
    return {
      ruleForm:{
      },
    };
  },
  methods:{
    submitForm(){
      postRes(this.ruleForm).then(response=>{
        console.log("这是response"+response.data)
      })
    },
    fromEditToRes(){
      this.$router.push({ name: 'residents' })
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
