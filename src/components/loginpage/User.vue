<template>
  <div id="user">
    <div id="oprating-block">
      <transition :name="transitionName" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <LoginImage id="image-block"/>
  </div>
</template>

<script>
import LoginImage from './LoginImage.vue'

export default {
  name: 'user',
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
    this.transitionName = toStr === 'login' ? 'left' : 'right'
    }
  }
}
</script>

<style>
#user {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: inherit;
  display: grid;
  grid-template-columns: 495px auto;
  grid-gap: 0 0;
}
.oprating-block{
    height: 100%;
}
.right-leave-active{
  animation: right .3s ease;
}
.right-enter-active{
    animation: rightR .3s ease;
}
.left-leave-active{
  animation: left .3s ease;
}
.left-enter-active{
  animation: leftR .3s ease;
}
@keyframes right{
  0% {
    opacity: 1;
    transform: translateX(0px);
  }
  100% {
    opacity: 0;
    transform: translateX(10px);
  }
}
@keyframes rightR{
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes left{
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-10px);
  }
}
@keyframes leftR{
  0% {
    opacity: 0;
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
