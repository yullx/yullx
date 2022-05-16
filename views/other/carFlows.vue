<template>
    <div>
       <el-card>
         <div slot="header" class="clearfix">
            <span>单个路口某天车流量统计</span>
            
          </div>
      
          <br>
        <div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="路口id">
            <el-input v-model="dayid"></el-input>
          </el-form-item>
          <el-form-item label="日期">
            <el-input v-model="daydate"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
          <el-table
            :data="dayflowsData"
            style="width: 100%"
            :row-class-name="tableRowClassName">
            <el-table-column
              prop="id"
              label="路口id"
              width="180">
            </el-table-column>
            <el-table-column
              prop="dir"
              label="方向"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
            <el-table-column
              prop="dayflows"
              label="日车流量">
          </el-table-column>
        </el-table>
      </div>
       </el-card>
       <br>
      <el-card>
        <div slot="header" class="clearfix">
            <span>单个路口某月车流量统计</span>        
          </div>

          <br>
        <div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="路口id">
            <el-input v-model="monthid"></el-input>
          </el-form-item>
          <el-form-item label="月份">
            <el-input v-model="monthdate"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
          <el-table
            :data="monthflowsData"
            style="width: 100%"
            :row-class-name="tableRowClassName">
            <el-table-column
              prop="id"
              label="路口id"
              width="180">
            </el-table-column>
            <el-table-column
              prop="dir"
              label="方向"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
            <el-table-column
              prop="monthflows"
              label="月车流量">
          </el-table-column>
        </el-table>
      </div>
      </el-card>
      <br>
     <el-card>
       <div slot="header" class="clearfix">
            <span>单个路口某天车流量统计</span>
            
          </div>
          <br>
        <div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="路口id">
            <el-input v-model="yearid"></el-input>
          </el-form-item>
          <el-form-item label="年份">
            <el-input v-model="yeardate"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
          <el-table
            :data="yearflowsData"
            style="width: 100%"
            :row-class-name="tableRowClassName">
            <el-table-column
              prop="id"
              label="路口id"
              width="180">
            </el-table-column>
            <el-table-column
              prop="dir"
              label="方向"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
            <el-table-column
              prop="yearflows"
              label="年车流量">
          </el-table-column>
        </el-table>
      </div>
      </el-card>

  </div>
</template>

<script>
export default {
  name:'carFlows',
  
  data() {
    
    return{
      dayid:'',
      daydate:'',
      monthid:'',
      monthdate:'',
      dayflowsData:
       [
        {
            id: '1',
            dir: '东西',
            address: '天津市西青区中孚路1号',
            dayflows: '237'
          }, 
          {
            id: '1',
            dir: '南北',
            address: '天津市西青区中孚路1号',
            dayflows: '349'
          },
          //  {
          //   id: '1',
          //   dir: '1h',
          //   address: '天津市西青区中孚路1号',
          //   dayflows: '严重'
          // },
          // {
          //   id: '1',
          //   dir: '1h',
          //   address: '天津市西青区中孚路1号',
          //   dayflows: '严重'
          // }
      ],
        monthflowsData: [{
            id: '1',
            dir: '东西',
            address: '富强路_民主大街',
            monthflows: '2954'
          }, 
          {
            id: '1',
            dir: '南北',
            address: '富强路_民主大街',
            monthflows: '2564'
          },
        ],
        yearflowsData: [{
            id: '1',
            dir: '东西',
            address: '富强路_民主大街',
            yearflows: '7252'
          }, 
          {
            id: '1',
            dir: '南北',
            address: '富强路_民主大街',
            yearflows: '8022'
          },
        ]
    }
  }
}
</script>

<style lang="less" scoped>
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
.clearfix{
  text-align: center;
span{
    font-weight:bold;
  }
}



</style>