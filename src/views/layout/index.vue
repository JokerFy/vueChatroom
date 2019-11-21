<template>
    <div class="container">
        <MainHeader></MainHeader>
        <!-- header  -->
        <div class="containerBox">
            <router-view></router-view>
        </div>
        <!-- footer  -->
        <MainFooter v-on:childByValue="childByValue"></MainFooter>
    </div>
</template>

<script>
import { Header } from 'mint-ui'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
export default {
  name: 'index',
  components: {
    Header,
    MainHeader,
    MainFooter
  },
  methods: {
    childByValue: function (childValue) {
      // childValue就是子组件传过来的值
      console.log(childValue)
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.container{
    height:100%;
    display: flex;
    flex-direction: column;
}
.containerBox{
    flex: 1;
    overflow-y: scroll;
}
</style>
