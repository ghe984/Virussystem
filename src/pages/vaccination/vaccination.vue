<template>
  <div>
    <el-input
        placeholder="请输入要搜索的住户编号或姓名"
        prefix-icon="el-icon-search"
        v-model="search" >
    </el-input>
    <el-button   style="float: right" size="mini" type="primary" icon="el-icon-search" @click="searchvaccs()">搜索</el-button>
    <el-button style="float: left" size="mini"  type="primary" icon="el-icon-d-arrow-left" @click="returnvaccs()">返回搜索</el-button>
<!--    <el-button style="float: left" size="mini"  type="primary" icon="el-icon-plus" @click="addAccs()">出入登记</el-button>-->
    <!--    <el-button style="float: left" size="mini"  type="primary" icon="el-icon-document-checked" @click="searchIshealed()">查看已处理数据</el-button>-->
    <!--    <el-button style="float: left" size="mini"  type="primary" icon="el-icon-document-delete" @click="searchunIshealed()">返回未处理处理数据</el-button>-->

    <el-table
        :data="tableData"
        border
        style="width: 100%"
    >

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
          prop="vacc_fre"
          label="疫苗接种次数"
          width="150">
      </el-table-column>
      <el-table-column
          prop="vacc_time"
          label="最后一次接种时间"
          width="150">
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
          prop="adm_name"
          label="登记人"
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
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <div height="120px">

    </div>

  </div>
</template>

<script>
import {getvaccs, searchVaccid, searchVaccname} from "../../api/api";

export default {
  name: "vaccination",
  data(){
    return{
      tableData:[],
      search:'',
    }
  },
  methods:{
    loadVaccs(){
      getvaccs().then(response=>{
        this.tableData=response.data
        console.log(this.tableData)
      })
    },
    searchvaccs(){
      var numReg = /^[0-9]*$/
      var numRe = new RegExp(numReg)
      if(!numRe.test(this.search)){
        searchVaccname(this.search).then(response=>{
          this.tableData=response.data
          console.log("已经进入searchname")
          console.log(response.data)
          // this.loadBooks()
        })
      }
      else{
        searchVaccid(this.search).then(response=>{
          this.tableData=response.data
          console.log("已经进入searchsid")
          console.log(response.data)
        })
      }
    },
    returnvaccs(){this.loadVaccs()},
  },
  created() {
  this.loadVaccs()
  },
  mounted() {
    console.log("进入vaccination.vue")
  }
}
</script>

<style scoped>

</style>
