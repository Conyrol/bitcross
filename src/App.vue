<template>
  <div id = "app">
    <topbar></topbar>
    <div class = "contentFlex">
      <div class = "contentDiv">
        <left-sidebar class = "leftSidebar"></left-sidebar>
        <contentbar class = "content"></contentbar>
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
  .contentFlex {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .contentDiv {
    width: 80%;
    min-width: 900px;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .leftSidebar {
    margin-right: 15px;
    flex-grow: 1;
  }
  .content {
    flex-grow: 4;
  }
</style>