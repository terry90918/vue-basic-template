<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hello-world msg="Welcome to Your Vue.js App" />
    <hello-i18n />
    <hello-table />
  </div>
</template>

<script>
import HelloI18n from '@/components/hello-i18n'
import HelloTable from '@/components/hello-table'
import HelloWorld from '@/components/hello-world'

export default {
  name: 'Home',
  components: {
    HelloI18n,
    HelloTable,
    HelloWorld,
  },
}
</script>
