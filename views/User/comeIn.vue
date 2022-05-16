<template>
    <div>查询
            <br>
                    <div class="demo-input-suffix">
                        输入想要控制的交通信号灯的时长
                        <br>
                        <br>
                        <el-input placeholder="请输时长" prefix-icon="el-icon-search" v-model="input4"></el-input>
                        <br>
                        <br>
                        将路灯转变为：
                    </div>
                    <br>
                    <div class="buttonlogin">
                        
                        <el-button  size="medium" type="danger" >红灯</el-button>
                        <el-button  size="medium" type="success" >绿灯</el-button>
                        <el-button  size="medium" type="warning">黄灯</el-button>
                    </div>
                     <br>
                        <br>
                    <div class="buttonlogin">                   
                        <el-button  size="medium" type="primary" @click="finish()">点击完成</el-button>
                    </div>
    </div>
</template>

<script>
export default {
  name:'comeIn',
  data() {
    return{}
  }
}
</script>