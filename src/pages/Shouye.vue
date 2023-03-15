<template>
  <div>
    <div id="map">
      <div id="mychart2" style="width: 500px;height: 500px;text-align: center"></div>
    </div>
    <h5 style="color: darkkhaki;float: left">上述数据更新截止至{{dataTime}}</h5>
    <h2>通知栏</h2>
    <div>
      <el-table
          :data="tableData"
          stripe
          style="width: 100%">
        <el-table-column
            prop="inform_text"
            label="通知内容"
            width="900">
        </el-table-column>
        <el-table-column
            prop="inform_time"
            label="发布时间"
            width="250">
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<script>

import echarts from 'echarts';
import 'echarts/map/js/china';
import jsonp from'jsonp';
import {getInfo} from "../api/api";

const  option={
  title: {
    text: '中国新冠肺炎疫情实时动态地图',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['中国疫情图']
  },
  visualMap: {
    type: 'piecewise',
    pieces: [
      {min: 1000, max: 1000000, label: '大于等于1000人', color: '#372a28'},
      {min: 500, max: 999, label: '确诊500-999人', color: '#4e160f'},
      {min: 100, max: 499, label: '确诊100-499人', color: '#974236'},
      {min: 10, max: 99, label: '确诊10-99人', color: '#ee7263'},
      {min: 1, max: 9, label: '确诊1-9人', color: '#f5bba7'},
    ],
    color: ['#E0022B', '#E09107', '#A3E00B']
  },
  toolbox: {
    show: false,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: {show: true},
      dataView: {show: true, readOnly: false},
      restore: {show: true},
      saveAsImage: {show: true}
    }
  },
  roamController: {
    show: true,
    left: 'right',
    mapTypeControl: {
      'china': true
    }
  },
  series: [
    {
      name: '确诊人数',
      type: 'map',
      mapType: 'china',
      roam: false,
      zoom:1.2,
      label: {
        normal:{
          show:true,
          color: 'rgba(249, 249, 249)',
          textStyle:{
            fontsize:8
          }
        }
      },
      //地图区域的多边形图形样式
      itemStyle:{
        normal:{
          areaColor:'rgba(0,255,236,0',
          borderColor:'rgba(0,0,0,0.2)',
        },
      },
      //高亮时多边形图形样式
      emphasis:{
        areaColor: 'rgba(255,180,0,0.8)',
        shadowOffsetX:0,
        shadowOffsetY:0,
        shadowBlur:20,
        borderWidth:0,
        shadowColor:'rgba(0,0,0,0.5)',
      },
      data: [],
    }
  ]
}

export default {
  name: "Shouye",
  data(){
    return{
      tableData:[],
      dataTime:'',
    }
  },
  mounted() {
    this.getData();
    this.myEchart=echarts.init(document.getElementById('mychart2'));
    this.myEchart.setOption(option);
  },
  methods:{
    getData(){
        jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json' ,{},(err,data)=>{
          if(!err){
            console.log(data)
            let list=data.data.list.map(item=>{
              return {
                name:item.name,
                value:item.econNum,
              }
            })
            option.series[0].data=list
            this.myEchart.setOption(option);
            this.dataTime=data.data.cachetime;
          }
        })
    },
    loadInform() {
      getInfo().then(response=>{
        this.tableData=response.data
        console.log(response)
      })
    }
  },
  created() {
    this.loadInform()
  }
}
</script>

<style scoped>
#mychart2{
  /*margin: auto;*/
}
</style>
