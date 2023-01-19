<template>
  <div class="hello">
    <div class="list">
      <!-- 加导航守卫 -->
      <a href=""><img src="https://img.alicdn.com/tfs/TB1ztBlaMMPMeJjy1XbXXcwxVXa-200-60.png" alt="" class="img1" height="35"></a>
      <a href=""><img src="https://img.alicdn.com/tfs/TB1t5ObaBxRMKJjy0FdXXaifFXa-200-60.png" alt="" class="img1" height="35"></a>
      <a href="" class="list2">天猫会员</a>
      <a href="" class="list2">喵鲜生</a>
      <a href="" class="list2">医药馆</a>
      <a href="" class="list2">魅力惠</a>
      <a href="" class="list2">飞猪旅行</a>
      <a href="" class="list2">苏宁易购</a>
      <a href="" class="list2">天猫内容</a>
    </div>
    <div class="nav">
      <a href="" class="list1"><b>主题市场</b></a>
      <ul>
        <span><li class="el-icon-shopping-cart-full"></li> <a href="">女装</a> / <a href="">内衣</a></span><br>
        <span><li class="el-icon-basketball"></li> <a href="">男装</a> / <a href="">运动户外</a></span><br>
        <span><li class="el-icon-goods"></li> <a href="">女鞋</a> / <a href="">男鞋</a> / <a href="">箱包</a></span><br>
        <span><li class="el-icon-present"></li> <a href="">美妆</a> / <a href="">个人护理</a></span><br>
        <span><li class="el-icon-brush"></li> <a href="">腕表</a> / <a href="">眼镜</a> / <a href="">珠宝饰品</a></span><br>
        <span><li class="el-icon-mobile-phone"></li> <a href="">手机</a> / <a href="">数码</a> / <a href="">电脑办公</a></span><br>
        <span><li class="el-icon-lollipop"></li> <a href="">母婴玩具</a></span><br>
        <span><li class="el-icon-knife-fork"></li> <a href="">零食</a> / <a href="">茶酒</a> / <a href="">进口食品</a></span><br>
        <span><li class="el-icon-cherry"></li> <a href="">生鲜水果</a></span><br>
        <span><li class="el-icon-s-platform"></li> <a href="">大家电</a> / <a href="">生活电器</a></span><br>
        <span><li class="el-icon-refrigerator"></li> <a href="">家具</a> / <a href="">灯具</a> / <a href="">卫浴</a></span><br>
        <span><li class="el-icon-bicycle"></li> <a href="">汽车</a> / <a href="">配件</a> / <a href="">用品</a></span><br>
        <span><li class="el-icon-table-lamp"></li> <a href="">家纺</a> / <a href="">家饰</a> / <a href="">鲜花</a></span><br>
        <span><li class="el-icon-service"></li> <a href="">图书影像</a></span>
      </ul>
    </div>
    <div class="picture">
      <div class="lunbo">
        <el-carousel  trigger="click" :interval="5000" arrow="always" :height="300+'px'">
      <el-carousel-item v-for="item in pictures" :key="item">
        <div class="lunbo"><img :src="item.url" alt="" :height="290+'px'"/></div>
        </el-carousel-item>
        </el-carousel>
      </div>
      <div class="gonggao">
        <img src="https://gw.alicdn.com/imgextra/i1/O1CN014AxN4C1Z7pWRr4wzb_!!6000000003148-0-tps-356-141.jpg_360x10000Q75.jpg_.webp" alt="" height="210">
      </div>
    </div>
    <div class="user">
      <div class="touxiang">
        <img src="https://gtms03.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_80x80.jpg" alt="" height="80">
      </div>
      <p><strong>Hi!你好</strong></p>
      <div class="btns">
        <button class="btn1" @click="loginIn">登录</button>
        <button class="btn1" @click="signUp">注册</button>
      </div>
      <div class="more">
        <button class="btn2"><li class="el-icon-star-off"></li><br>收藏的宝贝</button>
        <button class="btn2"><li class="el-icon-shopping-bag-1"></li><br>买过的店铺</button>
        <button class="btn2"><li class="el-icon-s-home"></li><br>收藏的店铺</button>
        <button class="btn2"><li class="el-icon-thumb"></li><br>我的足迹</button>
      </div>
      <!-- 需要改 -->
      <div class="tishi">
        <p><b>公告</b> 新鲜事都在这~</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      pictures:[
        {url: require("../assets/轮播图/one.webp")},
        {url: require("../assets/轮播图/two.jpg")},
        {url: require("../assets/轮播图/thr.webp")},
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{
  margin: 0;
}
body{
  background-color: #FAF2F2;
}
.bu{
  width: 1200px;
  height: 2000px;
  background-color: #FFF;
  position: absolute;
  left: 120px;
  top: 170px;
  border-radius: 50px;
}
.search{
  display: inline;
  position: relative;
  top: 5px;
  left: 280px;
}
.input{
  width: 550px;
  height: 41px;
  border-radius: 40px 0 0 40px;
  position: relative;
  border:1px solid #FF0036;
  padding-left: 20px;
}
.input:focus{
  border:1px solid #FF0036;
}
.img0{
  position: relative;
  top: 35px;
  left: 230px;
}
.btn0{
  width: 100px;
  height: 44px;
  border-radius: 40px 40px 40px 40px;
  border: none;
  background: #FF0036;
  color: #FFF;
  font-size: 18px;
  position: relative;
  top: 3px;
  left: -20px;
  cursor: pointer;
}
.el-carousel__item{
  border-radius: 30px;
}
.el-carousel__item:nth-child(3) img{
  position: relative;
  bottom: -40px;
}
.el-carousel__item:nth-child(4) img{
  position: relative;
  bottom: -40px;
}
.el-carousel__item:nth-child(5) img{
  position: relative;
  bottom: -40px;
}
.nav{
  display: inline-block;
  margin: 40px;
  position: relative;
  top: -10px;
}
.nav ul{
  position: relative;
  top: -40px;
  left: -40px;
  list-style: none;
}
.nav ul span{
  line-height: 35px;
}
.nav ul span a{
  text-decoration: none;
  color:black;
  font: 100 14px '宋体';
}
.nav ul span a:hover{
  color: #FF0036;
}
.list{
  padding: 5px;
  display: flex;
  justify-content: end;
  position: relative;
  right: 430px;
  margin-top: 10px;
}
.img1{
  margin: 0;
  margin-left: 10px;
  position: relative;
  left: 200px;
}
.list1{
  position: relative;
  left: -10px;
  top: -60px;
  color: #FF0036;
  text-decoration: none;
  font: 300 18px '宋体';
}
.list2{
  margin:10px 10px 0 0;
  position: relative;
  left: 210px;
  text-decoration: none;
  color: black;
  font:200 15px '宋体';
}
.list2:hover{
  color: #FF0036;
  border-bottom: #99a9bf;
}
.picture{
  display: inline-block;
  width: 530px;
  height: 510px;
  position: relative;
  top: -15px;
  border-radius: 20px;
  overflow: hidden;
}
.lunbo{
  position: relative;
  top: -20px;
}
.gonggao{
  display: inline-block;
  width: 530px;
  height: 210px;
  margin-top: 20px;
  border-radius: 20px;
  position: relative;
  top: -20px;
  overflow: hidden;
}
.user{
  display: inline-block;
  width: 340px;
  height: 480px;
  border-radius: 20px;
  background: #F3F3F3;
  position: relative;
  top: -320px;
  left: 25px;
}
.user p{
  position: relative;
  left: 140px;
  top: 20px;
  font: 300 18px '宋体';
}
.tishi{
  position: relative;
  top: 130px;
  left: -120px;
  font:200 15px '宋体';
}
.touxiang{
  display: inline-block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #99a9bf;
  position: relative;
  top: 20px;
  left: 130px;
  overflow: hidden;
}
.btns,
.more{
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 50px;
}
.more{
  position: relative;
  top: 120px;
  list-style: none;
}
.btn1{
  width: 80px;
  height: 40px;
  border:1px solid transparent;
  border-radius: 20px;
  background: #FF5E00;
  color: #FFF;
  font: 200 17px '宋体';
  cursor: pointer;
}
.btn1:nth-child(2){
  background: linear-gradient(90deg,#FF8D00,#FF7500);
}
.btn2{
  border: none;
  background: transparent;
  cursor: pointer;
}
.btn2 li{
  font-size: 25px;
  position: relative;
}
.btn2:hover{
  color: #FF7500;
}
</style>