<template>
  <div class="register-page-img-wrap">
    <div class="img"></div>
    <div class="img-text">
      <p>开始使用Nef.Design </p>
      <p>立即开始享用你的云端设计部</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginImage'
}
</script>

<style lang="less">
  .register-page-img-wrap {
    position: relative;
    height: inherit;
    width: inherit;
    background-image: url("./login-img-middle.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    .img-text {
      color: #ffffff;
      position: absolute;
      bottom: 112px;
      left: 128px;
      letter-spacing: 7px;
      font-family: PingFangSC-Regular;
      & :first-child {
        font-size: 42px;
      }
      & :nth-child(2) {
        font-size: 20px;
      }
    }
  }
</style>
