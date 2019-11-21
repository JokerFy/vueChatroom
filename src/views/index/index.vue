<template>
    <mt-tab-container>
        <mt-tab-container-item>
            <mt-cell v-for="(item,index) in dataList" :key="index" :title="item.username">
                <img class="cell-img" slot="icon" :src="item.avatar" width="50" height="50">
            </mt-cell>
        </mt-tab-container-item>
    </mt-tab-container>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui'
import { fetchList } from '@/api/chat'
export default {
  name: 'index',
  component: {
    Navbar,
    TabItem
  },
  mounted: function () {
    this.getDataList()
  },
  methods: {
    // 获取数据列表
    getDataList () {
      fetchList().then((data) => {
        this.dataList = data.page.list
        console.log(this.dataList)
      })
    }
  },
  data () {
    return {
      dataList: []
    }
  }
}
</script>

<style scoped>
    .cell-img{
        margin: 5px;
        border-radius: 1px;
    }
</style>
