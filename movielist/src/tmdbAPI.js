const axios = require('axios')
<<<<<<< HEAD

function callback(data) {
  console.log(data)
}
=======
>>>>>>> b37ef8f66860b83343c994d947b9fd6abfc7ec65

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

<<<<<<< HEAD
  getPopularMovies().then(filmPage => {
    filmPage.forEach(filmList => {
      const [id, title, posterUrl] = filmList
      const movieHtml = movieTemplate
        .replace('{id}', id)
        .replace('{title}', title)
        .replace('{posterUrl}', posterUrl)

=======
  getPopularMovies().then((filmPage) => {
    filmPage.forEach((filmList) => {
      const [id, title, posterUrl] = filmList
      const movieHtml = `
        <div class="card">
          <img src="${posterUrl}" alt=${id}/>
          <h4>${title}</h4>
        </div>
      `
>>>>>>> b37ef8f66860b83343c994d947b9fd6abfc7ec65
      movieContainer.innerHTML += movieHtml
    })
  })
}

function getFilmPage(id) {
  axios.get(' https://api.themoviedb.org/3/movie/' + id + '?api_key=66188e8432a52693bcb7abc97edbda86')
    .then(res => {
      const film = res.data

<<<<<<< HEAD
      var name = film.title
      var poster = 'https://image.tmdb.org/t/p/original' + film.poster_path
=======
      const name = film.title
      const poster = 'https://image.tmdb.org/t/p/original' + film.poster_path
>>>>>>> b37ef8f66860b83343c994d947b9fd6abfc7ec65

      const underTitle = film.runtime + 'mn - ' + film.release_date + ' - ' + film.production_countries[0].name

<<<<<<< HEAD
      var underTitle = film.runtime + 'mn - ' + film.release_date + ' - ' + film.production_countries[0].name

      var rating = film.vote_average + '/10 - ' + film.vote_count + ' votes'

      var description = film.overview

      var status = 'Status : ' + film.status
      var genres = 'Genre : ' + film.genres[0].name
      var budget = 'Budget : ' + film.budget + '$'
      var revenue = 'Revenue : ' + film.revenue + '$'
      var language = 'Language : ' + film.original_language

=======
      const rating = film.vote_average + '/10 - ' + film.vote_count + ' votes'

      const description = film.overview

      const status = 'Status : ' + film.status
      const genres = 'Genre : ' + film.genres[0].name
      const budget = 'Budget : ' + film.budget + '$'
      const revenue = 'Revenue : ' + film.revenue + '$'
      const language = 'Language : ' + film.original_language

>>>>>>> b37ef8f66860b83343c994d947b9fd6abfc7ec65
      return [name, poster, underTitle, rating, description, status, genres, budget, revenue, language]
    })
    .catch(err => {
      console.log('Error: ', err.message)
    })
}

function getFilmCard(id) {
  axios.get(' https://api.themoviedb.org/3/movie/' + id + '?api_key=66188e8432a52693bcb7abc97edbda86')
    .then(res => {
      const film = res.data
<<<<<<< HEAD
      var poster = 'https://image.tmdb.org/t/p/original' + film.poster_path
=======
      const poster = 'https://image.tmdb.org/t/p/original' + film.poster_path
>>>>>>> b37ef8f66860b83343c994d947b9fd6abfc7ec65

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
<<<<<<< HEAD
      var poster = 'https://image.tmdb.org/t/p/original' + film.results.CA.flatrate[0].logo_path
=======
      const poster = 'https://image.tmdb.org/t/p/original' + film.results.CA.flatrate[0].logo_path
>>>>>>> b37ef8f66860b83343c994d947b9fd6abfc7ec65
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
<<<<<<< HEAD
  getProvider
=======
  getProvider,
  displayPopularMovies
>>>>>>> b37ef8f66860b83343c994d947b9fd6abfc7ec65
}
