<template>
  <img alt="Vue logo" src="../assets/logo.png" width="40" id="logo" class="center" />
  <h1 class="text-center">Welcome to The <span class="violet-text"> MovieList</span></h1>
  <div class="form">
    <label for="">Name</label><br />
      <input type="text" class="input center" v-model="user.name"><br />
      <label for="">Lastname</label><br />
      <input type="text" class="input center" v-model="user.lastname"><br />
    <label for="">Email</label><br />
    <input type="text" class="input center" v-model="user.email"><br />
    <label for="">Password</label><br />
    <input type="user.password" class="input center" v-model="user.password"><br />
    <label for="">Confirm password</label><br />
    <input type="password" class="input center" v-model="user.confirmpassword"><br />
    <a href="#" id="link-login-register">Sign in</a>
    <button @click="register" class="button center">Connexion</button>
  </div>
</template>

<script>
import UserDataService from '@/services/UserDataService'
export default {
  name: 'RegisterView',
  data() {
    return {
      user: {
        name: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: ''
      }
    }
  },
  methods: {
    checkPassword() {
      if (this.user.password === this.user.confirmpassword) {
        return alert('The passwords do not match')
      }
    },
    register() {
      const data = {
        name: this.user.name,
        lastname: this.user.lastname,
        email: this.user.email,
        password: this.user.password

      }
      const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      if (this.user.email === '' || this.user.password === '' || this.user.confirmpassword === '') return alert('Please fill in all fields')
      if (this.user.email.match(mailformat) === null) {
        return alert('Please enter a valid email address')
      } else {
        UserDataService.create(data)
          .then((res) => {
            console.log(res.data)
            this.$store.commit('setUser', res.data)
            // localStorage.setItem('token', response.data)
            // this.$router.push('/home')
            alert('Your account has been created')
            console.log(this.user)
          })
          .catch((e) => {
            if (e.response.status === 403) {
              alert(e.response.data.message)
            }
            if (e.response.status === 401) {
              alert(e.response.data.message)
            }
            if (e.response.status === 402) {
              alert(e.response.data.message)
            }
            console.log(e)
          })
      }
    }
  }
}
</script>
