<template>
  <div>
    <el-form :model="ruleForm"  ref="ruleForm" label-width="70px" class="demo-ruleForm">
      <el-form-item label="住户编号" prop="abnormal_id" :rules="[
      { required: true, message: '住户编号不能为空'},]"
      >
        <el-input  v-model="ruleForm.abnormal"></el-input>
      </el-form-item>

      <el-form-item label="姓名" prop="name">
        <el-input  v-model="ruleForm.abnormal_name" ></el-input>
      </el-form-item>
      <el-form-item label="症状" prop="abcondition" :rules="[
      { required: true, message: '症状不能为空'},]"
      >
        <el-input v-model.number="ruleForm.abcondition"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="fromEditToRes()">返回</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>


import {postAbnormals} from "../../api/api";

export default {
  name: "addAbns",
  data() {
    return {
      ruleForm:{},
    };
  },
  methods:{
    submitForm(){
      console.log(this.ruleForm)
      postAbnormals(this.ruleForm.abcondition,this.ruleForm.abnormal).then(response=>{
        console.log("这是addAbns"+response.data)
      })
    },
    fromEditToRes(){
      this.$router.push({ name: 'abnormals' })
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
