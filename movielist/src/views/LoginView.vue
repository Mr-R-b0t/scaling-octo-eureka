<template>
<div>
  <img alt="Vue logo" src="../assets/logo.png" width="40" id="logo" class="center" />
  <h1 class="text-center">The <span class="violet-text">MovieList</span></h1>
  <div class="form">
    <label for="">Email</label><br />
    <input type="text" class="input center" v-model="user.email"><br />
    <label for="">Password</label><br />
    <input  type="password" class="input center" v-model="user.password"><br />
    <a href="#register" id="link-login-register">Create an account</a>
    <a @click="login"><input type="button" value="Connexion" class="button center"></a>
  </div>
</div>
</template>

<style>
@import '../assets/scss/login-register.scss';
</style>

<script>
import UserDataService from '@/services/UserDataService'
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
      const data = {
        email: this.user.email,
        password: this.user.password
      }
      const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      if (this.user.email === '' || this.user.password === '') return alert('Please fill in all fields')
      if (this.user.email.match(mailformat) === null) {
        return alert('Please enter a valid email address')
      } else {
        UserDataService.postLogin(data)
          .then((response) => {
            // localStorage.setItem('token', response.data.token)
            // this.$store.dispatch('user', response.data.user)
            this.$router.push({ name: 'home' })
          })
          .catch(error => {
            // Handle the error here
            alert(error.response.message)
            // console.log(error.response.data.body.message)
          })
      }
    }
  }
}
</script>
