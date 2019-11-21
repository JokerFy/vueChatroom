<template>
    <div class="header">
        <mt-header :title="titles">
            <router-link to="/" slot="left">
                <mt-button icon="back">back</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>

<script>
import Header from 'mint-ui'
export default {
  name: 'MainHeader',
  components: {
    Header
  },
  data () {
    return {
      titles: 'Vue聊天室'
    }
  }
}
</script>

<style scoped>

</style>
