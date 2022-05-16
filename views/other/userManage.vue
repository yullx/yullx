<template>
   
      <el-card>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
          
           <el-form-item>
          <el-button type="primary" @click="addUser">+ 新增</el-button>
           </el-form-item>
           
           
          <el-form-item label="用户id">
            <el-input v-model="userid"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            
            
      </el-form>
        <el-table
    :data="tableData"
    style="width: 100%"
    max-height="600"
    :cell-style="cellStyle">
    <el-table-column
      fixed
      prop="id"
      label="用户id"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="190">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="state"
      label="状态"
      width="200"
      
    >
    <template slot-scope="scope">
          <div :style="{ color: scope.row.state ? 'green ' : 'red ' }">
            {{ scope.row.state }}
          </div>
        </template>

    </el-table-column>
    <el-table-column
      prop="time"
      label="注册时间"
      width="200">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    
    </el-card>
</template>

<script>
export default {
    name:'userManage',
    data() {
    return{
        userid:'',
        username:'',

         tableData: [
             {
          id: '1',
          name: '刘荣天',
          address: '天津市 西青区',
          state: '正常',
          time:'2022-01-02'
        },
           {
          id: '7',
          name: '史文奥',
          address: '天津市 西青区',
          state: '正常',
          time:'2022-01-23'
        },   {
          id: '10',
          name: '杨萧',
          address: '天津市 西青区',
          state: '正常',
          time:'2022-02-19'
        },   {
          id: '16',
          name: '赵文杰',
          address: '天津市 西青区',
          state: '正常',
          time:'2022-03-07'
        },   {
          id: '19',
          name: '梁馨月',
          address: '天津市 西青区',
          state: '正常',
          time:'2022-04-13'
        }   
        ]
    }
    
  },
  methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
//       cellStyle ({ rows, column, Index, columnIndex }) {
//   // 状态列字体颜色
//   if (row.status === '正常' && columnIndex === 4) {
//     return 'color: #0CB618'
//   } else if (row.status === '不正常' && columnIndex === 4) {
//     return 'color: #EA1B29'
//   } else {
//     return 'color: #1a1a1b'
//   }
// },

  

    },
}
</script>

<style lang="less" scoped>


</style>
