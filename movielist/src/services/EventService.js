import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const API_KEY = 'your_api_key_here'

export default {
  getMovies() {
    return apiClient.get('/movie/popular?api_key=' + API_KEY + '&language=fr-CA')
  },
  getMovie(id) {
    return apiClient.get('/movie/' + id + '?api_key=' + API_KEY + '&language=fr-CA')
  }
}
