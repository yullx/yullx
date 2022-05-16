<template>
    <el-card>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="路口id">
            <el-input v-model="id"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="lukou()">查询</el-button>
            </el-form-item>
        </el-form>
      <el-table
        :data="tableData"
        style="width: 100%"
        max-height="1000"
        :row-style="rowStyle"
        >
        <el-table-column
          fixed
          prop="id"
          label="路口id"
          width="200">
        </el-table-column>
        <el-table-column
          prop="dir"
          label="方向"
          width="200">
        </el-table-column>
        <el-table-column
          prop="car"
          label="特殊车辆通过"
          width="200">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="200">
          <template >
            <el-button
              @click.native.prevent="go()"
              type="text"
              size="big">
              信号灯调整
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    
     </el-card>
</template>

<script>
export default {
  name:'lukouinFormation',
  data() {
    return{
      id:'',
       tableData: [
         {
          id: '105',
          dir: '东西',
          car:'救护车',
          address: '天津市河东区八纬路',
          
          }, 
          {
              id: '52',
              dir: '南北',
              car:'救护车',
              address: '天津市河西区尖山街道',
              
            }, 
            {
          id: '68',
          dir: '东西',
          car:'消防车',
          address: '天津市河西区马场街道',
          
          }, 
          {
              id: '568',
              dir: '南北',
              car:'救护车',
              address: '天津市南开区学府街道',
              
          }, 
            {
          id: '41',
          dir: '南北',
          car:'警车',
          address: '天津市红桥区铃铛阁街道',
          
          }, 
          // {
          //     id: '105',
          //     dir: '西北',
          //     car:'救护车',
          //     address: '天津市河东区八纬路',
              
          // }, 
          //   {
          // id: '105',
          // dir: '东南',
          // car:'救护车',
          // address: '天津市河东区八纬路',
          
          // }, 
          // {
          //     id: '105',
          //     dir: '西北',
          //     car:'救护车',
          //     address: '天津市河东区八纬路',
              
          // },
          //   {
          //     id: '118',
          //     dir: '东南',
          //     flows: '150',
          //     heavy:'拥堵',
          //     address: '天津市河北区三马路',
              
          //   }, 
          // {
          //     id: '118',
          //     dir: '西北',
          //     flows: '169',
          //     heavy:'拥堵',
          //     address: '天津市河北区三马路',
              
          //   },
          //     {
          // id: '105',
          // dir: '东南',
          // car:'救护车',
          // address: '天津市河东区八纬路',
          
          // }, 
          // {
          //     id: '105',
          //     dir: '西北',
          //     car:'救护车',
          //     address: '天津市河东区八纬路',
              
          // },
        
        ],
    }
  },
   methods:{
      go(){
        this.$confirm('即将调整信号灯为绿灯, 是否调整?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '调整成功! 信号灯转为绿灯'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消调整'
          });          
        });
      },


        rowStyle({ row}) {
      if (row.car == '救护车') {
        return {color:'green'}
      } else if(row.car == '消防车'){
        return {color:'red'}
      }else{
        return {color:'blue'}
      }
    }
   }
}
</script>