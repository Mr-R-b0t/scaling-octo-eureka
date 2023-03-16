<template>
    <router-view />
    <Menu />
    <Friends />
    <body>
      <div id="home">
        <h1>Movie lists</h1>
        <div class="films" id="scrolling-wrapper">
          <div class="card"><img src='../assets/img/avatar.jpg'>
            <h4>Nom liste</h4>
          </div>
          <div class="card"><img src='../assets/img/antmanQ.jpg'>
            <h4>Nom liste</h4>
          </div>
          <div class="card"><img src='../assets/img/chatpotte.jpg'>
            <h4>Nom liste</h4>
          </div>
          <div class="card"><img src='../assets/img/asterixEmpire.jpg'>
            <h4>Nom liste</h4>
          </div>
          <div class="card"><img src='../assets/img/creed3.jpg'>
            <h4>Nom liste</h4>
          </div>
          <div class="card"><img src='../assets/img/topgun.jpg'>
          </div>
        </div>
      </div>
    </body>
  </template>
  <style>
  @import '../assets/scss/home.scss'
  </style>

<script>
import Menu from '../components/MenuView.vue'
import Friends from '../components/FriendsView.vue'
export default {
  components: {
    Menu,
    Friends
  }
}
</script>
