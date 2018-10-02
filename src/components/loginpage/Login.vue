<template>
<div class="login-page">
  <div class="login-page-box-wrap">
    <img src="./back-to-homepage-small.png" @click="handleBack()" class="back-button"/>
    <div class="login-page-description">
      <p>欢迎来到<span>Nef.Design</span></p>
      <p>登录到您的账户</p>
    </div>
    <div class="login-box">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" >
          <span class="login-label">账号</span>
          <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="输入您的手机号" />
          </FormItem>
          <span class="login-label">密码</span>
          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="输入您设置的登录密码" />
          </FormItem>
          <router-link to="password_find">
            <div class="forget-password-text"><span>忘记密码</span></div>
          </router-link>
          <FormItem>
              <div class="login-button" @click="handleSubmit('formInline')">
                <p class="login-text">登录到 Nef.Design</p>
              </div>
          </FormItem>
      </Form>
    </div>
    <div class="register-box">
        <span class="register-tip">还没有账号？</span>
        <router-link to="/register">立即注册</router-link>
    </div>
  </div>
</div>
</template>

<script>
import Vue from "vue";
import { Form, Input, FormItem, Icon } from "iview";
import api from "../../api.js";

Vue.component("Form", Form);
Vue.component("FormItem", FormItem);
Vue.component("Input", Input);
Vue.component("Icon", Icon);

export default {
  name: "login",
  data() {
    return {
      formInline: {
        user: "",
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
    },
    handleBack() {
      window.location.href = "http://www.nef.design";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@primary-text-color: #aeb1b5;
@primary-text-color-highlight: #deba6c;
@label-text-color: #69707a;
.login-page {
  height: 100%;
  display: grid;
  grid-template-columns: 495px auto;
  grid-gap: 0 0;
  font-family: PingFangSC-Regular;

  .login-page-box-wrap {
    margin-left: 66px;
    width: 360px;
    .back-button {
      margin-top: 93px;
      cursor: pointer;
    }

    .login-page-description {
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

    .login-box {
      margin-top: 60px;
      .login-label {
        color: @label-text-color;
        font-size: 14px;
      }
      .forget-password-text {
        color: @primary-text-color-highlight;
        text-align: right;
        font-size: 16px;
        position: relative;
        top: -20px;
        span{
          cursor: pointer;
        }
      }
      .login-button {
        width: 360px;
        height: 55px;
        margin-top: 20px;
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

        .login-text {
          font-size: 18px;
          color: rgba(255, 255, 255, 1);
          letter-spacing: 2px;
        }
      }
    }

    .register-box {
      font-size: 16px;
      text-align: center;
      .register-tip {
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