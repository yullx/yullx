<template>
   
     <el-card class="box-card">
       <div slot="header" class="clearfix">
    <span>单个路口实时车流量信息</span>
      </div>
     <!-- <div class="traffic"><el-tag
    
        key="单个路口实时车流量信息"
        type="info"
        effect="dark">
        单个路口实时车流量信息
        </el-tag>
        </div>
        <br>
      <div> -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="路口id">
              <el-input v-model="id"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="allroads()">查询</el-button>
              </el-form-item>
            </el-form>
   
     <br>
     
        <el-table
    
    :data="jammedData"
    style="width: 100%">
  
    <el-table-column
      prop="id"
      label="路口id"
      width="120"
    >
    </el-table-column>
   <el-table-column
      prop="name"
      label="路口名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="dir"
      label="方向"
      width="100">
    </el-table-column>
    <el-table-column
      prop="now"
      label="当前平均车流量"
      width="200">
    </el-table-column>
    <el-table-column
      prop="dayFlows"
      label="日流量"
      width="200">
    </el-table-column>
    <el-table-column
      prop="weekFlows"
      label="周流量"
      width="200">
    </el-table-column>
    <el-table-column
      prop="month"
      label="月流量"
      width="200">
    </el-table-column>
    <el-table-column label="操作">
      
        <el-button
          size="mini"
          type="primary"
          @click="look()">展示</el-button>
      
    </el-table-column>
  </el-table>

  <baidu-map class="bm-view" :center="{lng: 117.13131664714156, lat: 39.15128834050622}" :zoom="20" :scroll-wheel-zoom="true">
    <bm-traffic :predictDate="{weekday: 6, hour: 12}"></bm-traffic>
     <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-map-type>
  </baidu-map>
  
</el-card>
</template>

<script>
export default {
    name: 'SeeOver',
    data () {
        return{
          id:'',
          center: {lng: 0, lat: 0},
          zoom: 3,
        jammedData: [
          {
          id: '75',
          name: '芥园西道',
          dir: '南北',
          now: '500',
          dayFlows: '500',
          weekFlows: '3700',
          month: '14564',
        }, 
        {
          id: '75',
          name: '芥园西道',
          dir: '东西',
          now: '430',
          dayFlows: '430',
          weekFlows: '3576',
          month: '12327',
        }
       
        ]
      }
    },
    methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    },
    // allroads(){
    //         // let params = new URLSearchParams()
    //         // params.append('id',this.id)
    //         this.$request("api/user/queryRoadById?id="+this.id).then(res =>{
    //             console.log(res)
    //             if(res.data.code === 200){
    //                 this.jammedData=res.data.data
    //             }else{
    //           alert("路口id错误")
    //             }
                
                
                
    //         })
    //     },
      
      
     
    
  }
}
</script>
<style lang="less" scoped>
.bm-view {
  width: 100%;
  height: 550px;
}
// .traffic{
// text-align: center;
// margin: 10px auto 0px auto;
// color: #303133;



// }
.clearfix{
  text-align: center;
span{
    font-weight:bold;
  }
}




</style>
