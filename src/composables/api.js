import axios from 'axios'

// Lấy baseURL từ file .env
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// ✅ Thêm interceptor để xử lý token hoặc lỗi (tuỳ chọn)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn('Hết hạn phiên đăng nhập!')
    }
    return Promise.reject(error)
  }
)

export default api
