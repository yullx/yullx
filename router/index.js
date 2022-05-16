
import Vue from 'vue'
import VueRouter from 'vue-router'
// import MyHome from '../views/MyHome.vue'

Vue.use(VueRouter)




const routes = [
        {
            path:'/',
            name:'login',
            component: () =>import('../views/Login/login.vue')
        },
        {
            path:"/reg",
            name:"reg",
            component:()=>import("../views/reg/index.vue")
        },
    
        {

            path: '/MainHome',
            name: 'MainHome',
            component: () => import('../views/Main.vue'),
            children:[
                {
                    path:'/Myhome',
                    name:'MyHome',
                    component: () =>import('../views/home')
                },
                {
                    path: '/user',
                    name: 'user',
                    component: () => import('../views/User')
                },
                {
                    path: '/userManage',
                    name: 'userManage',
                    component: () => import('../views/other/userManage.vue')
                },
                {
                    path: '/controlLamp',
                    name: 'controlLamp',
                    component: () => import('../views/User/controlLamp.vue')
                },
                {
                    path: '/lukouinFormation',
                    name: 'lukouinFormation',
                    component: () => import('../views/User/lukouinFormation.vue')
                },
                {
                    path: '/SeeOver',
                    name: 'SeeOver',
                    component: () => import('../views/see')
                },
                {
                    path: '/carFlows',
                    name: 'carFlows',
                    component: () => import('../views/other/carFlows.vue')
                },
                {
                    path: '/weifaCar',
                    name: 'weifaCar',
                    component: () => import('../views/other/weifaCar.vue')
                },
                {
                    path: '/yujinCar',
                    name: 'yujinCar',
                    component: () => import('../views/other/yujinCar.vue')
                },
                {
                    path: '/comeIn',
                    name: 'comeIn',
                    component: () => import('../views/User/comeIn.vue')
                }


            ]
        }
        
       
        
    ]
    const router =new VueRouter({
        mode: 'history',
        routes
    })

export default router