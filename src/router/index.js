import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index' //点名器
import light from '@/components/light' //关灯开灯
import textCode from '@/components/textCodeTest'//代码测试器
import insert from '@/components/insertTable'//代码测试器
Vue.use(Router)//表示使用官方提供的路由管理器

export default new Router({   //设置路由对象
  routes: [
    {//点名器
      path: '/',//设置浏览器访问路径
      name: 'index',//设置组件名字在渲染的时候调用
      component: index //设置该组件引用那个文件
    },{//关灯开灯
      path: '/light',//设置浏览器访问路径
      name: 'light',//设置组件名字在渲染的时候调用
      component: light //设置该组件引用那个文件
    },{
      path: '/textCode',
      name: 'textCode',
      component: textCode
    },{
      path: '/insert',
      name: 'insert',
      component: insert
    }
  ]
})
