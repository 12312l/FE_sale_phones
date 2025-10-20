<template>
  <div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <ProductCard
        v-for="p in paginatedProducts"
        :key="p.id"
        :product="p"
      />
    </div>
    
    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex items-center justify-center mt-8 space-x-2">
      <!-- First page -->
      <button
        @click="goToPage(1)"
        :disabled="currentPage === 1"
        class="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
      <BxChevronsLeft class="w-4 h-4"/>
      </button>
      
      <!-- Previous page -->
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
      <AkChevronLeftSmall class="w-4 h-4"/>
      </button>
      
      <!-- Page numbers -->
      <template v-for="page in visiblePages" :key="page">
        <button
          v-if="page !== '...'"
          @click="goToPage(page)"
          :class="[
            'px-3 py-2 text-sm font-medium rounded-md transition-colors',
            page === currentPage
              ? 'bg-green-100 text-green-700 border border-green-200'
              : 'text-gray-700 hover:bg-gray-100'
          ]"
        >
          {{ page }}
        </button>
        <span v-else class="px-2 text-gray-500">...</span>
      </template>
      
      <!-- Next page -->
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
      <AkChevronRightSmall class="w-4 h-4"/>
      </button>
      
      <!-- Last page -->
      <button
        @click="goToPage(totalPages)"
        :disabled="currentPage === totalPages"
        class="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
      <BxChevronsRight class="w-4 h-4"/>
      </button>
      
      <!-- Items per page selector -->
      <div class="flex items-center space-x-2 ml-4">
        <span class="text-sm text-gray-600">Hiển thị</span>
        <select
          v-model="itemsPerPage"
          @change="currentPage = 1"
          class="px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
        <span class="text-sm text-gray-600">trên trang</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import ProductCard from '@/components/product/ProductCard.vue'

const props = defineProps({
  products: {
    type: Array,
    default: () => [],
  },
  selectedCategory: {
    type: String,
    default: null,
  },
})

// Pagination
const currentPage = ref(1)
const itemsPerPage = ref(15)

const totalPages = computed(() => Math.ceil(productsToRender.value.length / itemsPerPage.value))

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  return productsToRender.value.slice(start, start + itemsPerPage.value)
})

// pagination
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page
}
const nextPage = () => goToPage(currentPage.value + 1)
const prevPage = () => goToPage(currentPage.value - 1)

// Display pages (example: 1,2,3,...,32)
const visiblePages = computed(() => {
  const total = totalPages.value
  const current = currentPage.value
  
  if (total <= 5) {
    // if total pages <= 5, show all
    return Array.from({ length: total }, (_, i) => i + 1)
  }
  
  if (current <= 3) {
    // page first: 1, 2, 3, ..., total
    return [1, 2, 3, '...', total]
  }
  
  if (current >= total - 2) {
    // page last: 1, ..., total-2, total-1, total
    return [1, '...', total - 2, total - 1, total]
  }
  
  // page middle: 1, ..., current-1, current, current+1, ..., total
  return [1, '...', current - 1, current, current + 1, '...', total]
})

// Reset pagination when category changes
watch(() => props.selectedCategory, () => {
  currentPage.value = 1
})

// Provide demo data if no props passed
const demoProducts = [
  {
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },{
    id: 1,
    name: 'OPPO Reno14 F 5G 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    price: 10300000,
    oldPrice: 10490000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 103.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói Data 5G 30GB/30 ngày cho thuê bao Viettel sử dụng...',
    ],
    rating: 5.0,
  },
  {
    id: 2,
    name: 'OPPO FIND N5',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    price: 34418000,
    oldPrice: 44990000,
    discountLabel: 'Giảm 4% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['8.12 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 442.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng gói OPPO Premium | Service trị giá 2 triệu...',
    ],
    rating: 4.5,
  },
  {
    id: 3,
    name: 'OPPO A6 Pro 8GB 256GB',
    image: 'https://images.unsplash.com/photo-1510552776732-01acc9a4c1a3?q=80&w=800&auto=format&fit=crop',
    price: 7990000,
    oldPrice: 8290000,
    discountLabel: 'Giảm 3% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.57 inches', '8 GB', '256 GB'],
    memberNote: 'Member giảm đến 80.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Trả góp 0% lãi suất, không trả trước...',
    ],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'OPPO Reno14 5G 12GB 256GB',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: 15700000,
    oldPrice: 15990000,
    discountLabel: 'Giảm 2% ',
    installmentLabel: 'Trả góp 0% ',
    specs: ['6.59 inches', '12 GB', '256 GB'],
    memberNote: 'Member giảm đến 157.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Loa Bluetooth INNO Sound S1 hoặc Phiếu Mua Hàng 400,000đ...',
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'OPPO Find X8 16GB 512GB',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
    price: 20490000,
    oldPrice: 22990000,
    discountLabel: '20/10',
    installmentLabel: 'Giảm 11% ',
    specs: ['6.59 inches', '16 GB', '512 GB'],
    memberNote: 'Member giảm đến 205.000đ',
    studentNote: 'S-Student giảm thêm 200.000đ',
    promos: [
      'Tặng Sim/Esim VNSKY, có ngày 5GB data 5G/ngày, miễn phí 30...',
    ],
    rating: 4.9,
  },
]

const productsToRender = computed(() => props.products?.length ? props.products : demoProducts)
</script>

<style scoped>
</style>


