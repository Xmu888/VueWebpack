<template>
<div id="cont">
  <p id="p">{{names}}</p>
<button @click="show">开始</button>
<button @click="showDwon">结束</button>
</div>
</template>
<script>
export default {
  name: "index",
  data() {
    return{
      ifonn:false,
      names: "你希望那个幸运的人是你吗？",
      time:null
    }
  },
  methods: {
    show() {
      if(!this.ifonn){
        this.ifonn = true; 
        this.time = 
      setInterval(() => {
        this.$axios({
          method: "get",
          url: "../../static/Json.json"
        })
          .then(res => {
            this.names =
              res.data.list[Math.floor(Math.random() * res.data.list.length)];
              var red = Math.floor(Math.random()*255);
              var green = Math.floor(Math.random()*255);
              var blue = Math.floor(Math.random()*255);
              console.log('rgb('+red+','+green+','+blue+')');
              document.getElementById("p").style.color='rgb('+red+','+green+','+blue+')';
          })
          .catch(err => {
            console.log(err);
          });
      },100);
      }
    },
    showDwon(){
        window.clearInterval(this.time);
        this.ifonn = false;        
    }
  },
  destroyed:function(){
     window.clearInterval(this.time);
  }
};
</script>
<style scoped>
p{
  display: block;
  width: 100%;
  height: 200px;
  line-height: 200px;
  font-size: 55px;
  font-weight: bold;
}
#cont{
  width: 800px;
  height: 400px;
  border: 8px solid #000;
  margin: 50px auto;
}
button{
  width: 140px;
  height: 60px;
  background: #4de0ed;
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  line-height: 60px;
  border: none;
  border-radius: 5px;
  margin: 5px;
}
</style>