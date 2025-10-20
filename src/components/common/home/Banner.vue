<template>
  <div class="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
    <!-- Main Banner Image (carousel) -->
    <div class="relative w-full">
      <div class="relative w-full h-[360px] sm:h-[420px] bg-gray-100">
        <img
          v-if="activeBanner"
          :src="activeBanner.src"
          :alt="activeBanner.alt || 'banner'"
          class="w-full h-full object-cover"
          draggable="false"
        />
        <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
          1920x420 banner image
        </div>
      </div>

      <!-- Nav arrows -->
      <button
        type="button"
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-teal-600 rounded-full shadow-md p-2"
        @click="prev()"
        aria-label="Previous"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-teal-600 rounded-full shadow-md p-2"
        @click="next()"
        aria-label="Next"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Small indicators on image bottom center -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <span
          v-for="(b, i) in banners"
          :key="i"
          class="h-1 rounded-full transition-all"
          :class="i === index ? 'bg-teal-500 w-10' : 'bg-teal-200 w-8'"
        />
      </div>
    </div>

    
  </div>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'

// Public API: pass an array of banner images
// Example: [{ src: '/public/banner1.jpg', alt: 'iPhone 17' }, ...]
const props = defineProps({
  banners: {
    type: Array,
    default: () => [],
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  intervalMs: {
    type: Number,
    default: 5000,
  },
})

const index = ref(0)
const banners = computed(() => (props.banners?.length ? props.banners : fallbackBanners))
const activeBanner = computed(() => banners.value[index.value])

function next() {
  index.value = (index.value + 1) % banners.value.length
}
function prev() {
  index.value = (index.value - 1 + banners.value.length) % banners.value.length
}

let timer
onMounted(() => {
  if (props.autoplay) start()
})
onBeforeUnmount(() => stop())
watch(() => props.autoplay, (v) => (v ? start() : stop()))

function start() {
  stop()
  timer = setInterval(next, props.intervalMs)
}
function stop() {
  if (timer) clearInterval(timer)
}

// Fallback demo images (replace with real images via props)
import b1 from '@/assets/images/b1.webp'
import b2 from '@/assets/images/b2.webp'
import b3 from '@/assets/images/b3.webp'
import b4 from '@/assets/images/b4.webp'
import b5 from '@/assets/images/b5.webp'
import b6 from '@/assets/images/b6.webp'

const fallbackBanners = [
  { src: b1, alt: 'Banner 1' },
  { src: b2, alt: 'Banner 2' },
  { src: b3, alt: 'Banner 3' },
  { src: b4, alt: 'Banner 4' },
  { src: b5, alt: 'Banner 5' },
  { src: b6, alt: 'Banner 6' },
]
</script>

<style scoped>
/* Custom styles if needed */
</style>
