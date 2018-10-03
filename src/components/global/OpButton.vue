<template>
  <div :style="{width: this.btnWidth+'px', height: this.btnHeight+'px'}" class="opration-button" @click="wrapClick">
    <p class="btn-text">{{ this.btnText }}</p>
  </div>
</template>
<script>
export default {
  name: "OpButton",
  props: {
    btnText: String,
    btnWidth: String,
    btnHeight: String,
  },
  methods:{
    wrapClick(){
      this.$emit('wrapClick')
    }
  }
};
</script>
<style lang="less" scoped>
.opration-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    15deg,
    rgba(105, 112, 122, 1) 0%,
    rgba(141, 148, 158, 1) 100%
  );
  box-shadow: 5px 5px 8px 0px rgba(107, 122, 144, 0.38);
  border-radius: 10px;
  cursor: pointer;

  .btn-text {
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
    letter-spacing: 2px;
  }
}
</style>