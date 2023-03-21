<template>
  <router-view />
</template>
<script>
import MovieDataService from './services/MovieDataService'
export default {
  name: 'App',
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
