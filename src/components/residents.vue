<template>
  <div class="hello">
    <!--    show residents list-->
<!--    <ul>-->
<!--      <li v-for="(res,index) in residents" :key="index" style="display: block">-->
<!--        {{index}}&#45;&#45;{{res.res_id}}&#45;&#45;{{res.res_name}}&#45;&#45;{{res.res_address}}-->
<!--      </li>-->
<!--    </ul>-->
<!--    <router-link to="/residents/addres">增加</router-link>-->
    <el-input
        placeholder="请输入要搜索的编号或姓名"
        prefix-icon="el-icon-search"
        v-model="search" >
    </el-input>
    <el-button   style="float: right" size="mini" type="primary" icon="el-icon-search" @click="searchres()">搜索</el-button>
<!--    <el-button   type="primary" icon="el-icon-d-arrow-left" @click="returnRes()">返回搜索</el-button>-->
    <el-button style="float: left" size="mini"  type="primary" icon="el-icon-d-arrow-left" @click="returnRes()">返回搜索</el-button>
    <el-button style="float: left" size="mini"  type="primary" icon="el-icon-plus" @click="addRes()">增加社区住户</el-button>
    <el-button style="float: left" size="mini"  type="primary" icon="el-icon-document-checked" @click="searchIsresided()">查看住户档案表</el-button>

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
            prop="res_address"
            label="社区地址"
            width="120">
        </el-table-column>
        <el-table-column
            prop="res_age"
            label="年龄"
            width="120">
        </el-table-column>
        <el-table-column
            prop="res_tel"
            label="电话号码"
            width="250">
        </el-table-column>
        <el-table-column
            prop="res_idnumber"
            label="身份证号"
            width="250">
        </el-table-column>
        <el-table-column
            prop="res_password"
            label="密码"
            width="150">
        </el-table-column>
<!--        <el-table-column-->
<!--            prop="isresided"-->
<!--            label="居住"-->
<!--            width="300">-->
<!--        </el-table-column>-->
        <el-table-column
            fixed="right"
            label="操作"
            width="100">
          <template slot-scope="scope">
            <el-button @click="delete_res(scope.row.res_id,scope.row.res_password,scope.row.res_name,scope.row.res_address,scope.row.isresided)" type="text" size="small">删除</el-button>
            <el-button @click="change_res(scope.row.res_id)" type="text" size="small">编辑</el-button>
<!--            字符串写法-->
<!--            <router-link :to="`/residents/edit?id=${scope.row.res_id}`" size="small"> 编辑</router-link>-->
<!--            2.数组写法-->
<!--            <router-link :to="{-->
<!--              path:'/residents/edit',-->
<!--              query:{id:scope.row.res_id}-->
<!--            }" > 编辑</router-link>-->
          </template>
        </el-table-column>
      </el-table>
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
<!--    <el-button type="primary" icon="el-icon-circle-plus">增加</el-button>-->
<!--    <div>-->
<!--      <router-view></router-view>-->
<!--    </div>-->
    <div height="120px">

    </div>
<!--    <form action="">-->
<!--      输入账号:<input type="text" placeholder="res_id" v-model="inputBook.id"> <br>-->
<!--      输入密码:<input type="text" placeholder="res_password" v-model="inputBook.pass"> <br>-->
<!--      &lt;!&ndash;      输入地址:<input type="text" placeholder="res_address" v-model="inputBook.address">&ndash;&gt;-->
<!--    </form>-->
<!--    <button type="submit" @click="bookSubmit()">submit</button>-->
  </div>

</template>

<script>
import {getBooks, getunisresides, PutRes, searchResid, searchResname} from "../api/api";

export default {
  name: 'residents',
  data(){
    return{
      tableData:[],
      search:'',
      inputBook:{
        "id":"",
        "pass":"",
      }
    }
  },

  methods:{
    loadBooks(){
      getBooks().then(response=>{
        this.tableData=response.data
        console.log(this.tableData)
      })
    },
    delete_res(id,pass,name,add,isres){
      isres=0;
      PutRes(id,pass,name,add,isres).then(response=>{
        console.log(response)
        this.loadBooks()
      })
      console.log(id,pass,name,add,isres)

    },
    searchres(){
      var numReg = /^[0-9]*$/
      var numRe = new RegExp(numReg)
      if(!numRe.test(this.search)){
        searchResname(this.search).then(response=>{
          this.tableData=response.data
          console.log("已经进入searchname")
          console.log(response.data)
          // this.loadBooks()
        })
      }
      else{
        searchResid(this.search).then(response=>{
          this.tableData=response.data
          console.log("已经进入searchsid")
          console.log(response.data)
        })
      }
    },
    returnRes(){
      this.loadBooks()
    },

    change_res(id){
    this.$router.push({name:'edit',query:{res_id:id}})
    },
    addRes(){
      this.$router.push({name:'addres'})
    },
    searchIsresided(){
      getunisresides().then(response=>{
        this.tableData=response.data
      })
    },
  },
  created() {
    this.loadBooks()
    console.log("已经进入到residents.vue")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
