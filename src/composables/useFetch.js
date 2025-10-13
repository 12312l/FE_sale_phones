import { ref } from 'vue'
import api from './api'

export function useFetch() {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const fetchData = async (url) => {
    loading.value = true
    try {
      const res = await api.get(url)
      data.value = res.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, fetchData }
}
