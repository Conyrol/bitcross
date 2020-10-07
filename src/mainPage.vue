<template>
  <div id = "app">
    <topbar @receive = "whetherShowRegister" class = "topbar"></topbar>
    <div class = "contentFlex">
      <div class = "contentDiv_main">
        <left-sidebar class = "leftSidebar"></left-sidebar>
        <contentbar class = "contentbar"></contentbar>
      </div>
      
    </div>
    <footbar></footbar>
    <div class = "register"
      :style = "{
        
        'height': registerHeight + 'px',
        'width': registerWidth + 'px'
      }">
      这里是登录注册
    </div>
  </div>
</template>

<script>
import topbar from 'components/normal/topbar.vue'

import leftSidebar from 'components/normal/left-sidebar.vue'
import contentbar from 'components/normal/contentbar.vue'
//import rightSidebar from 'components/normal/right-sidebar.vue'

//import footbar from 'components/reusable/footbar.vue'

export default {
  name: 'App',
  components: {
    topbar,
    leftSidebar, contentbar,
    //rightSidebar, footbar
  },
  data() {
    return {
      registerShow: "none",
      registerHeight: 0,
      registerWidth: 0
    }
  },
  methods: {
    whetherShowRegister(data){
      if(data){
        //this.registerShow = "inline";
        this.registerHeight = 300;
        this.registerWidth = 300;
      }
      else{
        //this.registerShow = "none";
        this.registerHeight = 0;
        this.registerWidth = 0;
      }
    }
  }
}
</script>

<style>
  @import "assets/css/base.css";
  .topbar {
    margin-bottom: 20px;
  }
  .contentFlex {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .contentDiv_main {
    width: 80%;
    min-width: 900px;
    max-width: 1600px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .leftSidebar {
    margin-right: 15px;
    width: 20%;
  }
  .contentbar {
    width: 77%;
  }
  .register {
    position: absolute;
    background-color: aqua;
    top: 0;
    transition-duration: 2s;
    -webkit-transition-duration: 2s;
  }
</style>