<template>
  <div id="orders">
      <nav>
          <div id="neflogo"></div>
          <div id="tabs">
              <router-link v-for="item in tabInfo" :key="item.name" :to="item.path">
                  {{ item.name }}
              </router-link>
              <Dropdown trigger="click">
                <span class="account-name">{{ this.user.accountName }}</span>
                <Icon type="ios-arrow-down"></Icon>
                <DropdownMenu slot="list">
                  <DropdownItem>登出</DropdownItem>
                </DropdownMenu>
              </Dropdown>
          </div>
      </nav>
      <section>
          <router-view :user="user" :consultant="consultant"></router-view>
      </section>
  </div>
</template>

<script>
import { Dropdown, DropdownMenu, DropdownItem, Icon } from "iview";
import Vue from "vue";

Vue.component("Dropdown", Dropdown);
Vue.component("DropdownMenu", DropdownMenu);
Vue.component("DropdownItem", DropdownItem);
Vue.component("Icon", Icon);

export default {
  name: "orders",
  data() {
    return {
      currentTabName: "",
      user: {
          accountName: "古川银联",
          pocket: 95.01,
        //   record: [
        //       {time: 'today',oid: '123456',status: 'done'}
        //   ]
          },
      consultant: {
          name: 'Eric',
          telenumber: '18813121654'
      },
      tabInfo: [
        {
          name: "账户总览",
          path: "/orders/overview"
        },
        {
          name: "选购服务",
          path: "/orders/perchase"
        }
      ]
    };
  },
  methods: {
    toggleTab(name) {
      this.currentTabName = name;
      console.log(name);
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/css/global.less");
#orders {
  nav {
    width: 100%;
    height: 80px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 20px 0px rgba(227, 227, 227, 1);
    display: grid;
    grid-template-columns: 10%[logo-start]10%[logo-end]auto[tabs-start]375px[tabs-end]10%;
    align-items: center;
    position: relative;
    #neflogo {
      display: inline-block;
      grid-column-start: logo-start;
      grid-column-end: logo-end;
      width: 123px;
      height: 30px;
      background-image: url("./NefDesign.png");
      background-size: 100% 100%;
    }
    #tabs {
      display: inline-block;
      font-size: 18px;
      grid-column-start: tabs-start;
      grid-column-end: tabs-end;
      color: @primary-text-color;
      a {
        margin-right: 50px;
        position: relative;
        color: @primary-text-color;
      }
      .account-name{
        cursor: pointer;
      }
      .router-link-active {
        color: @label-text-color;
        font-weight: bold;
        &::before {
          content: "\2022";
          font-size: 20px;
          position: absolute;
          left: -10px;
          top: -4px;
          color: @primary-text-color-highlight;
        }
      }
    }
  }
}
</style>
<style lang="less" src="./stylecover.less" scoped>
</style>
