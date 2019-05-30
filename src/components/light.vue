<template>
  <div :class="even">
    <img @click="lights" ref="tagImgs" :src="imgSrcOff" alt="台灯">
    <p v-if="!flag" class="p1">天黑了，狼人准备</p>
    <p v-if="flag" class="p2">天亮了，预言家准备</p>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      flag: true,
      imgSrcOff: "/static/images/off.gif",
      imgSrcOn: "../../static/images/on.gif",
      even:"ligs1"
    };
  },
  methods: {

    lights() {
      if (!this.flag) {
        this.$refs.tagImgs.src = this.imgSrcOff;
        this.even = "ligs1";
        this.flag = true;
      } else {
        this.$refs.tagImgs.src = this.imgSrcOn;
        this.even = "ligs2";
        this.flag=false;
      }
    }
  }
};
</script>
<style>
html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.ligs1{
    width: 100%;
    height: 100%;
    background: #fff;
    transition: all .5s;
}
.ligs2{
    width: 100%;
    height: 100%;
    background: #000;
    transition: all .5s;
}
.p1{
    font-weight: bold;
    color: #fff;
    font-size: 60px;
}
.p2{
    font-weight: bold;
    color: #000;
    font-size: 60px;
}
</style>
