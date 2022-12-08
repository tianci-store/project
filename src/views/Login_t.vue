<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-09 18:30:30
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-14 15:54:00
 * @FilePath: \web开发项目\shop_client\src\views\Login_t.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div class="main">
        <!-- 登录界面编写区域 -->
        <div class="form">
            <div class="form_title">登录</div>
        <form name="login_form" class="login_form">
            <table class="table">
                <tr>
                    <td>
                        <input type="text" v-model="username" id="username" required placeholder="请输入您的账号">
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="password" v-model="password" id="password" required placeholder="请输入您的账号密码">
                    </td>
                </tr>
                <tr>
                    <td>
                       <button type="button" @click="login">登录</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="problem">
                        <router-link to="/register">注册</router-link>
                        <div class="sign">|</div>
                        <div class="forget">忘记密码</div>
                        </div>
                    </td>
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
export default {
  name: 'Login_t',
  data () {
    return {
      username: '',
      password: '',
      nowdate: ''
    }
  },
  mounted () {
    let date = new Date()
    this.nowdate = date.getFullYear()
  },
  methods: {
    login () {
      if (this.username === '') {
        alert('账号不能为空')
      } else {
        if (this.password === '') {
          alert('密码不能为空')
        }
      }
      // 如果是新用户，直接利用本地存储的数据登录
      // if (this.username === localStorage.username && this.password === localStorage.password) {
      //   this.$router.replace('/')
      // } else {
      // const param = new URLSearchParams()
      // param.append('username', this.username)
      // param.append('password', this.password)
      const obj = {
        username: this.username,
        password: this.password
      }
      axios.post('/server/login', obj).then(res => {
        // console.log(res.data)
        if (res.data !== '您的账户名或密码不正确') {
          localStorage.setItem('username', this.username)
          localStorage.setItem('password', this.password)
          localStorage.setItem('gender', res.data.data.gender)
          localStorage.setItem('address', res.data.data.address)
          localStorage.setItem('numberphone', res.data.data.numberphone)
          localStorage.setItem('email', res.data.data.email)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('IsLogin', res.data.IsLogin)
          // console.log(localStorage.username, localStorage.password, localStorage.numberphone)
          // console.log(localStorage.token)
          this.$router.push('/Home')
        } else {
          alert(res.data)
        }
      // }
      // ,
      // _error => {
      //   console.log(_error.message + '111')
      // })
      //   .catch(err => {
      //     console.log(err + '222')
      })
    // }
    }
  }
}
</script>

<style lang="less" scoped>
 *{
            margin: 0%;
            padding: 0%;
        }
        a{
          text-decoration: none;
        }
        .main{
            background-image: url(../assets/image/login.jpg);
            background-size: cover;
            height: 600px;
            background-repeat: no-repeat;
            position: relative;
        }
        .form{
            background-color: #fff;
            width: 400px;
            position: absolute;
            left: 35%;
            height: 420px;
            top: 14%;
            text-align: center;
            border-radius: 20px 20px 20px 20px;
        }
        .form_title{
            font-size: 28px;
            margin-top: 50px;
            margin-bottom: 20px;
        }
        .login_form{
            font-size: 18px;
            margin-left: 20%;
        }
        input{
            height: 30px;
            width: 200px;
        }
        button{
            height: 30px;
            width: 200px;
            background-color: rgb(232, 101, 101);
        }
        .table{
            border-collapse: separate;
            border-spacing: 20px 40px;
        }
        .problem{
            display: flex;
            font-size: 10px;
            justify-content: space-around;
        }
        .footer{
          width: 100%;
            position:absolute;
            top: 600px;
            bottom:0;
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
</style>
