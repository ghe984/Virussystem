<template>
  <div>
    <div>
      <h1>通知发布</h1>
    </div>
    <el-input
        type="textarea"
        autosize
        placeholder="请输入通知标题"
        v-model="textarea1">
    </el-input>
    <div style="margin: 20px 0;">
    </div>
    <el-input
        type="textarea"
        :autosize="{ minRows:1, maxRows: 4}"
        placeholder="请输入通知内容"
        v-model="textarea2">
    </el-input>
    <div style="margin: 20px 0;"></div>
    <el-button type="primary" @click="addInfo()" >发布<i class="el-icon-upload el-icon--right" ></i></el-button>
    <el-button type="primary" @click="getInfo()" icon="el-icon-share" style="float:right " >管理</el-button>

  </div>

</template>

<script>
import {postInfo} from "../../api/api";

export default {
  name: "eddinform",
  data() {
    return {
      textarea1: '',
      textarea2: ''
    }
  },
  methods:{
    addInfo(){
      postInfo(this.textarea1,this.textarea2)
    },
    getInfo(){
      this.$router.push({name:"informs"})
    },
  }
}
</script>

<style scoped>

</style>
