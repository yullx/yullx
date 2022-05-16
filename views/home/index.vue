<template>
<el-row class="home" :gutter="20">
       <el-col :span="24" style="margin-top: 20px"> 
           <el-card class="box-card">
                <div class="user">
                   <img :src="userImg" />
                   <div class="userinfo">
                       <p class="name">123</p>
                       <p class="access">超级管理员</p>
                   </div>
                   <div class="usertime">
                   <p>上次登录时间：<span>2022-3-29</span></p>
                   <p>上次登录地点：<span>天津</span></p>
                </div>
               </div>
                </el-card>
                <!-- <el-card shadow="hover" >
                    <div class="user">
                        <img :src="userImg" />
                        <div class="userinfo">
                            <p class="name">123</p>
                            <p class="access">超级管理员</p>

                        </div>
                    </div>
                    <div class="login-info">
                        <p>上次登录时间：<span>2022-3-29</span></p>
                        <p>上次登录地点：<span>天津</span></p>
                    </div>
                </el-card> -->
        </el-col>
       
       
       <el-col style="margin-top: 20px" :span="16">
           <el-card>
            <div slot="header" class="clearfix">
                <span>实时数据</span>
                
            </div>
           <div class="num">
               <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0}">

                   <i class="icon"  :class="`el-icon-${item.icon}`" :style="{background:item.color}" ></i>
                   <div class="detail">
                       <p class="num">{{item.value}}</p>
                       <p class="txt">{{item.name}}</p>
                   </div>
               </el-card>
           </div>
           </el-card>
           <br>
           <el-card style="height: 280px">
               <div style="height: 280px" ref="todayEcharts"></div>
               <!-- <echart :chartData="echartData.today" style="height: 280px" /> -->
           </el-card>
           <br>
            <el-card style="height: 280px">
                <div style="height: 280px" ref="weekEcharts"></div>
                <!-- <echart :chartData="echartData.week" style="height: 280px" /> -->
            </el-card>
           
       </el-col>
        <el-col :span="8" style="margin-top: 10px">
           <el-card style="margin-top: 10px; height: 460px;">
               <div slot="header" class="clearfix">
                    <span>统计</span>
                    
                </div>
               <el-table :data="tableData">             //接收一个叫data的数据(通常用接口返回)
                   <el-table-column v-for="(val,key) in tablelabel" :key="key" :prop="key" :label="val">

                   </el-table-column>
                   </el-table>    

           </el-card>
       </el-col>
       <el-col :span="8" style="margin-top: 5px">
           <el-card style="margin-top: 5px; height: 150px;">
               <div slot="header" class="clearfix">
                    <span>今日在线人员</span>
                    
                </div>
                </el-card>
        </el-col>
   </el-row>
</template>

<script>
import {getData} from '../../api/data.js'
import * as echarts from 'echarts'
// import Echart from '../../src/components/ECharts.vue'

export default {
    name: 'MyHome',
    // components:{
    //     Echart
    // },
    data () {
        return{
            userImg: require('../../src/assets/images/user.png'),
            tableData:[],
            tablelabel:{
                location:'所在地址',
                trafficlights:'交通信号灯数量',
                electronicnum:'电子监控数量'
                
            },
            countData:[
                {
                    name:'今日车流量 路口id=1',
                    value:'1058',
                    icon:'s-data',
                    color:'rgba(183, 185, 188, 0.53)',
                    
                },
                 {
                    name:'本周车流量 路口id=1',
                    value:'7252',
                    icon:'s-data',
                    color:'rgba(183, 185, 188, 0.45)',
                },
                 {
                    name:'本月车流量 路口id=1',
                    value:'57373',
                    icon:'s-data',
                    color:'rgba(183, 185, 188, 0.38)',
                },
                {
                    name:'今日拥堵路口数',
                    value:'577',
                    icon:'location',
                    color:'rgba(183, 185, 188, 0.38)',
                },
                 {
                    name:'本周拥堵路口数',
                    value:'2524',
                    icon:'location',
                    color:'rgba(183, 185, 188, 0.45)',
                },
                 {
                    name:'本月拥堵路口数',
                    value:'43555',
                    icon:'location',
                    color:'rgba(183, 185, 188, 0.53)',
                },
            ],
            // echartData:{
            //     today:{
            //         xData:[],
            //         series:[]
            //     },
            //     week:{
            //         xData:[],
            //         series:[]
            //     }
            // }
        }
    },
    mounted(){         //接口请求(调用api里的data.js)
        getData().then(res =>{
            const {code ,data } = res.data
            if(code === 20000) {
                this.tableData= data.tableData
                
                //今日拥堵路口数量柱状图
                const todayOption = {
                    title: {
                    text: '今日与昨日拥堵路口数 路口id=1'
                    },
                    legend:{
                        //图例文字颜色
                        textStyle:{
                            color:"#303133",
                        },
                    },
                    grid: {
                    left: "5%",
                     },
                    // 提示框
                    tooltip: {
                        trigger: "axis",
                    },
                    xAxis: {
                    type: "category", // 类目轴
                    data: data.todayData.map(item=>item.date),
                    axisLine: {
                    lineStyle: {
                        color: "#606266",
                    },
                    },
                    axisLabel: {
                    interval: 0,
                    color: "#303133",
                    },
                    },
                    yAxis: [
                    {
                    type: "value",
                    axisLine: {
                        lineStyle: {
                        color: "#606266",
                        },
                    },
                    },
                    ],
                    color: ["rgba(64, 158, 255, 0.71)", "rgba(64, 158, 255, 0.32)"],
                    series:[
                        {
                        name:'今日拥堵路口数',
                        data:data.todayData.map(item=>item.new),
                        type:'bar'
                        },
                        {
                        name:'昨日拥堵路口数',
                        data:data.todayData.map(item =>item.active),
                        type:'bar'
                    
                        }

                    ],
                }
                // this.echartData.today.xData=data.todayData.map(item=>item.date)
                // this.echartData.today.series=[{
                //         name:'拥堵路口数',
                //         data:data.todayData.map(item=>item.new),
                //         type:'bar'
                //     }
                //     ]
                const T= echarts.init(this.$refs.todayEcharts)
                T.setOption(todayOption)
                // //本周拥堵路口数量折线图
                // const weekOption={
                //      xAxis:{
                //    xAxis:{
                //        data:xData
                //    },
                //    yAxis:{
                      
                //       },
                //        legend:{
                //            data:keyAarry
                //        },
                //    series
                // }
                // const W=echarts.init(this.$refs.weekEcharts)
                // W.setOption(weekOption)

                // 本周拥堵路口数量柱状图
                const weekOption ={
                    title: {
                    text: '本周与上周拥堵路口数 路口id=1'
                    },
                    legend:{
                        //图例文字颜色
                        textStyle:{
                             color:"#303133",
                        },
                    },
                    grid: {
                    left: "5%",
                     },
                    // 提示框
                    tooltip: {
                        trigger: "axis",
                    },
                    xAxis: {
                    type: "category", // 类目轴
                    data: data.weekData.map(item=>item.name),
                    axisLine: {
                    lineStyle: {
                        color: "#606266",
                    },
                    },
                    axisLabel: {
                    interval: 0,
                    color: "#303133",
                    },
                    },
                    yAxis: [
                    {
                    type: "value",
                    axisLine: {
                        lineStyle: {
                       color: "#606266",
                        },
                    },
                    },
                    ],
                    color: ["rgba(64, 158, 255, 0.71)", "rgba(64, 158, 255, 0.32)"],
                    series:[
                        {
                        name:'本周拥堵路口数',
                        data:data.weekData.map(item=>item.value),
                        type:'bar'
                    },
                    {
                        name:'上周拥堵路口数',
                        data:data.weekData.map(item=>item.yestweek),
                        type:'bar'
                    }
                    ],
                }
                // this.echartData.week.xData=data.weekData.map(item=>item.name)
                // this.echartData.week.series=[{
                //         name:'拥堵路口数',
                //         data:data.weekData.map(item=>item.value),
                //         type:'bar'
                //     }
                //     ]
                const W=echarts.init(this.$refs.weekEcharts)
                W.setOption(weekOption)
            }
        console.log(res)
        })
    }
}
</script>

<style lang="less" scoped>
// .clearfix{
//   text-align: center;
// span{
//     font-weight:bold;
//   }
// }

// .content{
//     float: right; padding: 3px 0
// }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .user{
      .r-content {
     display: flex;
    align-items: right;
    text-align: right;
      }
  }
</style>
