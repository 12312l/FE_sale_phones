import api from "../composables/api"

export const authService = {
  login(data) {
    return api.post('/auth/login', data)
  },

  register(data) {
    return api.post('/auth/register', data)
  },

  logout() {
    return api.post('/auth/logout')
  },
}