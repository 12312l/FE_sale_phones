<template>
    <div class="flex h-screen w-screen bg-[#f8f8f8] text-gray-800">
      <!-- LEFT SIDE -->
      <div class="hidden lg:flex w-1/2 flex-col justify-center items-center bg-white p-12">
        <div class="max-w-lg">
          <!-- Logo -->
          <div class="flex items-center justify-center gap-6 mb-8">
            <div class="bg-red-600 text-white font-semibold px-4 py-2 rounded">
              DT_STORE
            </div>
            <div class="bg-red-600 text-white font-semibold px-4 py-2 rounded">
              dienthoaivui
            </div>
          </div>
  
          <h2 class="text-3xl font-bold mb-2 leading-snug">
            Nhập hội khách hàng thành viên
            <span class="text-red-600">DTMEMBER</span>
          </h2>
  
          <p class="text-gray-600 mb-8 text-base">
            Để không bỏ lỡ các ưu đãi hấp dẫn từ DT_Store
          </p>
          <div class="border-2 border-red-500 rounded-2xl p-6 bg-white shadow-sm">
  <ul class="space-y-4 text-gray-700 text-[15px]">
    <li class="flex items-start">
      <MdiGift class="text-red-500 w-5 h-5 mt-1" />
      <span class="ml-3">Chiết khấu đến <b>5%</b> khi mua các sản phẩm tại DT_Store</span>
    </li>
    <li class="flex items-start">
      <MdiTruckDeliveryOutline class="text-red-500 w-5 h-5 mt-1" />
      <span class="ml-3">Miễn phí giao hàng cho đơn hàng từ 300.000đ</span>
    </li>
    <li class="flex items-start">
      <MdiTicketPercentOutline class="text-red-500 w-5 h-5 mt-1" />
      <span class="ml-3">Tặng voucher sinh nhật đến 500.000đ</span>
    </li>
    <li class="flex items-start">
      <MdiSwapHorizontal class="text-red-500 w-5 h-5 mt-1" />
      <span class="ml-3">Trợ giá thu cũ lên đời đến 1 triệu</span>
    </li>
    <li class="flex items-start">
      <MdiSchoolOutline class="text-red-500 w-5 h-5 mt-1" />
      <span class="ml-3">Đặc quyền S-Student/S-Teacher ưu đãi thêm 10%</span>
    </li>
  </ul>
</div>

          
        </div>
      </div>
  
      <!-- RIGHT SIDE -->
      <div class="flex flex-1 justify-center items-center bg-white rounded-l-3xl shadow-md">
        <div class="w-full max-w-md mx-4">
          <h2 class="text-center text-3xl font-bold text-red-600 mb-2">Đăng nhập DTMEMBER</h2>
  
          <div>
              <!-- USERNAME -->
              <div class="" >
                <label class="block mb-2 text-sm font-medium">Tên đăng nhập</label>
                <input
                  v-model="username"
                  type="text"
                  placeholder="Nhập tên đăng nhập"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 hover:border-red-400 focus:ring-2 focus:ring-red-400 focus:border-red-400 outline-none text-gray-800"
                />
              </div>
  
            <!-- PASSWORD -->
            <div class="mt-2">
              <label class="block mb-2 text-sm font-medium">Mật khẩu</label>
              <div class="relative">
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Nhập mật khẩu"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 hover:border-red-400 focus:ring-2 focus:ring-red-400 focus:border-red-400 outline-none text-gray-800"
                />
                <button 
                  @click.stop="showPassword = !showPassword" 
                  type="button"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <MdiEyeOutline v-if="!showPassword" class="w-5 h-5" />
                  <MdiEyeOffOutline v-else class="w-5 h-5" />
                </button>
              </div>
            </div>
  
            <!-- Forgot -->
            <div class="text-right mt-2">
              <a href="#" class="text-sm text-blue-600 hover:underline">Quên mật khẩu?</a>
            </div>
  
            <!-- Button -->
            <div class="mt-2">
              <button
                @click="handleLogin"
                class="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Đăng nhập
              </button>
            </div>

            <!-- Divider -->
            <div class="flex items-center justify-center mt-2">
              <div class="w-1/4 h-px bg-gray-300"></div>
              <span class="text-gray-400 text-sm px-3">Hoặc đăng nhập bằng</span>
              <div class="w-1/4 h-px bg-gray-300"></div>
            </div>
  
            <!-- Login via -->
            <div class="flex justify-center gap-6 mt-6 w-full">
              <button class="flex items-center gap-2 px-5 py-2 border rounded-lg hover:bg-gray-100 w-30">
                <DeGoogleOriginal class="text-red-500 w-5 h-5"/> 
                <span class="text-gray-700">Google</span>
              </button>
              <button class="flex items-center justify-center gap-2 px-5 py-2 border rounded-lg hover:bg-gray-100 w-30">
                <!-- <MdiMessageTextOutline class="text-blue-500 w-5 h-5" /> -->
                <SiZalo class="text-blue-500 w-7 h-7"/>
                <!-- <span class="text-gray-700">Zalo</span> -->
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useAuth } from '@/composables/userAuth'
  const username = ref('')
  const password = ref('')
  const showPassword = ref(false)
  const { login, loading, error } = useAuth()

  
  const handleLogin = async () => {
    await login({ username: username.value, password: password.value })
  }
  </script>
  
  <style scoped>
  </style>
  