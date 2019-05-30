<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li v-for="info in infos" :key="info.title">
          <a :href="info.url">{{info.title}}</a>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      infos: [
        {
          title: "点名器",
          url: "#/"
        },
        {
          title: "开关灯",
          url: "#/light"
        },
        {
          title: "代码测试器",
          url: "#/textCode"
        },
        {                                                                                                                                                                                                                                                                                                                                       
          title: "添加删除表格",
          url: "#/insert"
        }
      ]
    };
  }
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
#nav {
  position: absolute;
  top: 50px;
  right: 1px;
  width: 130px;
  height: 100%;
}
#nav ul {
  width: 130px;
  height: 100%;
}
#nav ul li {
  display: block;
  float: left;
  margin: 5px 0px;
  width: 130px;
  height: 50px;
  background: #21d8df;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
}
#nav ul li a {
  display: block;
  color: #fff;
  text-decoration: none;
}
</style>
