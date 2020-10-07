<template>
  <div class = "flexDiv_row">
    <div class = "regSign">
      <div class = "flexDiv_row">
      <el-button class = "change_bottom" type = "primary"
        icon = "el-icon-refresh" circle
        @click = "change()"></el-button>
      </div>
      <el-collapse-transition>
      <div class = "sign" v-show = "showSign">
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelSign">
          <el-form-item label="学号">
            <el-input v-model="formLabelSign.user_id" @input = "checkId()"></el-input>
          </el-form-item>
          <div class = "flexDiv_row"><a class = "warn_text" v-show = "code % numList[0] == 0">学号不存在</a></div>
          <div class = "flexDiv_row"><a class = "notice_text" v-show = "code2 == 1">你的姓名是: {{realName}}</a></div>
          <el-form-item label="密码">
            <el-input v-model="formLabelSign.password"></el-input>
          </el-form-item>
          <div class = "flexDiv_row"><a class = "warn_text" v-show = "code % numList[1] == 0">密码长度需要 6 到 20!</a></div>
          <div class = "flexDiv_row"><a class = "warn_text" v-show = "code % numList[2] == 0">密码含有非法字符</a></div>
          <el-form-item label="确认密码">
            <el-input v-model="formLabelSign.password2"></el-input>
          </el-form-item>
          <div class = "flexDiv_row"><a class = "warn_text" v-show = "code % numList[3] == 0">你的密码不一致哦!</a></div>
          <el-form-item label="邀请码">
            <el-input v-model="formLabelSign.invite"></el-input>
          </el-form-item>
          <div class = "flexDiv_row"><a class = "warn_text" v-show = "code % numList[4] == 0">邀请码不存在</a></div>
          <div class = "flexDiv_row"><a class = "warn_text" v-show = "code % numList[5] == 0">邀请码已被使用完</a></div>
          <el-form-item label="邮箱">
            <div class = "flexDiv_row">
              <el-input class = "email_input" v-model="formLabelSign.email"></el-input>
              <el-button :disabled = "emailButtondisabled" class = "email_button" type="info" icon="el-icon-message" @click = 'sendEmail()' circle></el-button>
            </div>
          </el-form-item>
          <div class = "flexDiv_row"><a class = "warn_text" v-show = "code % numList[6] == 0">邮箱错误</a></div>
          <el-form-item label="验证码">
            <el-input v-model="formLabelSign.check"></el-input>
          </el-form-item>
          <div class = "flexDiv_row"><a class = "warn_text" v-show = "code % numList[7] == 0">验证码错误</a></div>
        </el-form>
        <div class = "flexDiv_row">
          <el-button class = "reSignbutton" type="success" @click = "submitSign()">注册</el-button>
        </div>
      </div>
      </el-collapse-transition>
      <el-collapse-transition>
      <div class = "register" v-show = "!showSign">
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelRegister">
          <el-form-item label="学号">
            <el-input v-model="formLabelRegister.user_name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="formLabelRegister.user_id"></el-input>
          </el-form-item>
        </el-form>
        <div class = "flexDiv_row">
          <el-button class = "reSignbutton" type="success" @click = "submitRegister()">登录</el-button>
        </div>
      </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        realName: "",                     // 用户真实姓名
        interval: null,                   // 计时器
        count: 60,                        // 按钮失效的倒计时j
        emailButtondisabled: false,       // 邮件按钮是否应该被禁用
        code: 1,                          // 错误码
        code2: 0,                         // 正确码
        showSign: true,                   // 是显示登陆界面还是注册界面
        labelPosition: 'left',            // 文字靠左
        formLabelSign: {                  // 注册表单数据
          user_id: '',
          password: '',
          password2: '',
          invite: '',
          email: '',
          check: ''
        },
        formLabelRegister: {               // 登陆表单数据
          user_name: '',
          user_id: ''
        },
        numList: [2, 3, 5, 7, 11, 13, 17, 19, 23]   // 质数表
      };
    },
    methods: {
      changeCode(index, bet){
        if(bet && this.code % this.numList[index] != 0) this.code *= this.numList[index];
        if(!bet && this.code % this.numList[index] == 0) this.code /= this.numList[index];
      },

      submitSign() {                         // 提交注册信息（在提交之前检查）
        for(let i = 1; i <= 7; i++) this.changeCode(i, 0);
        if(this.formLabelSign.password.length < 6 || this.formLabelSign.password.length > 20) this.changeCode(1, 1);
        else{
          let check = /[^0-9a-zA-Z_]/g
          if(check.test(this.formLabelSign.password)) this.changeCode(2, 1);
        }
        if(this.formLabelSign.password != this.formLabelSign.password2) this.changeCode(3, 1);
        
        if(this.formLabelSign.invite.length == 0) this.changeCode(4, 1);

        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if(!reg.test(this.formLabelSign.email)) this.changeCode(6, 1);
        if(this.formLabelSign.check.length != 6) this.changeCode(7, 1);
        if(this.code == 1){
          this.$axios({
            method: 'post',
            url: 'http://localhost:30000/api/sendEmailCode',
            data: ({
              email: this.formLabelSign.email,
            })
          })
        }
      },

      checkId() {
        this.code2 = 0;
        
        if(this.formLabelSign.user_id.length != 12) this.changeCode(0, 1);
        else{
          this.$axios({
            method: 'get',
            url: 'http://seat.lib.sdu.edu.cn/api.php/users/' + this.formLabelSign.user_id,
          }).then(response => {
            if(response.data.status == 0) this.changeCode(0, 1);
            else{
              this.realName = response.data.data.list.name;
              this.changeCode(0, 0);
              this.code2 = 1;
            }
          });
        }
      },

      submitRegister() {                     // 提交登录信息（无需检查）
        console.log(this.formLabelRegister);
      },

      change() {                             // 改变页面函数（登录和注册）
        this.showSign = !this.showSign;
      },

      sendEmail() {
        this.emailButtondisabled = true;
        this.count = 60;
        this.interval = setInterval(() => {
          this.count--;
          if(this.count == 0){
            clearInterval(this.interval);
            this.emailButtondisabled = false;
          }
        }, 1000);

        this.changeCode(6, 0);
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	      if(reg.test(this.formLabelSign.email)){
          this.$axios({
            method: 'post',
            url: 'http://localhost:30000/api/sendEmailCode',
            data: ({
              email: this.formLabelSign.email,
            })
          })
          .then(response => {
            console.log(response.data);
            if(response.data.error == 0){
              alert("发送成功，若未收到请等待一段时间再发 (60 s)");
              this.emailButtondisabled = true;
            }
            else alert("发送失败，如果多次失败请联系网站管理人员");
          })
          .catch(error => { alert("发送失败"); });
        }
        else this.changeCode(6, 1);
      }
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  html {
    height: 100%;
  }
  body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }
  .flexDiv_row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .regSign{
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #FFF;
    width: 350px;
    border-radius: 10px;
    transition-duration: 1s;
    -webkit-transition-duration: 1s;
    box-shadow: 0px 1px 2px #333333;
    -moz-box-shadow: 0px 1px 2px #333333;
    -webkit-box-shadow:0px 1px 2px #333333;
  }
  .regSign:hover {
    box-shadow: 0px 2px 4px #333333;
    -moz-box-shadow: 0px 2px 4px #333333;
    -webkit-box-shadow:0px 2px 4px #333333;
  }
  .regSign div{
    transition-duration: 1s;
    -webkit-transition-duration: 1s;
  }
  .regSign form {
    margin-right: 30px !important;
    margin-left: 30px !important;
  }
  .email_input input {
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
  }
  .email_button {
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    border-top-right-radius: 4px !important;
    border-bottom-right-radius: 4px !important;
  }
  .regSign .el-form-item {
    margin-top: 11px !important;
    margin-bottom: 11px !important;
  }
  .warn_text {
    color: red;
    font-size: 12px;
  }
  .notice_text {
    color: green;
    font-size: 12px;
  }
  .reSignbutton {
    margin-top: 15px;
  }
</style>