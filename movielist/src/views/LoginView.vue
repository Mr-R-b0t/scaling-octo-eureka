<template>
<div>
  <img alt="Vue logo" src="../assets/logo.png" width="40" id="logo" class="center" />
  <h1 class="text-center">The <span class="violet-text">MovieList</span></h1>
  <form action="/action_page.php" class="form">
    <label for="">Email</label><br />
    <input type="text" class="input center" v-model="user.email"><br />
    <label for="">Password</label><br />
    <input  type="password" class="input center" v-model="user.password"><br />
    <a href="#register" id="link-login-register">Create an account</a>
    <a @click="login"><input type="button" value="Connexion" class="button center"></a>
  </form>
</div>
</template>

<style>
@import '../assets/scss/login-register.scss';
</style>

<script>
import { UserDataService } from '../services/UserDataService'
export default {
  name: 'LoginView',
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      if (this.user.email === '' || this.user.password === '') return alert('Please fill in all fields')
      if (this.user.email.match(mailformat) === null) {
        return alert('Please enter a valid email address')
      } else {
        UserDataService.login(this.user.email, this.user.password)
          .then((response) => {
            console.log(response.data)
            this.$store.commit('setUser', response.data)
            // localStorage.setItem('token', response.data.user)
            this.$router.push('/home')
          })
          .catch((e) => {
            console.log(e)
          })
      }
    }
  }
}
</script>
