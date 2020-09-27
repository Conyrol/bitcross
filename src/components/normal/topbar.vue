<template id = "topbar">
  <div class = "topbar">
    <img src = "https://myweb-image.oss-cn-beijing.aliyuncs.com/BitCrosS.png" alt = "首页图标" class = "headIco">
    <searchInput class = "searchBar"></searchInput>
  </div>
</template>

<script>
import searchInput from 'components/reusable/searchInput.vue'
export default {
  template: "#topbar",
  components: {
    searchInput
  }
}
</script>

<style>
  .topbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    transition-duration: 0.5s;
    background-color: #FFFFFF;
    -webkit-transition-duration: 0.5s;
    box-shadow: 0px 1px 2px #333333;
    -moz-box-shadow: 0px 1px 2px #333333;
    -webkit-box-shadow:0px 1px 2px #333333;
  }
  .topbar:hover{
    box-shadow: 0px 2px 4px #333333;
    -moz-box-shadow: 0px 2px 4px #333333;
    -webkit-box-shadow:0px 2px 4px #333333;
  }
  .headIco {
    display: inline-block;
    margin-top: 15px;
    margin-left: 20px;
    height: 30px;
  }
  .searchBar {
    position: relative;
    top: 15px;
    right: 20px;
  }
</style>