<template>
    <div class="w-full">
      <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h1 class="text-3xl font-bold text-red-600 text-center mb-4">Đăng ký thành viên TDMEMBER</h1>
        <div class="flex justify-center mb-4">
          <img src="https://via.placeholder.com/100" alt="Logo" class="w-20 h-20">
        </div>
        <p class="text-center text-gray-600 mb-4">Đăng ký bằng tài khoản mạng xã hội</p>
        <div class="flex justify-center mb-6 space-x-4">
          <button class="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-lg">
            <img src="https://www.google.com/favicon.ico" alt="Google" class="w-5 h-5 mr-2"> Google
          </button>
          <button class="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-lg">
            <img src="https://cdn-static.smember.com.vn/_next/static/media/logo-zalo.120d889f.svg" alt="Zalo" class="w-5 h-5 mr-2"> Zalo
          </button>
        </div>
        <h2 class="text-xl font-semibold mb-4">Thông tin cá nhân</h2>
        <div class="space-y-4">
          <div class="flex space-x-4">
            <div class="w-1/2">
              <label class="block text-sm font-medium text-gray-700">Tên đăng nhập</label>
              <input v-model="form.username" type="email" placeholder="Nhập tên đăng nhập" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400">
            </div>
            <div class="w-1/2">
              <label class="block text-sm font-medium text-gray-700">Họ và tên</label>
              <input v-model="form.fullName" type="text" placeholder="Nhập họ và tên" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400">
            </div>
          </div>
          <div class="flex space-x-4">
            <div class="w-1/2">
              <label class="block text-sm font-medium text-gray-700">Ngày sinh</label>
              <DatePicker
                v-model:value="form.dob"
                format="DD/MM/YYYY"
                placeholder="Chọn ngày sinh"
                :clearable="false"
                :disabled-date="(date) => date > new Date()"
                input-class="!w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 hover:border-red-300 transition-colors"
                popup-class="shadow-lg border border-gray-200 rounded-lg"
                :show-week-numbers="false"
                :show-time="false"
                locale="vi"
                style="width: 100%"
                @change="(date) => { form.dob = date; console.log('Date selected:', date) }"
              />
            </div>
            <div class="w-1/2">
              <label class="block text-sm font-medium text-gray-700">Số điện thoại</label>
              <input v-model="form.phone" type="text" placeholder="Nhập số điện thoại" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400">
            </div>
          </div>
          <div class="flex space-x-4">
            <div class="w-full">
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <input v-model="form.email" type="email" placeholder="Nhập email" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400">
            </div>
          </div>

          <div class="flex space-x-4">
              <div class="w-1/2">
                <label class="block text-sm font-medium text-gray-700">Tạo mật khẩu</label>
                <input v-model="form.password" type="password" placeholder="Mật khẩu" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400">
              </div>
              <div class="w-1/2">
                <label class="block text-sm font-medium text-gray-700">Nhập lại mật khẩu</label>
                <input v-model="form.againPassword" type="password" placeholder="Nhập lại mật khẩu" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400">
              </div>
          </div>

          <p class="text-sm text-gray-500">Bằng việc Đăng ký, bạn đã đồng ý với <a href="#" class="text-blue-600">Điều khoản sử dụng</a> và <a href="#" class="text-blue-600">Chính sách bảo mật</a> của Cellphones.</p>
          <div class="flex justify-between gap-x-6">
             <button type="button" @click="goToLogin" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg w-full flex items-center justify-center gap-2">
                 <TaFilledArrowBigLeftLine />
                 Quay lại đăng nhập
             </button>
            <button @click="submitForm" class="bg-red-600 text-white px-4 py-2 rounded-lg w-full">Hoàn tất đăng ký</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import DatePicker from 'vue-datepicker-next'
  import 'vue-datepicker-next/index.css'
  import { ref } from 'vue'
  import { useToast } from 'vue-toastification'
  import { useRouter } from 'vue-router'
   import { useAuth } from '@/composables/userAuth'
   const { register, loading, error } = useAuth()
  const toast = useToast()
  const router = useRouter()
  
  // Function để quay lại trang đăng nhập
  const goToLogin = () => {
    router.push('/login')
  }
  
  // Function để format ngày sinh
  const formatDate = (date) => {
    if (!date) return ''
    const d = new Date(date)
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()
    return `${day}/${month}/${year}`
  }
  
  const form = ref({
    username: '',
    fullName: '',
    dob: '',
    phone: '',
    email: '',
    password: '',
    againPassword: '',
  });
  
  const submitForm = async () => {
    // Kiểm tra các trường bắt buộc
    const requiredFields = [
      { key: 'username', label: 'Tên đăng nhập' },
      { key: 'fullName', label: 'Họ và tên' },
      { key: 'dob', label: 'Ngày sinh' },
      { key: 'phone', label: 'Số điện thoại' },
      { key: 'email', label: 'Email' },
      { key: 'password', label: 'Mật khẩu' },
      { key: 'againPassword', label: 'Nhập lại mật khẩu' }
    ]

    for (const field of requiredFields) {
      if (!form.value[field.key] || form.value[field.key].toString().trim() === '') {
        toast.error(`${field.label} không được để trống!`, {
          position: 'top-right',
          timeout: 3000
        })
        return
      }
    }

    // Kiểm tra mật khẩu khớp
    if (form.value.password !== form.value.againPassword) {
      toast.error('Mật khẩu không khớp!', {
        position: 'top-right',
        timeout: 3000
      })
      return
    }

    // Kiểm tra độ dài mật khẩu
    if (form.value.password.length < 8) {
      toast.error('Mật khẩu phải có ít nhất 8 ký tự!', {
        position: 'top-right',
        timeout: 3000
      })
      return
    }

    // Kiểm tra email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.value.email)) {
      toast.error('Email không hợp lệ!', {
        position: 'top-right',
        timeout: 3000
      })
      return
    }

     await register(form.value)
     
     // Nếu có lỗi, hiển thị toast
     if (error.value) {
       toast.error(error.value, {
         position: 'top-right',
         timeout: 3000
       })
     } else {
       // Đăng ký thành công
       toast.success('Đăng ký thành công! Vui lòng đăng nhập.', {
         position: 'top-right',
         timeout: 3000
       })
     }
  }
  </script>
  