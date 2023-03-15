<template>
<div>
  <el-input
      placeholder="请输入要搜索的编号或姓名"
      prefix-icon="el-icon-search"
      v-model="search" >
  </el-input>
  <el-button   style="float: right" size="mini" type="primary" icon="el-icon-search" @click="searchabns()">搜索</el-button>
  <el-button style="float: left" size="mini"  type="primary" icon="el-icon-d-arrow-left" @click="returnAbns()">返回搜索</el-button>
<!--  <el-button style="float: left" size="mini"  type="primary" icon="el-icon-plus" @click="addAbns()">异常登记</el-button>-->
  <el-button style="float: left" size="mini"  type="primary" icon="el-icon-document-checked" @click="searchIshealed()">查看已处理数据</el-button>
  <el-button style="float: left" size="mini"  type="primary" icon="el-icon-document-delete" @click="searchunIshealed()">返回未处理处理数据</el-button>

  <el-table
      :data="infromData"
      border
      style="width: 100%"
  >
    <el-table-column
        prop="id"
        label="编号"
        width="100">
    </el-table-column>
    <el-table-column
        prop="res_id"
        label="住户编号"
        width="100">
    </el-table-column>
    <el-table-column
        prop="res_name"
        label="姓名"
        width="120">
    </el-table-column>
    <el-table-column
        prop="res_address"
        label="社区地址"
        width="120">
    </el-table-column>
    <el-table-column
        prop="res_tel"
        label="电话号码"
        width="250">
    </el-table-column>
    <el-table-column
        prop="material"
        label="需要物资"
        width="120">
    </el-table-column>
    <el-table-column
        prop="apply_time"
        label="申请时间"
        width="250">
    </el-table-column>
    <el-table-column
        prop="update_time"
        label="更新时间"
        width="150">
    </el-table-column>
    <el-table-column
        prop="iscompleted"
        label="已处理(1为已处理)"
        width="150">
    </el-table-column>
    <el-table-column
        fixed="right"
        label="操作"
        width="100">
      <template slot-scope="scope">
        <el-button @click="delete_res(scope.row.id,scope.row.res_id)" type="text" size="small">已处理</el-button>
        <!--        <el-button @click="change_res(scope.row.res_id)" type="text" size="small">编辑</el-button>-->
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import {getMats} from "../../api/api";

export default {
  name: "materials",
  data(){
    return{
      infromData:[],
    }
  },
  methods:{
    loadMats(){
      getMats().then(response=>{
        this.infromData=response.data
        console.log(response)
      })
    },
    searchIshealed(){

    },
  },
  created() {
  this.loadMats()
  }
}
</script>

<style scoped>

</style>
