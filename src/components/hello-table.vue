<template>
  <div>hello-table</div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  name: 'HelloTable',
  data() {
    return {
      list: [],
    }
  },
  methods: {
    async getList() {
      const res = await getList()
      console.log(res)
    },
  },
}
</script>
