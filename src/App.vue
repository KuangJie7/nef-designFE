<template>
  <div id="app">
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
html {
    margin: 0;
    padding:0;
    height: 100%;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding:0;
  font-family: PingFangSC-Regular;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
