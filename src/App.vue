<template>
  <div id="app">
    <div class="title">
      <div class="l">
        <i class="el-icon-s-shop"></i><router-link to="/">天猫首页</router-link>&nbsp;
        喵，欢迎来到天猫&nbsp;
        <router-link to="/login">请登录</router-link>&nbsp;
        <router-link to="/rigister">免费注册</router-link>
      </div>
      <div class="r">
        <i class="el-icon-shopping-cart-2"></i><router-link to="/trolley">购物车</router-link>&nbsp;
      </div>
    </div>
      <router-view/>
  </div>
</template>

<style>
*{
  margin: 0;
}
.title{
  margin: 0;
  width: 1035px;
  padding: 5px 200px 5px;
  color: #999999;
  background-color: #F2F2F2;
  font-size: 13px;
  border-bottom: 1px solid #999999;
  display: flex;
  justify-content: flex-start;
}
.title a {
  text-decoration: none;
  color: #999999;
  font-size: 13px;
}
.title a:hover{
  color: #FF0036;
  border-bottom: 1px solid #FF0036;
}
.r{
  position: relative;
  left: 700px;
}
.el-icon-s-shop,
.el-icon-shopping-cart-2{
  color: #FF0036;
  font-size: 20px;
}
</style>
