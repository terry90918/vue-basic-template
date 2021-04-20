<template>
  <header class="v-header">
    header
    <router-link to="/home">home</router-link> |
    <router-link to="/about">about</router-link> |
    <router-link v-if="!isLogin" to="/login">login</router-link>
    <button v-else @click.prevent="logout">logout</button>
  </header>
</template>

<script>
export default {
  name: 'VHeader',
  computed: {
    isLogin() {
      return Boolean(this.$store.getters.token)
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
  },
}
</script>
