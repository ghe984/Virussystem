import Router from 'vue-router'
import Vue from 'vue'

import HelloWorld from "../components/HelloWorld";
import login from "../components/login";
import residents from "../components/residents";
import edit from "../pages/edit";
import addres from "../pages/addres";
import abnormals from "../pages/abnormal/abnormals";
import addAbns from "../pages/abnormal/addAbns";
import accessreg from "../pages/accessreg/accessreg";
import vaccination from "../pages/vaccination/vaccination";
import addAccs from "../pages/accessreg/addAccs";
import eddinform from "../pages/inform/eddinform";
import informs from "../pages/inform/informs";
import Shouye from "../pages/Shouye";
import materials from "../pages/materials/materials";
// import App from "../App";
// import admin from "../pages/admin";

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
}

export default  new Router({
    routes:[
        {
            path:'/login',
            name:'login',
            component: login
        },
        {
            path:'/',
            redirect:'/index'
        },
        {
            path:'/HelloWorld',
            component: HelloWorld
        },

        {
            path:'/residents',
            name:'residents',
            component: residents,

            // children:[
            //     // {path:'edit', name:'edit',component:edit,},
            //     // {path:'addres', name:'addres',component:addres,},
            // ]
        },
        {
            path:'/residents/edit',
            name:'edit',
            component: edit
        },
        {path:'/residents/addres', name:'addres',component:addres,},

        // abnormals模块
        {
            path:'/abnormals',
            name:'abnormals',
            component:abnormals,
        },
        {
            path:'/abnormals/addAbns',
            name:'addAbns',
            component:addAbns,
        },
        //accessreg模块
        {
            path:'/accessregs',
            name:'accessregs',
            component:accessreg
        },
        {
            path:'/accessregs/addAccs',
            name:'addAccs',
            component:addAccs
        },


        //vaccination模块
        {
            path:'/vaccinations',
            name:'vaccination',
            component:vaccination
        },

        //inform模块
        {
            path:'/inform',
            name:'eddinform',
            component:eddinform
        },
        {
            path:'/inform/getinforms',
            name:'informs',
            component:informs
        },

        //首页模块
        {
            path:'/index',
            name:'shouye',
            component:Shouye
        },

        //materials模块
        {
            path:'/materials',
            name:'materials',
            component:materials
        }
    ]
})
