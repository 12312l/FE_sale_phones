<template>
  <div v-if="product"
    class="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-200 overflow-hidden cursor-pointer transform hover:-translate-y-0.5"
  >
    <div class="relative p-4 pb-0">
      <!-- Discount badge left -->
      <div v-if="product.discountLabel" class="absolute -top-1 -left-0 pointer-events-none">
        <span
          class="inline-flex items-center gap-1 text-[11px] font-semibold text-white rounded-full px-2.5 h-6 leading-6 bg-gradient-to-r from-rose-500 to-red-600 ring-1 ring-white/60 shadow-md"
        >
          {{ product.discountLabel }}
        </span>
      </div>
      <!-- Installment badge right -->
      <div v-if="product.installmentLabel" class="absolute -top-1 right-0 pointer-events-none">
        <span
          class="inline-flex items-center gap-1 text-[11px] font-semibold text-white rounded-full px-2.5 h-6 leading-6 bg-gradient-to-r from-sky-500 to-blue-600 ring-1 ring-white/60 shadow-md"
        >
          {{ product.installmentLabel }}
        </span>
      </div>

      <!-- Image -->
      <div class="w-full flex justify-center items-center">
        <img :src="product.image" :alt="product.name" class="h-44 object-contain select-none" draggable="false" />
      </div>
    </div>

    <div class="px-4 pt-2 pb-4">
      <!-- Title -->
      <h3 class="text-gray-900 font-semibold text-sm line-clamp-2 h-10">{{ product.name }}</h3>

      <!-- Prices -->
      <div class="mt-1 flex items-baseline space-x-2">
        <div class="text-red-600 font-bold">{{ formatCurrency(product.price) }}</div>
        <div v-if="product.oldPrice" class="text-gray-400 text-sm line-through">{{ formatCurrency(product.oldPrice) }}</div>
      </div>

      <!-- Spec chips -->
      <div v-if="product.specs?.length" class="mt-2 flex flex-wrap gap-2">
        <span
          v-for="(s, i) in product.specs"
          :key="i"
          class="text-xs text-gray-700 bg-gray-100 rounded px-2 py-0.5"
        >{{ s }}</span>
      </div>

      <!-- Member/Student lines -->
      <div v-if="product.memberNote || product.studentNote" class="mt-2 space-y-1">
        <div v-if="product.memberNote" class="text-xs text-gray-600 bg-teal-50 border border-teal-100 rounded px-2 py-1">
          {{ product.memberNote }}
        </div>
        <div v-if="product.studentNote" class="text-xs text-gray-600 bg-indigo-50 border border-indigo-100 rounded px-2 py-1">
          {{ product.studentNote }}
        </div>
      </div>

      <!-- Promo bullets -->
      <ul v-if="product.promos?.length" class="mt-2 space-y-1">
        <li v-for="(p, i) in product.promos" :key="i" class="text-xs text-gray-700 flex gap-1">
          <span class="text-red-500 font-semibold">•</span>
          <span class="leading-snug">{{ p }}</span>
        </li>
      </ul>

      <!-- Footer: rating and like -->
      <div class="mt-3 flex items-center justify-between">
        <div class="flex items-center gap-1 text-amber-500 text-sm">
            <AnFilledStar class="w-4 h-4"/>
          <span class="text-gray-800">{{ product.rating?.toFixed(1) ?? '4.8' }}</span>
        </div>
        <button type="button" class="flex items-center gap-1 text-sky-600 hover:text-sky-700 text-sm">
            <AkHeart class="w-4 h-4"/>
          <span>Yêu thích</span>
        </button>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
})

const formatCurrency = (value) => {
  if (value == null) return ''
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(value)
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>


