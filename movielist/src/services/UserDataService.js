import http from '../http-common'

export class UserDataService {
  getAll() {
    return http.get('/users')
  }

  get(id) {
    return http.get(`/users/${id}`)
  }

  create(data) {
    return http.post('/users', data)
  }

  update(id, data) {
    return http.put(`/users/${id}`, data)
  }

  delete(id) {
    return http.delete(`/users/${id}`)
  }

  login(username, password) {
    return http.post('/users/login', { username, password })
  }

  deleteAll() {
    return http.delete('/users')
  }

  findByUsername(username) {
    return http.get(`/users?username=${username}`)
  }
}
