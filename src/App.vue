<template>
  <div id="app">
    <div id="oprating-block">
      <transition name="slide-right" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <LoginImage id="image-block"/>
  </div>
</template>

<script>
import LoginImage from './components/loginpage/LoginImage.vue'

export default {
  name: 'app',
    components: {
    LoginImage
  },
  data(){
    return {
      transitionName:''
    }
  },
  watch: {
    '$route' (to, from){
    const toDepth = to.path.split('/')
    const toStr = toDepth[toDepth.length - 1]
    this.transitionName = toStr === 'login' ? 'slide-left' : 'slide-right'
    }
  }
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
  height: inherit;
  display: grid;
  grid-template-columns: 495px auto;
  grid-gap: 0 0;
}
/* .slide-right-enter-active{
  animation: slide-right .5s;
} */
/* @keyframes slide-right{
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(10px);
  }
} */
</style>
