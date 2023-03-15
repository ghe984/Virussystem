<template>
  <div>
    <el-form :model="AccsForm"  ref="ruleForm" label-width="70px" class="demo-ruleForm">
      <el-form-item label="住户编号" prop="accessor_id" :rules="[
      { required: true, message: '住户编号不能为空'},]"
      >
        <el-input  v-model="AccsForm.accessor_id"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="res_name">
        <el-input  v-model="AccsForm.res_name" ></el-input>
      </el-form-item>
      <el-form-item label="目的地" prop="access_adr" :rules="[
      { required: true, message: '目的地不能为空'},]"
      >
        <el-input v-model.number="AccsForm.access_adr"></el-input>
      </el-form-item>
      <el-form-item label="登记人编号" prop="access_adr" :rules="[
      { required: true, message: '登记人编号不能为空'},]"
      >
        <el-input v-model.number="AccsForm.accregis_id"></el-input>
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

import {postAccessregs} from "../../api/api";

export default {
  name: "addAccs",
  data() {
    return {
      AccsForm:{
      },
    };
  },
  methods:{
    submitForm(){
      postAccessregs(this.AccsForm).then(response=>{
        console.log("这是response"+response.data)
      })
    },
    fromEditToRes(){
      this.$router.push({ name: 'accessreg' })
    }
  },
  mounted() {
    console.log("进入addAccs.vue")
  }
}
</script>

<style scoped>

</style>
