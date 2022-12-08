<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-17 09:57:22
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-20 10:20:23
 * @FilePath: \web开发项目\shop_client\src\views\Address.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
      <div class="address">收货地址</div>
      <div class="add">新增收货地址</div>
      <table class="table">
        <tr>
          <td><span>*</span>地址信息:</td>
          <td><el-cascader size="large" :options="options" v-model="selectedOptions" @change="handleChange" style="width:200px;"></el-cascader>
      </td>
        </tr>
        <tr>
          <td><span>*</span>详细地址:</td>
          <td><input type="text" v-model="detail" required>
          </td>
        </tr>
        <tr>
          <td>邮政编码:</td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td><span>*</span>收货人姓名:</td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td><span>*</span>手机号码:</td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <div class="default"><input class="chose" type="checkbox">设置为默认收货地址</div>
        </tr>
        <tr>
          <td colspan="2">
          <button>保存</button>
          </td>
        </tr>
      </table>
      <div class="keepaddress">
        <!-- 下面的数字需要使用data来代替 -->
        <div class="keeped">已保存0条地址，还能保存20条地址</div>
        <div class="keeptable">
          <table class="table2" cellspacing="0">
            <tr>
              <td>收货人</td>
              <td>所在地区</td>
              <td>详细地址</td>
              <td>邮编</td>
              <td>手机/电话</td>
              <td>操作</td>
              <td></td>
            </tr>
            <!-- 使用v-for输出列表数据 -->
            <tr>
              <td>段天赐</td>
              <td>云南省昭通市昭阳区</td>
              <td>洒渔镇白鹤村</td>
              <td>000000</td>
              <td>15287769417</td>
              <td><span class="modify"><router-link to="/person/myinformation/address">修改</router-link></span><span class="icon">|</span><span class="delete">删除</span></td>
              <td>设为默认</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
import { regionData, CodeToText } from 'element-china-area-data'
export default {
  name: 'Address_t',
  data () {
    return {
      // 三级地址
      options: regionData,
      selectedOptions: [],
      // 详细地址
      detail: '',
      province: '',
      city: '',
      area: ''
    }
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
  color: black;
}
.address{
  width:100%;
  height:30px;
  line-height: 30px;
  padding-left: 15px;
  background-color: rgb(231, 247, 250);
  margin-bottom: 25px;
  font-size: 15px;
}
.add{
  font-size: 14px;
  color: red;
}
span:not(.modify,.icon,.delete){
  color: red;
}
.table {
  border-collapse: separate;
  border-spacing: 15px 20px;
  font-size: 14px;
}
.chose{
  height: 12px;
}
button{
  color: white;
  background-color: rgb(75, 141, 239);
  padding: 3px 12px;
  border: 1px blue solid;
  margin-left: 120px;
}
.keeped{
  font-size: 14px;
  padding-left: 15px;
  height: 35px;
  line-height: 35px;
  margin-bottom: 20px;
  margin-top: 10px;
  background-color: rgb(222, 238, 245);
}
.table2{
  border: 1px blue solid;
  border-width: 0px 0px 1px 1px;
  width: 100%;
}
.table2 td{
  border: 1px blue solid;
  border-width: 1px 1px 0px 0px;
  text-align: center;
  min-width: 100px;
}
.table2>tr:nth-child(1){
  height: 40px;
  background-color: rgb(238, 230, 230);
}
.table2>tr:nth-child(2){
  height: 60px;
}
</style>
