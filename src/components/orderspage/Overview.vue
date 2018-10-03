<template>
<section id="overview-wrap">
<section id="overview">
  <section class="welcome">
      <section class="welcome-senten">
          你好，{{ this.user.accountName }}!
      </section>
      <section class="welcome-intro">
          欢迎使用Nef.Design，如需帮助请联系您的
          <span>专属设计顾问 {{ this.consultant.name }} {{this.consultant.telenumber}}</span>
      </section>
  </section>
  <section id="nef-coin">
    <span class="title">NEF 币余额</span>
    <span class="remain"><span class="pocket">{{ this.user.pocket.toFixed(2) }}</span> NEF</span>
    <OpButton btnText="充值" btnWidth="220" btnHeight="55" v-on:wrapClick="recharge()" />
  <span class="payments-record" @click="checkRecord()">查看充值记录</span>
  </section>
  <section id="history-payments">
      <section class="title">历史订单</section>
      <section v-if="!user.record" class="no-record">
          <section class="images">
              <div class="img img1"></div>
              <div class="img img2"></div>
              <div class="img img3"></div>
          </section>
          <section class="description">
              暂无任何历史订单，立即 <span class="service" @click="checkService()">选购服务</span>
          </section>
      </section>
      <section v-else class="has-record">
          <Order :user="this.user" />
      </section>
  </section>
</section>
</section>
</template>
<script>
import OpButton from "../global/OpButton.vue";
import Order from "./element/Order.vue";
import Vue from "vue";

Vue.component("Order", Order);
Vue.component("OpButton", OpButton);

export default {
  name: "overview",
  props: {
    user: Object,
    consultant: Object
  },
  data() {
    return {
      userName: this.accountName
    };
  },
  methods: {
    recharge() {
      console.log("充值");
    },
    checkRecord() {
      console.log("record");
    },
    checkService() {
      console.log("service");
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../assets/css/global.less");
#overview-wrap {
  display: flex;
  justify-content: center;
  #overview {
    width: 1440px;
    display: grid;
    grid-template-rows: 186px auto;
    grid-template-columns: 325px auto;
    grid-column-gap: 30px;
    .welcome {
      color: @label-text-color;
      grid-column: 1 / span 2;
      grid-row: 1 / span 1;
      margin-top: 55px;
      .welcome-senten {
        font-size: 36px;
        font-weight: bold;
      }
      .welcome-intro {
        font-size: 18px;
        margin-top: 16px;
        span {
          color: @primary-text-color-highlight;
        }
      }
    }
    #nef-coin {
      width: 325px;
      height: 328px;
      box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
      border-radius: 4px;
      border: 1px solid rgba(228, 231, 237, 1);
      font-size: 18px;
      grid-row: 2 / 3;
      grid-column: 1 / span 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        color: @label-text-color;
        margin-top: 30px;
      }
      .remain {
        color: @primary-text-color;
        margin-top: 30px;
        margin-bottom: 40px;
        .pocket {
          font-size: 40px;
          font-weight: bold;
          color: @pocket-text-color;
        }
      }
      .payments-record {
        color: @primary-text-color-highlight;
        margin-top: 35px;
        font-size: 14px;
        cursor: pointer;
      }
    }
    #history-payments {
      height: 522px;
      grid-row: 2 / 3;
      grid-column: 2 / span 1;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
      border-radius: 4px;
      border: 1px solid rgba(228, 231, 237, 1);
      .title {
        font-size: 18px;
        font-weight: bold;
        color: @label-text-color;
        margin-top: 30px;
        margin-left: 50px;
      }
      .no-record {
        text-align: center;
        .images {
          height: 150px;
          margin-top: 78px;
          .img {
            height: 150px;
            width: 120px;
            background-size: 100% 100%;
            display: inline-block;
            margin-right: 35px;
          }
          .img1 {
            background-image: url("./img1.png");
          }
          .img2 {
            background-image: url("./img2.png");
          }
          .img3 {
            background-image: url("./img3.png");
          }
        }
        .description {
          color: @primary-text-color;
          font-size: 14;
          margin-top: 70px;
          .service {
            color: @primary-text-color-highlight;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
