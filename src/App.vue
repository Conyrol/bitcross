<template>
  <div id = "app">
    <topbar class = "topbar"></topbar>
    <div class = "contentFlex">
      <div class = "contentDiv_main">
        <left-sidebar class = "leftSidebar"></left-sidebar>
        <contentbar class = "contentbar"></contentbar>
      </div>
    </div>
    <footbar></footbar>
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
</style>