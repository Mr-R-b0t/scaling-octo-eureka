<template>
    <router-view />
    <Menu />
    <Friends />
    <body>
      <div id="home">
        <h1>Movie lists</h1>
        <div class="films" id="scrolling-wrapper" v-for="(list) in lists" :key="list.id">
          <div class="card"><img class="flou" src="../assets/img/babylon.jpg">
            <div class="genre">
              <h3>{{list.name}}</h3>
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
import MovieListDataService from '@/services/MovieListDataService'
export default {
  components: {
    Menu,
    Friends
  },
  mounted () {
    MovieListDataService.getAll()
      .then(response => {
        this.lists = response.data
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>
