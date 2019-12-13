<template>
  <div>
    <h1>App组件</h1>
    <button class="btn btn1">按钮1</button>
    <button class="btn btn2">按钮2</button>
    <ul>
      <li @click="choose(index)" :class="{active:navindex === index}" v-for="(item, index) in 10" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        navindex:0
      }
    },
    methods: {
      choose(index){
        this.navindex = index
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './common/stylus/mixins.styl'  ;
  // 定义变量
  $color = skyblue
  //定义混合 
  btnStyle(w,h,bg)
    width w
    height h
    border none 
    background bg
  //定义函数
  add(a,b)
    a+b
  h1
    color skyblue
  .btn1
    btnStyle(50px,50px,red)
    padding add(50px,50px)
    box-sizing content-box
  .btn2
    btnStyle(100px,100px,skyblue)
  ul
    li
      line-height 10px
      &.active
        color red
 
</style>
