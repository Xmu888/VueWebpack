Vue.config.productionTip = false
import Vue from 'vue'
import App from './App'
import router from './router'
import index from '@/components/index'
import light from '@/components/light'
import textCode from '@/components/textCodeTest'
// import testCode from '/@components/textCodeTest'
import axios from 'axios'
Vue.prototype.$axios=axios
// import myRount from '@/components/myFirstVue'//声明该组件的位置
// import HelloWorld from '@/components/HelloWorld'
Vue.component('index',index); // 封装成全局组件  <index></index>  可以全局调用
Vue.component('light',light);
Vue.component('textCode',textCode);
// Vue.component('testCode',testCode);
// Vue.component('myRount',myRount);// 设置为全局组件  调用使用<myRount></myRount>
// Vue.component('Hell',HelloWorld);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  beforeCreate:function(){},//初始化钩子
  created:function(){},//初始化注入钩子
  beforeMount:function(){},//编译Vue实例到内存中
  mounted:function(){},//将编译好的实例挂载到页面上
  beforeUpdate:function(){},//准备执行update方法
  update:function(){},//将更新的数据渲染到页面上
  beforeDestroy:function(){},//进入销毁阶段
  destroyed:function(){//通常用于关闭计时器 关闭方法   结束资源等等操作！

  },//开始销毁Vue实例
});