// src/composables/useAuth.js
import { ref } from 'vue'
import { authService } from '@/services/authService'
import router from '@/router'
import { useUserStore } from '@/store/authStore'

export function useAuth() {
  const loading = ref(false)
  const error = ref(null)
  const userStore = useUserStore()

  const login = async (credentials) => {
    loading.value = true
    error.value = null
    try {
      const res = await authService.login(credentials)
      console.log('Token:', res.data?.data?.token)
      console.log('User:', res.data?.data?.user)
      if (res.data?.data?.token) {
        // Decode JWT token để lấy thông tin user
        const tokenPayload = JSON.parse(atob(res.data.data.token.split('.')[1]))
        userStore.setUser({ 
          username: tokenPayload.username,
          userId: tokenPayload.user_id,
          scope: tokenPayload.scope
        })

        userStore.setToken(res.data.data.token)

        // Điều hướng theo scope
        console.log('Scope sau khi login:', tokenPayload.scope)
        if (tokenPayload.scope === 'ADMIN') {
          router.replace('/admin')
        } else {
          router.replace('/user')
        }
      } else {
        console.error('Không có token trong response')
        error.value = 'Server không trả về token'
      }
    } catch (err) {
      console.error('Lỗi login:', err)
      error.value = err.response?.data?.data?.message || 'Đăng nhập thất bại'
    } finally {
      loading.value = false
    }
  }

  const register = async (formData) => {
    loading.value = true
    error.value = null
    try {
      const res = await authService.register(formData)
      console.log('Register response:', res)
      
      // API đăng ký thành công, chuyển về trang login
      router.replace('/login')
      
    } catch (err) {
      console.error('Lỗi register:', err)
      error.value = err.response?.data?.data?.message || 'Đăng ký thất bại'
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    try {
      await authService.logout()
    } catch (_) {
      // ignore API failure; proceed to clear locally
    }
    userStore.clearUser()
    router.replace('/login')
  }

  return { login, register, logout, loading, error }
}
