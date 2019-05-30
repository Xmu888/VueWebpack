<template>
  <div>
    <form>
      <input type="text" v-model="id" placeholder="请输入id">
      <input type="text" v-model="name" placeholder="请输入姓名">
      <input type="text" v-model="sex" placeholder="请输入性别">
      <button type="button" @click="add()">&nbsp;&nbsp;添加&nbsp;&nbsp;</button>
    </form>
    <table id="table" ref="table" border="1" width="100%">
      <tr v-for="textInfo in textArray" :key="textInfo.id">
        <td width="5%">
          <input type="checkbox" ref="rd" @click="ifindex($event)" name="rd" id>
        </td>
        <td>{{textInfo.id}}</td>
        <td>{{textInfo.name}}</td>
        <td>{{textInfo.sex}}</td>
        <td>
          <a href="javascript:;" @click="remove($event)">删除</a>
        </td>
      </tr>
    </table>
    <button type="button" @click="checkBox('AllCheck')">&nbsp;&nbsp;全&nbsp;&nbsp;选&nbsp;&nbsp;</button>&nbsp;&nbsp;
    <button type="button" @click="checkBox('NotCheck')">&nbsp;全不选&nbsp;</button>&nbsp;&nbsp;
    <button
      type="button"
      @click="checkBox('reverseCheck')"
    >&nbsp;&nbsp;反&nbsp;&nbsp;选&nbsp;&nbsp;</button>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      id: "",
      name: "",
      sex: "",
      textArray: [
        { id: "1", name: "令狐冲", sex: "男" },
        { id: "2", name: "张无忌", sex: "男" },
        { id: "3", name: "宋江", sex: "男" }
      ]
    };
  },
  methods: {
    add() {
      if (this.id == "" || this.name == "" || this.sex == "") {
        alert("请输入完整信息!");
      } else {
        this.textArray.push({ id: this.id, name: this.name, sex: this.sex });
      }
    },
    remove(obj) {
      obj.currentTarget.parentNode.parentNode.parentNode.removeChild(
        obj.currentTarget.parentNode.parentNode
      );
    },
    checkBox(res) {
      console.log(res);
      if(res === 'AllCheck'){
        for(var i = 0;i < this.$refs.rd.length;i++){
          this.$refs.rd[i].checked=true;
        }
      }else if(res === 'NotCheck'){
        for(var i = 0;i < this.$refs.rd.length;i++){
          this.$refs.rd[i].checked=!true;
        }
      }else if(res === 'reverseCheck'){
        for(var i = 0;i < this.$refs.rd.length;i++){
          this.$refs.rd[i].checked=!this.$refs.rd[i].checked;
        }
      }
    },
    ifindex(res) {
      if (res.target === document.getElementsByName("rd")[0]) {
        for (var i = 0; i < document.getElementsByName("rd").length; i++) {
          document.getElementsByName("rd")[
            i
          ].checked = document.getElementsByName("rd")[0].checked;
        }
      }
    }
  }
};
// var add_tr = document.createElement("tr");
// add_tr.innerHTML =
//   "<td>" +
//   this.id +
//   "</td>" +
//   "<td>" +
//   this.name +
//   "</td>" +
//   "<td>" +
//   this.sex +
//   "</td>" +
//   "<td><a href='javascript:;' @click='remove(1)'>删除</a></td>";
// this.$refs.table.appendChild(add_tr);
// // document.getElementById('table').appendChild(add_tr);
// obj.parentNode.parentNode.parentNode.removeChild(obj);
</script>
<style scoped>
input {
  margin: 0 6px;
}
div {
  width: 600px;
  margin: 200px auto;
}
table {
  margin: 30px auto;
}
tr:hover td{
  background: pink;
}
</style>