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
     <!-- <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">

          <el-form-item label="道路情况">
            <el-select v-model="valuelesson" placeholder="请选择" @change="selectlesson" filterable remote :filter-method="dataFilter"> -->
                 <!-- <el-option
                v-for="item in formInline"
                :key="item.id"
                :label="item.label"
                :value="item.value">
              </el-option> -->
                <!-- <el-option label="畅通" value="changtong" @click="changtong()"></el-option>
                <el-option label="拥堵" value="yongdu"  @click="yongdu()"></el-option>
            </el-select>
            
          </el-form-item>
          
        </el-form>
     </div> -->
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
          prop="flows"
          label="当前车流量"
          width="200">
        </el-table-column>
        <el-table-column
          prop="heavy"
          label="道路情况"
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
          width="120">
          <template >
            <el-button
              @click.native.prevent="go()"
              type="text"
              size="big">
              请求调整
            </el-button>
          </template>
        </el-table-column>
      </el-table>
     </el-card>
</template>

<script>
export default {
  name:'controlLamp',
  data() {
    return{
      valuelesson:'',
      formInline: {
          
        valuelesson:[{
            value: '拥堵',
            label: '1',
            id:1
          }, 
          {
          value: '畅通',
          label: '0',
          id:0
          }
          ],
        },
      // id:'',
      // heavy:[{
      //   value: '1',
      //   label: '拥堵'
      // }, 
      // {
      //  value: '0',
      //  label: '畅通'
      // }
      // ],
     

       tableData: [
         {
          id: '105',
          dir: '东西',
          flows: '16',
          heavy:'畅通',
          address: '天津市河东区八纬路',
          
          }, 
          {
              id: '105',
              dir: '南北',
              flows: '23',
              heavy:'畅通',
              address: '天津市河东区八纬路',
              
            }, 
            {
              id: '17',
              dir: '东西',
              flows: '156',
              heavy:'拥堵',
              address: '天津市红桥区邵公庄后大道',
              
            }, 
          {
              id: '17',
              dir: '南北',
              flows: '136',
              heavy:'拥堵',
              address: '天津市红桥区邵公庄后大道',
              
            }, 
            {
              id: '119',
              dir: '东西',
              flows: '15',
              heavy:'畅通',
              address: '天津市南开区三潭路',
              
            }, 
          {
              id: '119',
              dir: '南北',
              flows: '23',
              heavy:'畅通',
              address: '天津市南开区三潭路',
              
            }, 
            {
              id: '218',
              dir: '东西',
              flows: '24',
              heavy:'畅通',
              address: '天津市东丽区东兴路',
              
            }, 
          {
              id: '218',
              dir: '南北',
              flows: '12',
              heavy:'畅通',
              address: '天津市东丽区东兴路',
              
            },
            {
              id: '118',
              dir: '东西',
              flows: '150',
              heavy:'拥堵',
              address: '天津市河北区三马路',
              
            }, 
          {
              id: '118',
              dir: '南北',
              flows: '169',
              heavy:'拥堵',
              address: '天津市河北区三马路',
              
            },
            {
              id: '58',
              dir: '东西',
              flows: '220',
              heavy:'拥堵',
              address: '天津市和平区同安道',
              
            }, 
          {
              id: '58',
              dir: '南北',
              flows: '235',
              heavy:'拥堵',
              address: '天津市和平区同安道',
              
            },
        
        ],
        
      
    }
  },
    methods:{
      go(){
        this.$confirm('即将请求调整信号灯, 是否发送?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '发送成功! 等待调整'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消发送'
          });          
        });
      },

      rowStyle({ row}) {
      if (row.heavy == '拥堵') {
        return {color:'red'}
      } else {
        return {color:'green'}
      }
    }
  

      // go(){
      //   this.$alert('请求人工调整信号灯发送成功!', '请求人工调整', {
      //     confirmButtonText: '确定',
      //     cancelButtonText: '取消',
      //     callback: action => {
      //       this.$message({
      //         type: 'info',
      //         message: `action: ${ action }`
      //       });
      //     }
      //   });
      //   // alert("请求人工调整信号灯发送成功! 等待调整")
      // }
    }
  
  // methods:{
  //   dataFilter(val) {
          
  //         this.formInline = val;
  //         if(val){
  //           this.formInline=this.search.filter((item) => {
  //                if (!!~item.label.indexOf(val) || !!~item.label.toUpperCase().indexOf(val.toUpperCase())) {
  //                     return true
  //                 }
  //             })

  //         }else { //val为空时，还原数组
  //             this.valuelesson = this.search;
  //         }
  //   }

  // }
}
</script>

<style lang="less" scoped>
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
