import http from '../http-common'

class MovieListDataService {
  getAll () {
    return http.get('/movielists')
  }

  get (id) {
    return http.get(`/movielists/${id}`)
  }

  create (data) {
    return http.post('/movielists', data)
  }

  update (id, data) {
    return http.put(`/movielists/${id}`, data)
  }

  delete (id) {
    return http.delete(`/movielists/${id}`)
  }

  deleteAll () {
    return http.delete('/movielists')
  }

  findByTitle (title) {
    return http.get(`/movielists?title=${title}`)
  }
}
export default new MovieListDataService()
