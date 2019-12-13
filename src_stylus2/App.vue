<template>
  <div>
    <h1>App组件</h1>
    <h2>移动端适配</h2>
    <div class="box">
      box
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus">
  @import './common/stylus/mixins.styl'
  h2
    width 375px
    height 100px
    background green
  .box 
    width 640px
    height 64px
    background red

 
</style>
