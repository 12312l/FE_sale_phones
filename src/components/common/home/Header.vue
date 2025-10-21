<template>
  <header class="bg-gray-50 border-b border-gray-200">
    <div class="w-[70%] mx-auto">
        <!-- Main Header -->
        <div class="flex items-center justify-between h-16">
          <!-- Logo Section -->
          <div class="flex items-center space-x-3">
            <div class="flex items-center">
              <!-- Logo H -->
              <div class="flex">
                <div class="w-6 h-8 bg-teal-700 rounded-l-md"></div>
                <div class="w-6 h-8 bg-teal-500 rounded-r-md"></div>
              </div>
              <span class="ml-3 text-xl font-bold text-teal-500">DUYMOBILE.COM</span>
            </div>
          </div>
          
          <div>
            <Category />
          </div>

          <!-- Search Bar Section -->
          <div class="flex-1 max-w-2xl mx-8">
            <div class="relative">
              <div class="flex bg-white rounded-lg shadow-sm border border-gray-200">
                <input
                  type="text"
                  placeholder="Hôm nay bạn muốn tìm kiếm gì?"
                  class="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none rounded-l-lg"
                />
                <button class="flex items-center px-6 py-3 bg-teal-500 text-white rounded-r-lg hover:bg-teal-600 transition-colors">
                  <BxSearch class="w-5 h-5 mr-1"/>
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>

        <!-- Right Section -->
        <div class="flex items-center space-x-6">
          <!-- Find Store -->
          <button class="flex items-center text-teal-500 hover:text-teal-600 transition-colors">
            <AkLocation class="w-5 h-5"/>
            <span class="text-sm font-medium">Tìm siêu thị</span>
          </button>

          <!-- Account -->
          <button 
            @click="handleAccountClick"
            class="flex items-center text-teal-500 hover:text-teal-600 transition-colors gap-1"
          >
            <CaUserAvatarFilled class="w5 h-5"/>
            <span class="text-sm font-medium">
              {{ userStore.user?.username || 'Tài khoản' }}
            </span>
          </button>
          <!-- Shopping Cart -->
          <button class="relative flex items-center text-gray-700 hover:text-gray-900 transition-colors">
            <CoCart class="w-5 h-5"/>
            <!-- Cart Badge -->
            <span class="absolute -top-3.5 -right-3.5 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
              0
            </span>
          </button>
        </div>
      </div>

      <!-- Trending Keywords -->
      <div class="pb-3">
        <div class="flex items-center space-x-4">
          <span class="text-sm font-medium text-teal-500">Từ khóa xu hướng:</span>
          <div class="flex items-center space-x-3">
            <span 
              v-for="keyword in trendingKeywords" 
              :key="keyword"
              class="text-sm text-gray-500 hover:text-teal-500 cursor-pointer transition-colors"
            >
              {{ keyword }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import Category from './Category.vue';

// Data cho từ khóa xu hướng
const trendingKeywords = ref([
  'Galaxy Fold7',
  'Xiaomi 15T', 
  'iPhone 17',
  'iPhone Air'
])

// Có thể thêm logic xử lý search, cart, account ở đây

// Import router và store
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/authStore'

const router = useRouter()
const userStore = useUserStore()

// Function xử lý click nút tài khoản
const handleAccountClick = () => {
  const token = userStore.token
  const user = userStore.user
  
  console.log('Token:', token)
  console.log('User:', user)
  
  if (!token) {
    // Chưa đăng nhập → chuyển đến trang login
    console.log('No token, redirecting to login')
    router.push('/login')
    return
  }
  
  // Đã đăng nhập → chuyển đến trang InfoUser
  console.log('Has token, redirecting to info-user')
  router.push('/info-user')
}
</script>

<style scoped>
/* Custom styles nếu cần */
</style>
