<template>
<div class="register-page">
  <div class="register-page-box-wrap">
    <router-link to="/user/login">
      <img src="./back-to-homepage-small.png" class="back-button"/>
    </router-link>
    <div class="register-page-description">
      <p>欢迎来到<span>Nef.Design</span></p>
      <p>注册您的账户</p>
    </div>
    <div class="register-box">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" >
          <span class="register-label">账号</span>
          <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="账号须为手机号，将用于登录和找回密码" />
          </FormItem>
          <span class="register-label">人机校验</span>
          <FormItem prop="ic">
              <Input type="text" v-model="formInline.user" placeholder="输入右测图中的字符" />
          </FormItem>
          <span class="register-label">短信验证码</span>
          <span class="get-tic">获取验证码</span>
          <FormItem prop="tic">
              <Input type="text" v-model="formInline.user" placeholder="输入您手机短信收到的验证码" />
          </FormItem>
          <span class="register-label">密码</span>
          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="设置8-16位字符的登录密码" />
          </FormItem>
          <FormItem>
            <OpButton btnText="注册为 Nef.Design 用户" btnWidth="360" btnHeight="55" v-on:wrapClick="handleSubmit('formInline')" />
          </FormItem>
      </Form>
    </div>
    <div class="login-box">
        <span class="login-tip">已有账号？</span>
        <router-link to="/user/login">立即登录</router-link>
    </div>
  </div>
</div>
</template>

<script>
import Vue from "vue";
import { Form, Input, FormItem, Icon } from "iview";
import api from "../../api.js";
import OpButton from '../global/OpButton.vue'

Vue.component("Form", Form);
Vue.component("FormItem", FormItem);
Vue.component("Input", Input);
Vue.component("Icon", Icon);
Vue.component('OpButton',OpButton)

export default {
  name: "register",
  data() {
    return {
      formInline: {
        user: "",
        ic: "", //identify code
        tic: "", //text identify code
        password: ""
      },
      ruleInline: {
        user: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            type: "string",
            pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
            message: "手机号格式不正确",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            type: "string",
            min: 8,
            max: 16,
            message: "密码为8到16位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  props: {
    msg: String
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          //发送账户和密码
          this.$Message.success("Success!");
        } else {
          this.$Message.error("登录失败");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import url('../../assets/css/global.less');
.register-page {
  height: 100%;
  display: grid;
  grid-template-columns: 495px auto;
  grid-gap: 0 0;

  .register-page-box-wrap {
    margin-left: 66px;
    width: 360px;
    .back-button {
      margin-top: 93px;
      cursor: pointer;
    }

    .register-page-description {
      margin-top: 30px;
      & :first-child {
        font-size: 16px;
        color: @primary-text-color;
        span {
          color: @primary-text-color-highlight;
        }
      }
      & :nth-child(2) {
        font-size: 28px;
        color: @label-text-color;
        letter-spacing: 1px;
      }
    }

    .register-box {
      margin-top: 60px;
      position: relative;
      .register-label {
        color: @label-text-color;
        font-size: 14px;
      }
      .get-tic {
        position: absolute;
        font-size: 14px;
        color: @primary-text-color-highlight;
        z-index: 10;
        right: 0px;
        top: 238px;
        cursor: pointer;
      }
      }

    .login-box {
      font-size: 16px;
      text-align: center;
      .login-tip {
        color: @primary-text-color;
      }
      a {
        color: @primary-text-color-highlight;
      }
    }
  }
}
</style>
<style lang="less" src="./stylecover.less">
</style>