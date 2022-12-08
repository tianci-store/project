<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-17 09:57:09
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-14 09:20:38
 * @FilePath: \web开发项目\shop_client\src\views\ModifyInformation.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div class="title">个人资料</div>
        <div class="modifycontent">
        <table>
            <tr>
                <td colspan="2">亲爱的{{username}},填写真实的资料，有助于好友找到你哦。</td>
            </tr>
            <tr>
                <td>当前头像:</td>
                <td>头像照片</td>
            </tr>
            <tr>
                <td>昵称:</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>真实姓名:</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>性别:</td>
                <td><input type="radio" name="gender">男
                <input type="radio" name="gender">女</td>
            </tr>
            <tr>
                <td>居住地:</td>
                <td><input type="text"></td>
            </tr>
        </table>
        <button>保存</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ModifyInformation',
  data () {
    return {
      username: localStorage.username
    }
  }
}
</script>

<style lang="less" scoped>
*{
    margin: 0%;
    padding: 0%;
}
    .title{
        padding: 5px;
        margin-left: 25px;
        width: 66px;
        border: 1px rgb(238, 224, 224) solid;
        border-bottom: none;
    }
.modifycontent{
    border: 1px rgb(234, 220, 220) solid;
    height: 340px;
    width:800px;
}
table{
    margin: 15px 10px;
    width: 98%;
    border-collapse: separate;
    border-spacing: 30px 20px;
    border-bottom: 1px rgb(244, 237, 237) solid;
}
td{
    width:25px;
    // background-color: red;
}
button{
    margin-left: 120px;
    padding: 2px 12px;
    background-color: rgb(234, 224, 158);
    border: 1px rgb(242, 163, 163) solid;
}
</style>
