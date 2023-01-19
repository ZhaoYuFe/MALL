<template>
  <div class="goods">
    <div class="chaoshi">
        <span><img src="" alt="">1</span>
        <span><img src="" alt="">2</span>
        <span><img src="" alt="">3</span>
        <span><img src="" alt="">4</span>
        <span><img src="" alt="">5</span>
        <span><img src="" alt="">6</span>
        <span><img src="" alt="">7</span>
        <span><img src="" alt="">8</span>
        <span><img src="" alt="">9</span>
        <span><img src="" alt="">10</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.chaoshi{
    display: grid;
    grid-gap: 10px;
    position: relative;
    top: -200px;
    left: 16px;
    height: 500px;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
}
.chaoshi span{
    background-color: #999;
    width: 200px;
    height: 250px;
}
</style>