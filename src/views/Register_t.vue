<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-11 22:17:04
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-14 09:19:57
 * @FilePath: \web开发项目\shop_client\src\views\Register_t.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="all">
      <div class="nav_bar">
        <img src="../assets/image/logo.png" />
        <div class="login_bar">
          <span>已有账号？</span>
          <router-link to="/login">去登录&gt;</router-link>
        </div>
      </div>
      <div class="content">
        <div class="name">账号注册</div>
        <div class="form">
          <form name="myform">
            <table class="table">
              <tr class="username">
                <td>
                  <label for="username">用户名<span>*</span></label>
                </td>
                <td>
                  <input type="text" name="username" v-model="username" id="userrname" required />
                </td>
              </tr>
              <tr>
                <td><label for="password">密码<span>*</span></label></td>
                <td><input type="password" id="password" v-model="password" required></td>
              </tr>
              <tr>
                <td><label for="gender">性别<span>*</span></label></td>
                <td><input class="gender" type="radio" v-model="gender" name="gender" value="男" checked>男
                    <input class="gender" type="radio" v-model="gender" name="gender" value="女" >女</td>
              </tr>
              <tr>
                <td><label for="address">地址<span>*</span></label></td>
                <td class="address">
                  <el-cascader size="large" :options="options" v-model="selectedOptions" @change="handleChange" style="width:200px;height:10px"></el-cascader>
                    </td>
              </tr>
              <tr>
                <td><label for="detail">详细地址<span>*</span></label></td>
                <input type="text" v-model="detail" required>
              </tr>
              <tr>
                <td><label for="numberphone">电话号码<span>*</span></label></td>
                <td><input type="number" id="numberphone" v-model="numberphone" name="numberphone" required></td>
              </tr>
              <tr>
                <td><label for="email">邮箱</label></td>
                <td><input type="email" v-model="email" name="email" id="email"></td>
              </tr>
              <!-- 图片验证码和手机验证码制作区 -->
              <!-- <tr>
                <td><label for="Picture_Verification_Code">图片验证码<span>*</span></label></td>
                <td><input type="text" v-model="Picture_Verification_Code" name="Picture_Verification_Code" required id="Picture_Verification_Code">图片验证码制作区</td>
              </tr> -->
              <!-- <tr>
                <td><label for="Phone_Verification_Code">短信验证码<span>*</span></label></td>
                <td><input type="text" id="Phone_Verification_Code" v-model="Phone_Verification_Code" required><button>获取验证码</button></td>
              </tr> -->
              <tr>
                <td></td>
                <td><input class="agree" type="checkbox" id="agree" required><span>*我已阅读并同意所有条款和条件 以及 隐私政策</span></td>
              </tr>
              <tr>
                <td></td>
                <td><button type="button" class="register" @click="register">注册</button></td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    <footer class="footer">
        <div class="illustrate">版权所有@天赐之翼 2001-<span class="year">{{nowdate}}</span>.保留所有权利。</div>
    </footer>
    </div>
</template>

<script>
import axios from 'axios'
// import vdistpicker from 'v-distpicker'
import { regionData, CodeToText } from 'element-china-area-data'
export default {
  name: 'Register_t',
  // components: 'el-cascader',
  data () {
    return {
      // 三级地址
      options: regionData,
      selectedOptions: [],
      // 详细地址
      detail: '',
      username: '',
      password: '',
      gender: '男',
      numberphone: '',
      email: '',
      province: '',
      city: '',
      area: '',
      // 完整地址
      address: '',
      nowdate: ''
      // 图片验证码和手机验证码 暂时不做
      // Picture_Verification_Code: '',
      // Phone_Verification_Code: '',

    }
  },
  mounted () {
    let date = new Date()
    this.nowdate = date.getFullYear()
  },
  methods: {
    // 三级地址获取测试
    handleChange (value) {
      this.province = CodeToText[value[0]]
      this.city = CodeToText[value[1]]
      this.area = CodeToText[value[2]]
      // console.log('编码', value)
      // console.log('省：', CodeToText[value[0]])
      // console.log('市：', CodeToText[value[1]])
      // console.log('区：', CodeToText[value[2]])
      // console.log(this.nowdate)
    },
    register () {
      let flag = true
      //   // const sql = 'insert into user(id,username,numberphone,gender,email,address) values (?,?,?,?,?,?)'
      //   // connect.query(sql,[1, "a", "123", "男", "1wqe","tpq"],(err,result)=>{})
      //   // 判断密码是否合法
      if (this.password.length < 8) {
        this.password = ''
        flag = false
        alert('密码不能少于8位')
      } else if (this.password.length > 12) {
        this.password = ''
        flag = false
        alert('密码不能多于12位')
      }
      // 判断电话号码是否合法
      if ((this.numberphone.length) !== 11) {
        flag = false
        alert('电话号码不合法')
      }
      // 地址和邮箱稍作改变
      this.address = this.province + this.city + this.area + this.detail
      if (this.email === '') {
        this.email = null
      }
      // 发送请求 插入数据到数据库中
      if (flag) {
        axios.get('/server/register', {
          params: {
            username: this.username,
            password: this.password,
            numberphone: this.numberphone,
            gender: this.gender,
            email: this.email,
            address: this.address
          }
        }).then(res => {
          // console.log(res.data)
          if (res.data === '注册成功') {
            localStorage.setItem('username', this.username)
            localStorage.setItem('password', this.password)
            localStorage.setItem('gender', this.gender)
            localStorage.setItem('address', this.address)
            localStorage.setItem('numberphone', this.numberphone)
            localStorage.setItem('email', this.email)
            this.$router.push('/login')
          }
        },
        _error => {
          alert(_error.message + '注册失败——1')
        })
          .catch(err => {
            alert(err + '注册失败——2')// 失败回调函数
          })
      }
    }
  }
}
</script>

<style lang="less" scoped>
       .all{
            min-width: 768px;
        }
      * {
        margin: 0%;
        padding: 0%;
      }
      a{
        text-decoration: none;
      }
      input:not(.gender,.agree){
        width: 195px;
      }
      .nav_bar {
        height: 75px;
        display: flex;
        line-height: 75px;
        border-bottom: 1px rgb(218, 210, 210) solid;
        box-shadow: 0px 1px 10px rgb(198, 191, 191);
      }
      .nav_bar > img {
        width: 50px;
        height: 50px;
        margin-top: 11px;
        margin-left: 10%;
      }
      .nav_bar > .login_bar {
        margin-left: 60%;
        font-size: 16px;
      }
.content>.name{
  margin-top: 30px;
  font-size: 28px;
  margin-left: 10%;
  margin-bottom: 30px;
}
.content>.form{
  border: 1px rgb(236, 218, 218) solid;
  margin-left: 10%;
  margin-right: 10%;
}
.table{
  border-collapse: separate;
  border-spacing: 20px 25px;
}
#address{
  width:80px;
}
span:not(.year){
  color: red;
}
#Picture_Verification_Code,#Phone_Verification_Code{
  margin-right: 15px;
}
.register{
  padding: 5px 28px;
  color: rgb(178, 168, 168);
  font-weight: bold;
}
 .footer{
           width: 100%;
            position:absolute;
            top: 650px;
            bottom:0;
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
}
</style>
