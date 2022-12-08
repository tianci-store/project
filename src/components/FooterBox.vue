<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-12 10:41:18
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-23 10:58:24
 * @FilePath: \web开发项目\shop_client\src\components\Footer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="footer">版权所有@天赐之翼 2001-<span class="year">{{nowdate}}</span>.保留所有权利。</div>
</template>

<script>
export default {
  name: 'FooterBox',
  data () {
    return {
      nowdate: ''
    }
  },
  mounted () {
    let date = new Date()
    this.nowdate = date.getFullYear()
  }
}
</script>

<style lang="less" scoped>
.footer{
           width: 100%;
            position:absolute;
            top: 611px;
            bottom:0;
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
}
</style>
