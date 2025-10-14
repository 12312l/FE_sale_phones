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
          <div>
            <label class="block text-sm font-medium text-gray-700">Họ và tên</label>
            <input v-model="form.hoTen" type="text" placeholder="Nhập họ và tên" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400">
          </div>
          <div class="flex space-x-4">
            <div class="w-1/2">
              <label class="block text-sm font-medium text-gray-700">Ngày sinh</label>
              <input v-model="form.ngaySinh" type="date" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400">
            </div>
            <div class="w-1/2">
              <label class="block text-sm font-medium text-gray-700">Số điện thoại</label>
              <input v-model="form.soDienThoai" type="text" placeholder="Nhập số điện thoại" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400">
            </div>
          </div>
          <div class="flex space-x-4">
            <div class="w-1/2">
              <label class="block text-sm font-medium text-gray-700">Email (không bắt buộc)</label>
              <input v-model="form.email" type="email" placeholder="Nhập email" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400">
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Tạo mật khẩu</label>
            <input v-model="form.matKhau" type="password" placeholder="Mật khẩu" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Nhập lại mật khẩu</label>
            <input v-model="form.nhapLaiMatKhau" type="password" placeholder="Nhập lại mật khẩu" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400">
          </div>

          <p class="text-sm text-gray-500">Bằng việc Đăng ký, bạn đã đồng ý với <a href="#" class="text-blue-600">Điều khoản sử dụng</a> và <a href="#" class="text-blue-600">Chính sách bảo mật</a> của Cellphones.</p>
          <div class="flex justify-between gap-x-6">
             <button type="button" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg w-full flex items-center justify-center gap-2">
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
  import { ref } from 'vue';
  
  const form = ref({
    hoTen: '',
    ngaySinh: '',
    soDienThoai: '',
    email: '',
    matKhau: '',
    nhapLaiMatKhau: '',
    dongY: false,
    tinhTrang: ''
  });
  
  const submitForm = () => {
    if (form.value.matKhau !== form.value.nhapLaiMatKhau) {
      alert('Mật khẩu không khớp!');
      return;
    }
    console.log('Form submitted:', form.value);
    alert('Đăng ký thành công!');
  };
  </script>
  