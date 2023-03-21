const axios = require('axios')

function callback(data) {
  console.log(data)
}

function getPopularMovies() {
  return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=66188e8432a52693bcb7abc97edbda86&language=en-US&page=1')
    .then(res => {
      const films = res.data
      const filmPage = []

      for (let i = 0; i < 10; i++) {
        const filmList = [
          films.results[i].id,
          films.results[i].title,
          'https://image.tmdb.org/t/p/original' + films.results[i].poster_path
        ]
        filmPage.push(filmList)
      }

      return filmPage
    })
    .catch(err => {
      console.log('Error: ', err.message)
    })
}

function displayPopularMovies() {
  const movieContainer = document.getElementById('movie-container')

  getPopularMovies().then((filmPage) => {
    filmPage.forEach((filmList) => {
      const [id, title, posterUrl] = filmList
      const movieHtml = `
        <div class="card">
          <img src="${posterUrl}" alt=${id}/>
          <h4>${title}</h4>
        </div>
      `
      movieContainer.innerHTML += movieHtml
    })
  })
}

function getFilmPage(id) {
  axios.get(' https://api.themoviedb.org/3/movie/' + id + '?api_key=66188e8432a52693bcb7abc97edbda86')
    .then(res => {
      const film = res.data

      var name = film.title
      var poster = 'https://image.tmdb.org/t/p/original' + film.poster_path

      const underTitle = film.runtime + 'mn - ' + film.release_date + ' - ' + film.production_countries[0].name

      var underTitle = film.runtime + 'mn - ' + film.release_date + ' - ' + film.production_countries[0].name

      var rating = film.vote_average + '/10 - ' + film.vote_count + ' votes'

      var description = film.overview

      var status = 'Status : ' + film.status
      var genres = 'Genre : ' + film.genres[0].name
      var budget = 'Budget : ' + film.budget + '$'
      var revenue = 'Revenue : ' + film.revenue + '$'
      var language = 'Language : ' + film.original_language

      console.log(name + '\n' + poster + '\n' + underTitle + '\n' + rating + '\n' + description + '\n' + status + '\n' + genres + '\n' + budget + '\n' + revenue + '\n' + language)

      return [name, poster, underTitle, rating, description, status, genres, budget, revenue, language]
    })
    .catch(err => {
      console.log('Error: ', err.message)
    })
}

getFilmPage(934433)

function getFilmCard(id) {
  axios.get(' https://api.themoviedb.org/3/movie/' + id + '?api_key=66188e8432a52693bcb7abc97edbda86')
    .then(res => {
      const film = res.data
      var poster = 'https://image.tmdb.org/t/p/original' + film.poster_path

      return [film.name, poster]
    })
    .catch(err => {
      console.log('Error: ', err.message)
    })
}

function getProvider(id) {
  axios.get(' https://api.themoviedb.org/3/movie/' + id + '/watch/providers?api_key=66188e8432a52693bcb7abc97edbda86')
    .then(res => {
      const film = res.data
      var poster = 'https://image.tmdb.org/t/p/original' + film.results.CA.flatrate[0].logo_path
      return [film.results.CA.flatrate[0].name, poster]
    })
    .catch(err => {
      console.log('Error: ', err.message)
    })
}

module.exports = {
  getPopularMovies,
  getFilmPage,
  getFilmCard,
  getProvider,
  displayPopularMovies
}
