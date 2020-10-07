<template id = "topbar">
  <div class = "topbar">
    <img src = "https://myweb-image.oss-cn-beijing.aliyuncs.com/BitCrosS.png" alt = "首页图标" class = "headIco">
    <div class = "topbar_1">
      <searchInput class = "searchBar"></searchInput>
      <a :href = "'#' + userid" class = "head_a_img"
        @click = "headClick()"><img :src = "imgsrc" :alt = "username"></a>
    </div>
  </div>
</template>

<script>
import searchInput from 'components/reusable/searchInput.vue'
export default {
  template: "#topbar",
  components: {
    searchInput
  },
  data() {
    return {
      imgsrc: "https://myweb-image.oss-cn-beijing.aliyuncs.com/main_head.jpg",
      username: "小黑",
      userid: "201805130146",
      checkRegister: 0
    }
  },
  methods: {
    headClick(){
      this.checkRegister = !this.checkRegister;
      this.$emit('receive', this.checkRegister);
    },
  }
}
</script>

<style>
  .topbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 70px;
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
  .topbar_1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .headIco {
    display: inline-block;
    margin-top: 15px;
    margin-left: 20px;
    height: 30px;
  }
  .searchBar {
    position: relative;
    top: 20px;
    right: 20px;
  }
  .head_a_img {
    margin-top: 9px;
    margin-right: 20px;
    height: 50px;
  }
  .head_a_img img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid #333333;
    padding: 1px;
  }
</style>