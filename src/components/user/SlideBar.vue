<template>
  <div class="bg-white rounded-lg shadow-sm p-4">
    <nav class="space-y-2">
      <!-- Tổng quan -->
      <router-link
        to="/info-user"
        :class="[
          'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
          $route.path === '/info-user'
            ? 'bg-[#dbf9eb] text-[#009981]'
            : 'text-gray-600 hover:bg-[#dbf9eb] hover:text-[#009981]'
        ]"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
        </svg>
        <span class="font-medium">Tổng quan</span>
      </router-link>

      <!-- Đơn hàng của bạn -->
      <router-link
        to="/info-user/orders"
        :class="[
          'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
          $route.path === '/info-user/orders'
            ? 'bg-[#dbf9eb] text-[#009981]'
            : 'text-gray-600 hover:bg-[#dbf9eb] hover:text-[#009981]'
        ]"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
        </svg>
        <span class="font-medium">Đơn hàng của bạn</span>
      </router-link>

      <!-- Trung tâm voucher -->
      <router-link
        to="/info-user/vouchers"
        :class="[
          'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
          $route.path === '/info-user/vouchers'
            ? 'bg-[#dbf9eb] text-[#009981]'
            : 'text-gray-600 hover:bg-[#dbf9eb] hover:text-[#009981]'
        ]"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
        </svg>
        <span class="font-medium">Trung tâm voucher</span>
      </router-link>

      <!-- Lịch sử mua hàng -->
      <router-link
        to="/info-user/purchase-history"
        :class="[
          'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
          $route.path === '/info-user/purchase-history'
            ? 'bg-[#dbf9eb] text-[#009981]'
            : 'text-gray-600 hover:bg-[#dbf9eb] hover:text-[#009981]'
        ]"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
        <span class="font-medium">Lịch sử mua hàng</span>
      </router-link>

        <!-- Thông tin cá nhân -->
        <router-link
          to="/info-user/profile"
          :class="[
            'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
            $route.path === '/info-user/profile'
              ? 'bg-[#dbf9eb] text-[#009981]'
              : 'text-gray-600 hover:bg-[#dbf9eb] hover:text-[#009981]'
          ]"
        >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
        <span class="font-medium">Thông tin cá nhân</span>
      </router-link>

      <!-- Quản lý bình luận -->
      <router-link
        to="/info-user/comments"
        :class="[
          'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
          $route.path === '/info-user/comments'
            ? 'bg-[#dbf9eb] text-[#009981]'
            : 'text-gray-600 hover:bg-[#dbf9eb] hover:text-[#009981]'
        ]"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
        </svg>
        <span class="font-medium">Quản lý bình luận</span>
      </router-link>

      <!-- Quản lý đánh giá -->
      <router-link
        to="/info-user/reviews"
        :class="[
          'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
          $route.path === '/info-user/reviews'
            ? 'bg-[#dbf9eb] text-[#009981]'
            : 'text-gray-600 hover:bg-[#dbf9eb] hover:text-[#009981]'
        ]"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
        </svg>
        <span class="font-medium">Quản lý đánh giá</span>
      </router-link>

      <!-- Đăng xuất -->
      <button
        @click="handleLogout"
        class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-[#dbf9eb] hover:text-[#009981] transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
        </svg>
        <span class="font-medium">Đăng xuất</span>
      </button>
    </nav>
  </div>
</template>

  <script setup>
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/authStore';

  const router = useRouter();
  const authStore = useUserStore();

  const handleLogout = () => {
    // Clear user data
    authStore.clearUser();

    // Redirect to login
    router.push('/login');
  };
  </script>

<style scoped>
/* Custom styles if needed */
</style>
