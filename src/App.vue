<template>
  <div id="app">
    <!-- 路由窗口,路由匹配的主键将渲染在这里 -->
    <router-view />
    <!-- 底部导航 -->
    <NavBottom />
  </div>
</template>

<script>
  import NavBottom from './components/NavBottom.vue'

  export default {
    name: 'App',
    components: {
      NavBottom
    }
  }
</script>

<style>
  @import url('./assets/css/index.css');
</style>