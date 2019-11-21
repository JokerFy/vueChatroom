<template>
  <mt-header title="权爷我已经开始了，你人呢">
    <router-link to="/" slot="left">
      <mt-button icon="back">back</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>

<script>
import { Header } from 'mint-ui'
export default {
  name: 'HelloWorld',
  component: {
    Header
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
