<template>
  <router-view />
  <Menu />
  <Friends />
    <body>
      <div id="discovery">
        <h1>All Movies</h1>
        <div class="films" id="scrolling-wrapper" v-for="(film) in films" :key="film.id">
          <div class="card"><img class="flou" :src="film.poster_path">
            <div class="genre">
              <h3>{{film.title}}</h3>
            </div>
          </div>
        </div>
      </div>
    </body>
  </template>
  <style>
    @import '../assets/scss/discovery.scss'
  </style>

<script>
import Menu from '../components/MenuView.vue'
import Friends from '../components/FriendsView.vue'
import MovieDataService from '@/services/MovieDataService'
export default {
  components: {
    Menu,
    Friends
  },
  mounted () {
    MovieDataService.getAll()
      .then(response => {
        this.films = response.data
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>
