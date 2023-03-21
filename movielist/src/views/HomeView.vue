<template>
  <router-view />
  <Menu />
  <Friends />

  <body>
    <div id="home">
      <h1>Popular Movies from TMDB</h1>
      <div class="films" id="movie-container"></div>

      <h1>Upcoming Movies from TMDB</h1>
      <div class="films" id="upcoming-container"></div>
    </div>
  </body>
</template>
<style>
@import '../assets/scss/home.scss'
</style>

<script>
import Menu from '../components/MenuView.vue'
import Friends from '../components/FriendsView.vue'
import { displayPopularMovies, displayUpcomingMovies } from '@/tmdbAPI'
export default {
  components: {
    Menu,
    Friends
  },
  mounted() {
    displayPopularMovies()
    displayUpcomingMovies()
  }
}
</script>
