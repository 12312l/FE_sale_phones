<template>
  <!-- Product Information Modal Overlay -->
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Background Overlay -->
    <div 
      @click="$emit('close')"
      class="absolute inset-0  bg-opacity-50"
    ></div>
    
    <!-- Modal Content -->
    <div class="relative bg-white shadow-2xl max-w-2xl w-full mx-4 h-[100vh] overflow-hidden">
      <!-- Header -->
      <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h4 class="text-lg font-semibold text-gray-900">Thông tin sản phẩm</h4>
        <button 
          @click="$emit('close')"
          class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
        >
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      
      <!-- Content -->
      <div class="p-6 overflow-y-auto h-[calc(100vh-80px)]">
        <div class="text-sm text-gray-700 space-y-2">
          <p>• iPhone Air 256GB chính hãng Apple Việt Nam</p>
          <p>• Bảo hành 12 tháng tại Apple Store</p>
          <p>• Tặng kèm cáp USB-C và tài liệu hướng dẫn</p>
          <p>• Hỗ trợ 5G và Wi-Fi 6E</p>
          <p>• Chống nước IP68</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])
</script>
