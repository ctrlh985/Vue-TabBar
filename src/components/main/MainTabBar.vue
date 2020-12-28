<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="deepPink">
      <img src="../../assets/img/home_light.svg" slot="item-icon">
      <img src="../../assets/img/home_fill.svg" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/hotSpot" active-color="deepPink">
      <img src="../../assets/img/hot_light.svg" slot="item-icon">
      <img src="../../assets/img/hot_fill.svg" slot="item-icon-active">
      <div slot="item-text">热卖</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="deepPink">
      <img src="../../assets/img/cart_light.svg" slot="item-icon">
      <img src="../../assets/img/cart_fill.svg" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="deepPink">
      <img src="../../assets/img/my_light.svg" slot="item-icon">
      <img src="../../assets/img/my_fill.svg" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../tabbar/TabBar";
  import TabBarItem from "../tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>