<template id = "lsb">
  <div class = "lsbar_main"
  :style = "{ 'fontSize': fontSize }">
    <ul>
      <li v-for = "(i, index) in test"
      :style = "{
        'color': i.colorDisplay,
        'backgroundColor': i.background,
        'width': i.width,
        'border-left': '3px solid ' + i.color,
	      'border-right': '3px solid ' + i.color }"
      :key = "index"
      @mouseover = "liOver(index)"
      @mouseleave = "liLeave(index)"
      @click = "liClick(index)" v-html = "i.tag + i.className"></li>
    </ul>
  </div>
</template>

<script>
export default {
  template: "#lsb",
  data() {
    return {
      test: [
        {color: "#f1ca17", colorDisplay: "#FFF", className: "主页", background: "#f1ca17", width: "80%",
        clickCheck: 1, tag:"<i class='fa fa-home' aria-hidden='true'></i> " },
        {color: "#eea2a4", colorDisplay: "#eea2a4", className: "资料分类", background: "#FFF", width: "80%",
        clickCheck: 0, tag:"<i class='fa fa-list' aria-hidden='true'></i> " },
        {color: "#2775b6", colorDisplay: "#2775b6", className: "开发经验", background: "#FFF", width: "80%", 
        clickCheck: 0, tag:"<i class='fa fa-cogs' aria-hidden='true'></i> " },
        {color: "#e3b4b8", colorDisplay: "#e3b4b8", className: "学习交流", background: "#FFF", width: "80%", 
        clickCheck: 0, tag:"<i class='fa fa-handshake-o lg' aria-hidden='true'></i> " },
        {color: "#495c69", colorDisplay: "#495c69", className: "校园生活", background: "#FFF", width: "80%", 
        clickCheck: 0, tag:"<i class='fa fa-graduation-cap' aria-hidden='true'></i> " },
        {color: "#229453", colorDisplay: "#229453", className: "算法竞赛", background: "#FFF", width: "80%", 
        clickCheck: 0, tag:"<i class='fa fa-file-code-o' aria-hidden='true'></i> " },
        {color: "#a61b29", colorDisplay: "#a61b29", className: "科研讨论", background: "#FFF", width: "80%", 
        clickCheck: 0, tag:"<i class='fa fa-superscript' aria-hidden='true'></i> " },
      ],
      fontSize: "16px"
    }
  },
  methods: {
    setBack(index){
      this.test[index].colorDisplay = this.test[index].color;
      this.test[index].background = "#FFF";
      this.test[index].width = "80%";
      this.test[index].clickCheck = 0;
    },
    setChange(index){
      this.test[index].background = this.test[index].color;
      this.test[index].colorDisplay = "#FFF";
    },
    liOver(index) {
      for(let i = 0; i < this.test.length; i++) if(this.test[i].clickCheck != 1) this.setBack(i);
      this.test[index].width = "90%";
      this.setChange(index);
    },
    liLeave(index) {
      if(this.test[index].clickCheck != 1) this.setBack(index);
      this.test[index].width = "80%";
    },
    liClick(index) {
      for(let i = 0; i < this.test.length; i++) this.setBack(i);
      this.test[index].clickCheck = 1;
      this.setChange(index);
    }
  }
}
</script>

<style>
  .lsbar_main {
    background-color: transparent;
    text-align: center;
  }
  li {
    padding: 12px;
    margin: 4px;
    border-radius: 10px;
    font-weight: bolder;
    transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    box-shadow: 0px 1px 2px #333333;
    -moz-box-shadow: 0px 1px 2px #333333;
    -webkit-box-shadow:0px 1px 2px #333333;
  }
</style>