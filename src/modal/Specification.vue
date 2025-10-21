<template>
  <!-- Technical Specifications Modal Overlay -->
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Background Overlay -->
    <div 
      @click="$emit('close')"
      class="absolute inset-0  bg-opacity-50"
    ></div>
    
    <!-- Modal Content -->
    <div class="relative bg-white shadow-2xl max-w-4xl w-full mx-4 h-[100vh] overflow-hidden">
      <!-- Header -->
      <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h4 class="text-lg font-semibold text-gray-900">Thông số kỹ thuật</h4>
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
        <!-- Màn hình -->
        <div class="mb-6">
          <h5 class="text-base font-semibold text-gray-900 mb-3">Màn hình</h5>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">Tần số quét (Hz):</span>
              <span class="font-medium text-gray-900">120Hz</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Công nghệ màn hình:</span>
              <span class="font-medium text-gray-900">Super Retina XDR</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Độ phân giải:</span>
              <span class="font-medium text-gray-900">2736 x 1260</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Kích thước màn hình:</span>
              <span class="font-medium text-gray-900">6.5"</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Độ sáng màn hình:</span>
              <span class="font-medium text-gray-900">3000nits</span>
            </div>
          </div>
        </div>

        <!-- Camera sau -->
        <div class="mb-6">
          <h5 class="text-base font-semibold text-gray-900 mb-3">Camera sau</h5>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">Độ phân giải camera:</span>
              <span class="font-medium text-gray-900">48MP (f/1.6) x 12MP (f/1.6)</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Quay phim:</span>
              <span class="font-medium text-gray-900">4K Dolby Vision</span>
            </div>
          </div>
          <div class="mt-3 text-sm text-gray-600">
            <p class="mb-2">• 4K Dolby Vision video recording at 24 fps, 25 fps, 30 fps, or 60 fps</p>
            <p class="mb-2">• 1080p Dolby Vision video recording at 25 fps, 30 fps, or 60 fps</p>
            <p class="mb-2">• 720p Dolby Vision video recording at 30 fps</p>
            <p class="mb-2">• Action Mode up to 2.8K Dolby Vision at 60 fps</p>
            <p class="mb-2">• Slow-motion video support 1080p at 120 fps or 240 fps</p>
            <p class="mb-2">• Dual video recording up to 4K Dolby Vision at 30 fps</p>
            <p class="mb-2">• Time-lapse video with stabilization</p>
            <p class="mb-2">• Night Mode Time-lapse</p>
            <p class="mb-2">• QuickTake video recording up to 4K Dolby Vision at 60 fps</p>
            <p class="mb-2">• Sensor-shift optical image stabilization for video</p>
            <p class="mb-2">• Digital zoom up to 6x</p>
            <p class="mb-2">• Audio zoom</p>
            <p class="mb-2">• True Tone Flash</p>
            <p class="mb-2">• Cinematic video stabilization (4K, 1080p, and 720p)</p>
            <p class="mb-2">• Continuous autofocus video</p>
            <p class="mb-2">• Ability to take 8MP still photos while recording 4K video</p>
            <p class="mb-2">• Playback zoom</p>
            <p class="mb-2">• Video recording formats: HEVC and H.264</p>
            <p class="mb-2">• Spatial Audio and stereo recording</p>
            <p class="mb-2">• Wind noise reduction</p>
            <p class="mb-2">• Audio zoom (Hòa Âm)</p>
          </div>
        </div>

        <!-- Đèn Flash -->
        <div class="mb-6">
          <h5 class="text-base font-semibold text-gray-900 mb-3">Đèn Flash</h5>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">Status:</span>
              <span class="font-medium text-gray-900">Có</span>
            </div>
          </div>
          <div class="mt-3 text-sm text-gray-600">
            <p class="mb-2">• Digital zoom up to 10x</p>
            <p class="mb-2">• Customizable default lens (Fusion Main)</p>
            <p class="mb-2">• Sapphire lens cover</p>
            <p class="mb-2">• True Tone Flash</p>
            <p class="mb-2">• Photonic Engine</p>
            <p class="mb-2">• Deep Fusion</p>
            <p class="mb-2">• Smart HDR 5</p>
            <p class="mb-2">• Next-generation portrait photos with Focus and Depth Control</p>
            <p class="mb-2">• Portrait Lighting effects (Hiệu ứng Chiếu Sáng Chân Dung)</p>
          </div>
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
