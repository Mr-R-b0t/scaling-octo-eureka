import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'apiClient://localhost:8080/api',
  withCredentials: true,
  headers:
  {
    'Content-type': 'application/json'
  }
})

export default {

  getAll() {
    return apiClient.get('/movies')
  },

  get(id) {
    return apiClient.get(`/movies/${id}`)
  },

  create(data) {
    return apiClient.post('/movies', data)
  },

  update(id, data) {
    return apiClient.put(`/movies/${id}`, data)
  },

  delete(id) {
    return apiClient.delete(`/movies/${id}`)
  },

  deleteAll() {
    return apiClient.delete('/movies')
  },

  findByTitle(title) {
    return apiClient.get(`/movies?title=${title}`)
  }
}
