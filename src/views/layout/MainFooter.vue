<template>
    <div class="footer">
        <mt-navbar v-model="selected">
            <mt-tab-item v-on:click.native="childClick(item)" v-for="(item,index) of tabOptions" :key="index" :id="item" >
                <template v-for='(v,k) in item'>
                    <router-link class="link" :key="v" :to="'/'+k">{{v}}</router-link>
                </template>
            </mt-tab-item>
        </mt-navbar>
    </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui'
export default {
  name: 'MainFooter',
  components: {
    Navbar,
    TabItem
  },
  mounted: function () {
    this.childClick('消息')
  },
  methods: {
    childClick (item) {
      // childByValue是在父组件on监听的方法
      // 第二个参数this.childValue是需要传的值
      this.$emit('childByValue', item)
    }
  },
  data () {
    return {
      selected: 'index',
      tabOptions: [{'index': '消息'}, {'chat': '通讯录'}, {'center': '个人中心'}]
    }
  }
}
</script>

<style scoped>
.footer{
    margin-bottom: 1px;
}
.link{
    text-decoration: none;
    color:cadetblue;
 }
</style>
