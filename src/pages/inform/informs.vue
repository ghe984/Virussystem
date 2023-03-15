<template>
<div>
  <el-table
      :data="infromDate"
      border
      style="width: 100%;height: 100%">
    <el-table-column
        prop="id"
        label="序号"
        width="180">
    </el-table-column>
    <el-table-column
        prop="inform_title"
        label="通知标题"
        width="180">
    </el-table-column>
    <el-table-column
        prop="inform_text"
        label="通知内容">
    </el-table-column>
    <el-table-column
        prop="inform_time"
        label="发布时间">
    </el-table-column>
    <el-table-column
        fixed="right"
        label="操作"
        width="100">
      <template slot-scope="scope">
        <el-button @click="delete_info(scope.row.id,scope.row.res_id)" type="text" size="small">删除通知</el-button>
        <!--        <el-button @click="change_res(scope.row.res_id)" type="text" size="small">编辑</el-button>-->
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import {getInfo} from "../../api/api";

export default {
  name: "informs",
  data(){
    return{
      infromDate:[],
    }
  },
  methods:{
  loadInform(){
    getInfo().then(response=>{
      this.infromDate=response.data
      console.log(this.infromDate)
    })
  },
    delete_info(){

    },
  },
  created() {
  this.loadInform()
  }
}
</script>

<style scoped>

</style>
