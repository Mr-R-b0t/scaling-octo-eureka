<template>
  <router-view />
  <Menu />
  <Friends />

  <body>
    <div id="discovery">
      <h1>All Movies</h1>
      <div class="films">
        <div v-for="(film) in films" :key="film.id_movie">
          <div class="card"><img class="flou" :src="film.poster">
            <div class="genre">
              <h3>{{ film.title }}</h3>
            </div>
          </div>
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
import MovieDataService from '@/services/MovieDataService'
export default {
  components: {
    Menu,
    Friends
  },
  data() {
    return {
      films: {
        id_movie: '',
        title: '',
        poster: '',
        overview: '',
        release_date: '',
        genre: '',
        runtime: '',
        vote_average: '',
        vote_count: ''
      }
    }
  },
  mounted() {
    MovieDataService.getAll()
      .then(response => {
        this.films = response.data
        console.log(response.data)
        response.data.forEach(film => {
          this.films.id_movie = film.id_movie
          this.films.title = film.title
          this.films.poster_path = film.poster
          this.films.overview = film.overview
          this.films.release_date = film.release_date
          this.films.genre = film.genre
          this.films.runtime = film.runtime
          this.films.vote_average = film.vote_average
          this.films.vote_count = film.vote_count
        })
        console.log(this.films)
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>
