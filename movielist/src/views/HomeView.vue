<template>
  <router-view />
  <Menu />
  <Friends />

  <body>
    <div id="home">
      <h1>Popular Movies</h1>
      <div class="films" id="movie-container">
      </div>
    </div>

    <h1>Upcoming Movies</h1>
    <div class="films">
      <div class="card"><img src='../assets/img/creed3.jpg'>
      </div>

      <div class="card"><img src='../assets/img/megan.jpg'>
      </div>

      <div class="card"><img src='../assets/img/asterixEmpire.jpg'>
      </div>

      <div class="card"><img src='../assets/img/tirailleurs.jpg'>
      </div>

      <div class="card"><img src='../assets/img/buzz.jpg'>
      </div>

      <div class="card"><img src='../assets/img/topgun.jpg'>
      </div>

      <div class="card"><img src='../assets/img/avatar.jpg'>
      </div>

      <div class="card"><img src='../assets/img/chatpotte.jpg'>
      </div>

      <div class="card"><img src='../assets/img/antmanQ.jpg'>
      </div>
    </div>

    <h1>Continue watching</h1>
    <div class="films">
      <div class="card"><img src='../assets/img/creed3.jpg'>
      </div>

      <div class="card"><img src='../assets/img/megan.jpg'>
      </div>

      <div class="card"><img src='../assets/img/asterixEmpire.jpg'>
      </div>

      <div class="card"><img src='../assets/img/tirailleurs.jpg'>
      </div>

      <div class="card"><img src='../assets/img/buzz.jpg'>
      </div>

      <div class="card"><img src='../assets/img/topgun.jpg'>
      </div>

      <div class="card"><img src='../assets/img/avatar.jpg'>
      </div>

      <div class="card"><img src='../assets/img/chatpotte.jpg'>
      </div>

      <div class="card"><img src='../assets/img/antmanQ.jpg'>
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
import { displayPopularMovies } from '@/tmdbAPI'
export default {
  components: {
    Menu,
    Friends
  },
  mounted() {
    displayPopularMovies()
  }
}
</script>
