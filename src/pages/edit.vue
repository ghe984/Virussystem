<template>
  <div>
    <el-form :model="ruleForm" :label-position="labelPosition" ref="ruleForm" label-width="70px" class="demo-ruleForm">
      <el-form-item label="住户编号" prop="pass" :rules="[
      { required: true, message: '住户编号不能为空'},]"
      >
        <el-input  v-model.number="ruleForm.res_id"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name" :rules="[
      { required: true, message: '姓名不能为空'},]"
      >
        <el-input  v-model="ruleForm.res_name" ></el-input>
      </el-form-item>
      <el-form-item label="社区地址" prop="address" :rules="[
      { required: true, message: '地址不能为空'},]"
      >
        <el-input v-model="ruleForm.res_address"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age" :rules="[
      { required: true, message: '年龄不能为空'},]"
      >
        <el-input v-model.number="ruleForm.res_age"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="tel" margin-bottom="10px">
        <el-input v-model="ruleForm.res_tel"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="idnumber" margin-bottom="10px">
        <el-input v-model="ruleForm.res_idnumber" ></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="pass" margin-bottom="10px">
        <el-input v-model="ruleForm.res_password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm()">重置</el-button>
        <el-button @click="fromEditToRes()">返回</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import {getRes, PuteditRes,} from "../api/api";

export default {
  name: "edit",
  created() {
    console.log('已经进入edit页面')
  },
  data() {
    return {
      labelPosition: 'left',
      id:'',
      // ruleForm:[],
      ruleForm:{
      }
    };
  },
  methods:{
    loadRes(id){
    getRes(id).then(response=>{
      this.ruleForm=response.data
      console.log(this.ruleForm)
    })
    },
    submitForm(){
      console.log("这是ruleForm"+this.ruleForm)
      PuteditRes(this.ruleForm.res_id,this.ruleForm.res_password,this.ruleForm.res_name,this.ruleForm.res_address,
          this.ruleForm.res_tel,this.ruleForm.res_age,this.ruleForm.res_idnumber)
          .then(response=>{
        console.log("这是response"+response.data)
        this.loadRes(this.ruleForm.res_id)
      })
    },
    resetForm(){
      this.loadRes(this.ruleForm.res_id)
    },
    fromEditToRes(){
      this.$router.push({ name: 'residents' })
    }

  },
  mounted() {
    var id = this.$route.query.res_id;
    this.loadRes(id)
  }
}
</script>

<style scoped>

</style>
