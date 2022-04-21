<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  /* 设置字体平滑：抗锯齿 */
  -webkit-font-smoothing: antialiased;
}
</style>
