<template>
  <div>
    <form>
      <label for="username">username</label>
      <input
        id="username"
        v-model="loginForm.username"
        type="text"
        name="username"
      />
      <label for="password">password</label>
      <input
        id="password"
        v-model="loginForm.password"
        type="password"
        name="password"
      />
      <button @click.prevent="login">login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '111111',
      },
    }
  },
  methods: {
    async login() {
      this.$store
        .dispatch('user/login', this.loginForm)
        .then(() => {
          this.$router.push({ path: this.redirect || '/' })
        })
        .catch((err) => {
          console.error(err)
        })
    },
  },
}
</script>
