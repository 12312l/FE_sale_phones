<template>
    <div class=" mx-auto bg-white rounded-xl shadow">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">
        Thông tin cá nhân
      </h2>
  
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Họ tên -->
        <div>
          <label class="block font-medium text-gray-700 mb-1">Họ tên:</label>
          <input
            v-model="form.name"
            type="text"
            class="w-full border rounded-lg p-2 focus:ring focus:ring-green-200 outline-none"
          />
        </div>
  
        <!-- Giới tính -->
        <div>
          <label class="block font-medium text-gray-700 mb-1">Giới tính:</label>
          <div class="flex items-center space-x-4">
            <label class="flex items-center space-x-2">
              <input
                type="radio"
                value="Nam"
                v-model="form.gender"
                class="accent-green-600"
              />
              <span>Nam</span>
            </label>
            <label class="flex items-center space-x-2">
              <input
                type="radio"
                value="Nữ"
                v-model="form.gender"
                class="accent-green-600"
              />
              <span>Nữ</span>
            </label>
          </div>
        </div>
  
        <!-- Số điện thoại -->
        <div>
          <label class="block font-medium text-gray-700 mb-1">Điện thoại:</label>
          <input
            v-model="form.phone"
            type="text"
            class="w-full border rounded-lg p-2 focus:ring focus:ring-green-200 outline-none"
          />
        </div>
  
        <!-- Email -->
        <div>
          <label class="block font-medium text-gray-700 mb-1">Email:</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="Email *"
            readonly
            class="w-full border rounded-lg p-2 bg-gray-50 text-gray-500 cursor-not-allowed"
          />
        </div>
  
      <!-- Ngày tháng năm sinh -->
      <div class="w-full">
        <label class="block font-medium text-gray-700 mb-1">Ngày tháng năm sinh:</label>
        <DatePicker
          v-model:value="form.dob"
          format="DD/MM/YYYY"
          value-type="format"
          placeholder="Chọn ngày sinh"
          :editable="true"
          input-class="!w-full border rounded-lg p-2 focus:ring focus:ring-green-200 outline-none"
          @change="(date) => { form.dob = date }"
        />
      </div>
  
        <!-- Địa chỉ -->
        <div>
          <label class="block font-medium text-gray-700 mb-1">Địa chỉ:</label>
          <input
            v-model="form.address"
            type="text"
            placeholder="Địa chỉ *"
            class="w-full border rounded-lg p-2 focus:ring focus:ring-green-200 outline-none"
          />
        </div>
  
        <!-- Tỉnh / Thành phố -->
        <div>
          <label class="block font-medium text-gray-700 mb-1">Tỉnh/Thành phố:</label>
          <select
            v-model="form.city"
            class="w-full border rounded-lg p-2 focus:ring focus:ring-green-200 outline-none"
          >
            <option>Hà Nội</option>
            <option>Hồ Chí Minh</option>
            <option>Đà Nẵng</option>
            <option>Hải Phòng</option>
          </select>
        </div>
  
        <!-- Xã / Phường -->
        <div>
          <label class="block font-medium text-gray-700 mb-1">Xã/Phường:</label>
          <select
            v-model="form.ward"
            class="w-full border rounded-lg p-2 focus:ring focus:ring-green-200 outline-none"
          >
            <option>Xã Sóc Sơn</option>
            <option>Xã Nam Sơn</option>
            <option>Xã Tiên Dược</option>
          </select>
        </div>
  
        <!-- Ghi chú -->
        <p class="text-gray-500 text-sm">
          Để trống nếu không muốn thay đổi mật khẩu.
        </p>
  
        <!-- Mật khẩu mới -->
        <div>
          <label class="block font-medium text-gray-700 mb-1">Mật khẩu mới:</label>
          <input
            v-model="form.newPassword"
            type="password"
            placeholder="Mật khẩu mới"
            class="w-full border rounded-lg p-2 focus:ring focus:ring-green-200 outline-none"
          />
        </div>
  
        <!-- Nhập lại mật khẩu -->
        <div>
          <label class="block font-medium text-gray-700 mb-1">Nhập lại mật khẩu mới:</label>
          <input
            v-model="form.confirmPassword"
            type="password"
            placeholder="Nhập lại mật khẩu mới"
            class="w-full border rounded-lg p-2 focus:ring focus:ring-green-200 outline-none"
          />
        </div>
  
        <!-- Nút xác nhận -->
        <div class="pt-4">
          <button
            type="submit"
            class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          >
            XÁC NHẬN
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive } from "vue";
  import DatePicker from "vue-datepicker-next";
  import "vue-datepicker-next/index.css";
  const form = reactive({
    name: "Đào Trọng Duy",
    gender: "Nam",
    phone: "0973049052",
    email: "adsfgasd@gmail.com",
    dob: "17/08/2004",
    address: "",
    city: "Hà Nội",
    ward: "Xã Sóc Sơn",
    newPassword: "",
    confirmPassword: "",
  });
  
  const handleSubmit = () => {
    if (form.newPassword && form.newPassword !== form.confirmPassword) {
      alert("Mật khẩu nhập lại không khớp!");
      return;
    }
    alert("Cập nhật thông tin thành công!");
  };
  </script>
  
  <style scoped>
  /* Tùy chọn: thêm độ mượt và căn đều */
  input, select {
    transition: all 0.2s ease-in-out;
  }

  /* DatePicker full width */
  :deep(.mx-datepicker) {
    width: 100% !important;
  }

  :deep(.mx-input-wrapper) {
    width: 100% !important;
  }

  :deep(.mx-input) {
    width: 100% !important;
  }
  </style>
  