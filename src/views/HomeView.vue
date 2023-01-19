<template>
  <div class="home">
    <div class="img">
      <img src="https://img.alicdn.com/imgextra/i2/O1CN01a69z6z1hJklCkBqOU_!!6000000004257-2-tps-174-106.png" alt="" height="70" class="img0">
      <div class="search">
        <input type="text" placeholder="搜索 天猫 商品/品牌/店铺" class="input"><button class="btn0">搜索</button>
      </div>
    </div>
    <div class="bu">
      <home />
      <goods />
    </div>
  </div>
</template>

<style>

</style>

<script>
// @ is an alias to /src
import home from '@/components/home.vue'
import goods from '@/components/goods.vue';

export default {
  name: 'HomeView',
  components: {
    home,
    goods
  }
}
</script>
