<template id = "cont">
  <div class = "cont">
    <div class = "contentDiv" v-for = "(i, index) in contentList" :key = "index">
      <div class = "contentDiv_img">
        <a :href = "'#' + i.userid" class = "a_img"><img :src = "i.userimg" :alt = "i.username"></a>
        <a :href = "'#' + i.userid" class = "a_name">{{i.username}}</a>
      </div>
      <div class = "contentDiv_content">
        <a :href = "'#' + i.articleid" class = "title">{{i.title}}</a>
        <div class = "content">{{i.content}}</div>
      </div>
      <div class = "contentDiv_info">
        <div>
          <a><i class = "fa fa-eye" aria-hidden = "true"></i> {{i.count[0]}}</a>
          <a><i class = "fa fa-comment-o" aria-hidden = "true"></i> {{i.count[1]}}</a>
          <a><i class = "fa fa-thumbs-o-up" aria-hidden = "true"></i> {{i.count[2]}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  template: "#cont",
  data() {
    return {
      contentList: [
        {username: "小明", userid: "123423", title: "论平安经1", userimg: "https://myweb-image.oss-cn-beijing.aliyuncs.com/main_head.jpg",
        content: "论平安经论平安经论平安经论平安经论平安经论平安经论平安经论平安经论平安经论平安经论平安经", count: [23, 1, 3], articleid: "3323"},
        {username: "小明", userid: "123423", title: "论平23232332安3经", userimg: "https://myweb-image.oss-cn-beijing.aliyuncs.com/main_head.jpg",
        content: "论平安经论2平安经论平安经论平安经论平232安经论平安经论2323232安经论平安经论平安32323论平安经论2平安经论平安经论2平安经论平安经论平安经论平232安经论平安经论2323232安经论平安经论平安32323经论平安经论平安经论平安论论平安经论2平安经论平安经论平安经论平232安经论平安经论2323232安经论平安经论平安32323经论平安经论平安经平安经论2平安经论平安经论平安经论平232安经论平安经论2323232安经论平安经论平安32323经论平安经论平安经经论平安经论平232安经论平安经论2323232安经论平安经论平安32323经论平安经论平安经经论平安经论平安经", count: [123, 11, 31], articleid: "3323" },
        {username: "小明", userid: "123423", title: "论平2323232安33经", userimg: "https://myweb-image.oss-cn-beijing.aliyuncs.com/main_head.jpg",
        content: "论平安经论2平安经论平安经论平安经论平232安经论平安经论2323232安经论平安经论平安32323经论平222222222222安经论平安经", count: [123, 11, 31], articleid: "3323" },
        {username: "小明", userid: "123423", title: "论平232322332安经", userimg: "https://myweb-image.oss-cn-beijing.aliyuncs.com/main_head.jpg",
        content: "论平安经论2平安经论平安经论平安经论平232安经论平安经论2323232安经论平安经论平安32323经论平23333333333安经论平安经", count: [123, 11, 31], articleid: "3323" },
        {username: "小明", userid: "123423", title: "论平23233332安3经", userimg: "https://myweb-image.oss-cn-beijing.aliyuncs.com/main_head.jpg",
        content: "论平安经论2平安经论2333333333333平安经论平安经论平232安经论平安经论2323232安经论平安经论平安32323经论平安经233333333333333333论平安经", count: [123, 11, 31], articleid: "3323" },
        {username: "小明", userid: "123423", title: "论平2323232332安3经", userimg: "https://myweb-image.oss-cn-beijing.aliyuncs.com/main_head.jpg",
        content: "论平安经论2平安经论2333333333333333平安经论332233333333平安经论平232安经论平安经论2323232安经论平安经论平安32323经论平23333333333安经论平安经", count: [123, 11, 31], articleid: "3323" }
      ]
    }
  }
}
</script>

<style>
  .cont {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .contentDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    min-height: 100px;
    margin-bottom: 15px;
    background-color: #FFF;
    border-radius: 10px;
    transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    box-shadow: 0px 1px 2px #333333;
    -moz-box-shadow: 0px 1px 2px #333333;
    -webkit-box-shadow:0px 1px 2px #333333;
  }
  .contentDiv:hover {
    box-shadow: 0px 2px 4px #333333;
    -moz-box-shadow: 0px 2px 4px #333333;
    -webkit-box-shadow:0px 2px 4px #333333;
  }

  .contentDiv_img {
    margin-top: 20px;
    width: 100px;
  }
  .contentDiv_img .a_img {
    margin-left: 25px;
    display: block;
    border-radius: 50%;
  }
  .contentDiv_img .a_name {
    width: 50px;
    margin-left: 25px;
    display: block;
    text-align: center;
    font-size: 12px;
  }
  .contentDiv_img img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .contentDiv_content {
    width: 70%;
  }
  .contentDiv_content .title {
    display: block;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bolder;
  }
  .contentDiv_content .content {
    margin-bottom: 20px;
    font-size: 14px;
  }

  .contentDiv_info {
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .contentDiv_info div {
    padding-left: 40px;
  }
  .contentDiv_info div a {
    display: block;
    font-size: 10px;
    color: #3F494B;
  }

</style>