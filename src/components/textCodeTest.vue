<template>
  <div ref="div">
    <textarea ref="editor" id="editor" name="editor" v-model="data"></textarea>
    <div>
      <button type="button" @click="CodeText">执行</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "testCode",
  data() {
    return {
      data: ""
    };
  },
  methods: {
    CodeText() {
      eval(this.data);
    }
  }
};
</script>
<style scoped>
#editor {
  max-width: 500px;
  max-height: 300px;
  min-width: 500px;
  min-height: 300px;
}
button {
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
