<template>
 
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo"   background-color="#021930"
      text-color="#fff"
        @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <h3>{{isCollapse ? '后台':'交通后台管理系统'}}</h3>
      <el-menu-item  @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="(subItem, subIndex) in item.Children" :key="subItem.path">
        
        <el-menu-item @click="clickMenu(subItem)" :index="subIndex.toString()">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 1100px;
  }
  .el-menu{
    height: 1100px;
    border: none;
    h3{
      color: #fff;
      text-align: center;
      line-height:48px
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        menu:[              //存放数据
        {
          path:'/MyHome',
          name:'MyHome',
          label:'首页',
          icon:'s-home',
          url:'MyHome/MyHome'
          //等等
        },
        {
          path:'/SeeOver',
          name:'SeeOver',
          label:'当前查看',
          icon:'guide',
          url:'SeeManage/SeeManage'

        },
        {
          path:'/user',
          name:'user',
          label:'人工管理',
          icon:'s-custom',
        //url:'UserManage/UserManage'
        Children:[
            {
              path:'/userManage',
              name:'userManage',
              label:'用户管理',
              icon:'setting',
              url:'Other/userManage'
            },
             {
              path:'/lukouinFormation',
              name:'lukouinFormation',
              label:'特殊路口',
              icon:'setting',
              url:'Other/lukouinFormation'
            },
            {
              path:'/controlLamp',
              name:'controlLamp',
              label:'路灯控制',
              icon:'setting',
              url:'Other/controlLamp'
            },
            
          ]

        },
        {
          label:'车辆管理',
          icon:'location',
          Children:[
            {
              path:'/carFlows',
              name:'carFlows',
              label:'车流量统计',
              icon:'setting',
              url:'Other/carFlows'
            },
            {
              path:'/weifaCar',
              name:'weifaCar',
              label:'违法车辆',
              icon:'setting',
              url:'Other/weifaCar'
            },
            {
              path:'/yujinCar',
              name:'yujinCar',
              label:'预警车辆',
              icon:'setting',
              url:'Other/yujinCar'
            }
          ]
        }

        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item){
        this.$router.push({
          name:item.name
        })
        this.$store.commit('selectMenu',item)
      }
    },
    computed:{
      noChildren() {
        return this.menu.filter(item => !item.Children)
      },
      hasChildren() {
        return this.menu.filter(item => item.Children)
      },
      isCollapse(){
        return this.$store.state.tab.isCollapse
      }
    }
  }
</script>
