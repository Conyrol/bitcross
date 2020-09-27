<template id = "search">
  <div class = "searchBar">
    <form>
      <input type = "text" class = "searchInput" placeholder = "搜索内容">
      <button type = "submit"></button>
    </form>
  </div>
</template>

<script>
export default {
  template: "#search",
}
</script>

<style>
  .searchBar input, button {
    border: none;
    outline: none;
  }
  .searchBar input {
    height: 30px;
    width: 250px;
    padding-left: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 2px #987ff0;
    -moz-box-shadow: 0px 0px 2px #987ff0;
    -webkit-box-shadow:0px 0px 2px #987ff0;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
  }
  .searchBar input:focus {
    box-shadow: 0px 0px 4px #987ff0;
    -moz-box-shadow: 0px 0px 4px #987ff0;
    -webkit-box-shadow:0px 0px 4px #987ff0;
  }
  .searchBar button {
    position: relative;
    right: 31px;
    height: 28px;
    width: 30px;
    background-color: #FFF;
    cursor: pointer;
    border-radius: 15px;
    transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
  }
  .searchBar button:before {
    content: "\f002";
    font-family: FontAwesome;
    font-size: 16px;
    color: #006d52;
  }
</style>