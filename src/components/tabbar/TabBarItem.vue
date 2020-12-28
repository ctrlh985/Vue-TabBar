<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    <!--绑定class可以满足需求，但是我们想要用户自定义活跃状态文字的颜色，所以我们可以绑定style来完成这个需求-->
    <!--<div :class="{active:isActive}"><slot name="item-text"></slot></div>-->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'black'
      }
    },
    data() {
      return{
        //定义一个属性判断当前的item是否处于被点击状态，但是我们的需求是点击的处于活跃，不被点击的不处于活跃
        //所以需要改进
        // isActive: true
      }
    },
    methods:{
      itemClick() {
        // console.log('itemClick');
        this.$router.replace(this.path)
        // console.log(this.path);
      }
    },
    //被点击的item处于活跃，不被点击的不处于活跃
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        //当item处于活跃状态时，color为自定颜色，否者为默认颜色
        return this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
  .tab-bar-item img{
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .active{
    color: orangered;
  }
</style>