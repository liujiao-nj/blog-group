<template>
  <div id="app">
    <blog-header></blog-header>
    <blog-body></blog-body>
  </div>
</template>

<script>
import BlogHeader from 'components/layout/Header.vue'
import BlogBody from 'components/layout/Body.vue'
export default {
  components: {
    BlogHeader,
    BlogBody
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background: @bg;
  color: #2c3e50;
}
</style>
