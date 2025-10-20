<template>
  <div class="relative group bg-gray-200 rounded-xl ml-5">
    <!-- Category Button -->
    <button 
      @mouseenter="handleDropdownShow"
      @mouseleave="showDropdown = false"
      class="flex items-center px-4 py-2 text-gray-700 hover:text-teal-500 transition-colors font-medium"
    >
      <BsList class="w-5 h-5 mr-2"/>
      <span class="text-sm font-semibold">Danh mục</span>
      <AkChevronDown class="w-4 h-4 ml-1"/>
    </button>

    <!-- Dropdown Menu -->
    <div 
      v-show="showDropdown"
      @mouseenter="showDropdown = true"
      @mouseleave="showDropdown = false"
      class="absolute top-full left-0 w-screen max-w-6xl bg-white shadow-xl border border-gray-200 rounded-lg z-50"
    >
      <div class="flex">
        <!-- Left Sidebar - Categories -->
        <div class="w-64 bg-gray-50 border-r border-gray-200">
          <div class="p-4">
            <h3 class="text-sm font-bold text-gray-900 mb-3">Danh mục</h3>
            <ul class="space-y-1">
              <li v-for="category in categories" :key="category.id" class="group/item">
                <button 
                  @mouseenter="selectCategory(category)"
                  class="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md transition-colors font-medium"
                  :class="{ 'bg-teal-50 text-teal-600': selectedCategory?.id === category.id }"
                >
                  <div class="flex items-center">
                    <component :is="category.icon" class="w-4 h-4 mr-3" />
                    <span class="font-semibold">{{ category.name }}</span>
                  </div>
                  <svg class="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right Content - Products -->
        <div class="flex-1 p-6">
          <div v-if="selectedCategory" class="space-y-6">
            <!-- Brand Section -->
            <div v-if="selectedCategory.brands">
              <h4 class="text-sm font-bold text-gray-900 mb-3">{{ selectedCategory.brandTitle }}</h4>
              <div class="grid grid-cols-4 gap-2">
                <button 
                  v-for="brand in selectedCategory.brands" 
                  :key="brand"
                  class="flex items-center justify-center px-3 py-2 text-xs font-medium border border-gray-200 rounded-md hover:border-teal-500 hover:text-teal-600 transition-colors"
                >
                  {{ brand }}
                </button>
              </div>
            </div>

            <!-- Hot Products -->
            <div v-if="selectedCategory.hotProducts">
              <h4 class="text-sm font-bold text-gray-900 mb-3">{{ selectedCategory.hotTitle }}</h4>
              <div class="grid grid-cols-4 gap-2">
                <button 
                  v-for="product in selectedCategory.hotProducts" 
                  :key="product.name"
                  class="flex items-center justify-center px-3 py-2 text-xs font-medium border border-gray-200 rounded-md hover:border-teal-500 hover:text-teal-600 transition-colors relative"
                >
                  {{ product.name }}
                  <span v-if="product.badge" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full font-bold">
                    {{ product.badge }}
                  </span>
                </button>
              </div>
            </div>

            <!-- Price Ranges -->
            <div v-if="selectedCategory.priceRanges">
              <h4 class="text-sm font-bold text-gray-900 mb-3">Mức giá</h4>
              <div class="grid grid-cols-3 gap-2">
                <button 
                  v-for="price in selectedCategory.priceRanges" 
                  :key="price"
                  class="flex items-center justify-center px-3 py-2 text-xs font-medium border border-gray-200 rounded-md hover:border-teal-500 hover:text-teal-600 transition-colors"
                >
                  {{ price }}
                </button>
              </div>
            </div>
          </div>

          <!-- Default content when no category selected -->
          <div v-else class="text-center text-gray-500 py-8">
            <svg class="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
            </svg>
            <p>Chọn danh mục để xem sản phẩm</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showDropdown = ref(false)
const selectedCategory = ref(null)

// Sample data - có thể fetch từ API
const categories = ref([
  {
    id: 1,
    name: 'iPhone',
    icon: 'svg',
    brands: ['iPhone 17', 'iPhone 17 Pro', 'iPhone 17 Pro Max', 'iPhone 16', 'iPhone 16 Pro', 'iPhone 16 Pro Max', 'iPhone 15', 'iPhone 15 Pro', 'iPhone 15 Pro Max', 'iPhone 14', 'iPhone 14 Pro', 'iPhone 14 Pro Max', 'iPhone 13', 'iPhone 13 Pro', 'iPhone 13 Pro Max', 'iPhone 12', 'iPhone 12 Pro', 'iPhone 12 Pro Max', 'iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max', 'iPhone SE'],
    brandTitle: 'Dòng iPhone',
    hotProducts: [
      { name: 'iPhone 17 Pro Max', badge: 'Mới' },
      { name: 'iPhone 17 Pro', badge: 'Mới' },
      { name: 'iPhone 16 Pro Max', badge: 'Hot' },
      { name: 'iPhone 16 Pro', badge: 'Hot' },
      { name: 'iPhone 15 Pro Max', badge: 'Hot' },
      { name: 'iPhone 15 Pro', badge: 'Hot' },
      { name: 'iPhone 14 Pro Max' },
      { name: 'iPhone 14 Pro' },
      { name: 'iPhone 13 Pro Max' },
      { name: 'iPhone 13 Pro' },
      { name: 'iPhone 12 Pro Max' },
      { name: 'iPhone 12 Pro' }
    ],
    hotTitle: 'iPhone nổi bật',
    priceRanges: ['Dưới 10 triệu', 'Từ 10 - 15 triệu', 'Từ 15 - 20 triệu', 'Từ 20 - 25 triệu', 'Từ 25 - 30 triệu', 'Trên 30 triệu']
  },
  {
    id: 2,
    name: 'Samsung',
    icon: 'svg',
    brands: ['Galaxy S25', 'Galaxy S25+', 'Galaxy S25 Ultra', 'Galaxy S24', 'Galaxy S24+', 'Galaxy S24 Ultra', 'Galaxy Z Fold7', 'Galaxy Z Flip7', 'Galaxy A55', 'Galaxy A35', 'Galaxy A25', 'Galaxy A15', 'Galaxy Note20', 'Galaxy Note10'],
    brandTitle: 'Dòng Samsung Galaxy',
    hotProducts: [
      { name: 'Galaxy S25 Ultra', badge: 'Mới' },
      { name: 'Galaxy S25+', badge: 'Mới' },
      { name: 'Galaxy Z Fold7', badge: 'Mới' },
      { name: 'Galaxy Z Flip7', badge: 'Mới' },
      { name: 'Galaxy S24 Ultra', badge: 'Hot' },
      { name: 'Galaxy S24+', badge: 'Hot' },
      { name: 'Galaxy A55', badge: 'Hot' },
      { name: 'Galaxy A35', badge: 'Hot' },
      { name: 'Galaxy S23 Ultra' },
      { name: 'Galaxy S23+' },
      { name: 'Galaxy A25' },
      { name: 'Galaxy A15' }
    ],
    hotTitle: 'Samsung nổi bật',
    priceRanges: ['Dưới 5 triệu', 'Từ 5 - 10 triệu', 'Từ 10 - 15 triệu', 'Từ 15 - 20 triệu', 'Từ 20 - 25 triệu', 'Trên 25 triệu']
  },
  {
    id: 3,
    name: 'Xiaomi',
    icon: 'svg',
    brands: ['Xiaomi 15T', 'Xiaomi 15T Pro', 'Xiaomi 14', 'Xiaomi 14 Pro', 'Xiaomi 14 Ultra', 'Redmi Note 14', 'Redmi Note 14 Pro', 'Redmi 15C', 'Redmi 15C 4GB', 'POCO X7', 'POCO F6', 'POCO M6'],
    brandTitle: 'Dòng Xiaomi & Redmi',
    hotProducts: [
      { name: 'Xiaomi 15T Pro', badge: 'Mới' },
      { name: 'Xiaomi 15T', badge: 'Mới' },
      { name: 'Redmi Note 14 Pro', badge: 'Mới' },
      { name: 'Redmi Note 14', badge: 'Mới' },
      { name: 'Xiaomi 14 Ultra', badge: 'Hot' },
      { name: 'Xiaomi 14 Pro', badge: 'Hot' },
      { name: 'POCO F6', badge: 'Hot' },
      { name: 'POCO X7', badge: 'Hot' },
      { name: 'Xiaomi 14' },
      { name: 'Redmi 15C' },
      { name: 'POCO M6' },
      { name: 'Redmi 15C 4GB' }
    ],
    hotTitle: 'Xiaomi nổi bật',
    priceRanges: ['Dưới 3 triệu', 'Từ 3 - 6 triệu', 'Từ 6 - 10 triệu', 'Từ 10 - 15 triệu', 'Từ 15 - 20 triệu', 'Trên 20 triệu']
  },
  {
    id: 4,
    name: 'OPPO',
    icon: 'svg',
    brands: ['OPPO Find X8', 'OPPO Find X8 Pro', 'OPPO Reno14', 'OPPO Reno14 Pro', 'OPPO A60', 'OPPO A80', 'OPPO A100', 'OPPO F27', 'OPPO F27 Pro'],
    brandTitle: 'Dòng OPPO',
    hotProducts: [
      { name: 'OPPO Find X8 Pro', badge: 'Mới' },
      { name: 'OPPO Find X8', badge: 'Mới' },
      { name: 'OPPO Reno14 Pro', badge: 'Mới' },
      { name: 'OPPO Reno14', badge: 'Mới' },
      { name: 'OPPO A100', badge: 'Hot' },
      { name: 'OPPO A80', badge: 'Hot' },
      { name: 'OPPO F27 Pro', badge: 'Hot' },
      { name: 'OPPO F27', badge: 'Hot' },
      { name: 'OPPO A60' },
      { name: 'OPPO Reno13' },
      { name: 'OPPO Find X7' },
      { name: 'OPPO A58' }
    ],
    hotTitle: 'OPPO nổi bật',
    priceRanges: ['Dưới 3 triệu', 'Từ 3 - 6 triệu', 'Từ 6 - 10 triệu', 'Từ 10 - 15 triệu', 'Từ 15 - 20 triệu', 'Trên 20 triệu']
  },
  {
    id: 5,
    name: 'Realme',
    icon: 'svg',
    brands: ['Realme GT 7', 'Realme GT 7 Pro', 'Realme 13 Pro', 'Realme 13 Pro+', 'Realme C71', 'Realme C81', 'Realme Narzo 80', 'Realme Narzo 80 Pro'],
    brandTitle: 'Dòng Realme',
    hotProducts: [
      { name: 'Realme GT 7 Pro', badge: 'Mới' },
      { name: 'Realme GT 7', badge: 'Mới' },
      { name: 'Realme 13 Pro+', badge: 'Mới' },
      { name: 'Realme 13 Pro', badge: 'Mới' },
      { name: 'Realme C81', badge: 'Hot' },
      { name: 'Realme C71', badge: 'Hot' },
      { name: 'Realme Narzo 80 Pro', badge: 'Hot' },
      { name: 'Realme Narzo 80', badge: 'Hot' },
      { name: 'Realme 12 Pro' },
      { name: 'Realme GT 6' },
      { name: 'Realme C61' },
      { name: 'Realme Narzo 70' }
    ],
    hotTitle: 'Realme nổi bật',
    priceRanges: ['Dưới 3 triệu', 'Từ 3 - 6 triệu', 'Từ 6 - 10 triệu', 'Từ 10 - 15 triệu', 'Từ 15 - 20 triệu', 'Trên 20 triệu']
  },
  {
    id: 6,
    name: 'Vivo',
    icon: 'svg',
    brands: ['Vivo X100', 'Vivo X100 Pro', 'Vivo V40', 'Vivo V40 Pro', 'Vivo Y28', 'Vivo Y38', 'Vivo Y58', 'Vivo T3'],
    brandTitle: 'Dòng Vivo',
    hotProducts: [
      { name: 'Vivo X100 Pro', badge: 'Mới' },
      { name: 'Vivo X100', badge: 'Mới' },
      { name: 'Vivo V40 Pro', badge: 'Mới' },
      { name: 'Vivo V40', badge: 'Mới' },
      { name: 'Vivo Y38', badge: 'Hot' },
      { name: 'Vivo Y28', badge: 'Hot' },
      { name: 'Vivo T3', badge: 'Hot' },
      { name: 'Vivo Y58', badge: 'Hot' },
      { name: 'Vivo X90' },
      { name: 'Vivo V30' },
      { name: 'Vivo Y27' },
      { name: 'Vivo Y17' }
    ],
    hotTitle: 'Vivo nổi bật',
    priceRanges: ['Dưới 3 triệu', 'Từ 3 - 6 triệu', 'Từ 6 - 10 triệu', 'Từ 10 - 15 triệu', 'Từ 15 - 20 triệu', 'Trên 20 triệu']
  },
  {
    id: 7,
    name: 'Huawei',
    icon: 'svg',
    brands: ['Huawei P70', 'Huawei P70 Pro', 'Huawei Mate 70', 'Huawei Mate 70 Pro', 'Huawei Nova 13', 'Huawei Nova 13 Pro', 'Huawei Y9', 'Huawei Y7'],
    brandTitle: 'Dòng Huawei',
    hotProducts: [
      { name: 'Huawei P70 Pro', badge: 'Mới' },
      { name: 'Huawei P70', badge: 'Mới' },
      { name: 'Huawei Mate 70 Pro', badge: 'Mới' },
      { name: 'Huawei Mate 70', badge: 'Mới' },
      { name: 'Huawei Nova 13 Pro', badge: 'Hot' },
      { name: 'Huawei Nova 13', badge: 'Hot' },
      { name: 'Huawei Y9', badge: 'Hot' },
      { name: 'Huawei Y7', badge: 'Hot' },
      { name: 'Huawei P60' },
      { name: 'Huawei Mate 60' },
      { name: 'Huawei Nova 12' },
      { name: 'Huawei Y6' }
    ],
    hotTitle: 'Huawei nổi bật',
    priceRanges: ['Dưới 3 triệu', 'Từ 3 - 6 triệu', 'Từ 6 - 10 triệu', 'Từ 10 - 15 triệu', 'Từ 15 - 20 triệu', 'Trên 20 triệu']
  },
  {
    id: 8,
    name: 'OnePlus',
    icon: 'svg',
    brands: ['OnePlus 13', 'OnePlus 13 Pro', 'OnePlus 12', 'OnePlus 12 Pro', 'OnePlus Nord 5', 'OnePlus Nord 4', 'OnePlus Ace 3', 'OnePlus Ace 3 Pro'],
    brandTitle: 'Dòng OnePlus',
    hotProducts: [
      { name: 'OnePlus 13 Pro', badge: 'Mới' },
      { name: 'OnePlus 13', badge: 'Mới' },
      { name: 'OnePlus Nord 5', badge: 'Mới' },
      { name: 'OnePlus Nord 4', badge: 'Mới' },
      { name: 'OnePlus 12 Pro', badge: 'Hot' },
      { name: 'OnePlus 12', badge: 'Hot' },
      { name: 'OnePlus Ace 3 Pro', badge: 'Hot' },
      { name: 'OnePlus Ace 3', badge: 'Hot' },
      { name: 'OnePlus 11' },
      { name: 'OnePlus Nord 3' },
      { name: 'OnePlus Ace 2' },
      { name: 'OnePlus 10T' }
    ],
    hotTitle: 'OnePlus nổi bật',
    priceRanges: ['Dưới 5 triệu', 'Từ 5 - 10 triệu', 'Từ 10 - 15 triệu', 'Từ 15 - 20 triệu', 'Từ 20 - 25 triệu', 'Trên 25 triệu']
  },
  {
    id: 9,
    name: 'Sony',
    icon: 'svg',
    brands: ['Sony Xperia 1 VII', 'Sony Xperia 5 VII', 'Sony Xperia 10 VII', 'Sony Xperia 1 VI', 'Sony Xperia 5 VI', 'Sony Xperia 10 VI'],
    brandTitle: 'Dòng Sony Xperia',
    hotProducts: [
      { name: 'Sony Xperia 1 VII', badge: 'Mới' },
      { name: 'Sony Xperia 5 VII', badge: 'Mới' },
      { name: 'Sony Xperia 10 VII', badge: 'Mới' },
      { name: 'Sony Xperia 1 VI', badge: 'Hot' },
      { name: 'Sony Xperia 5 VI', badge: 'Hot' },
      { name: 'Sony Xperia 10 VI', badge: 'Hot' },
      { name: 'Sony Xperia 1 V' },
      { name: 'Sony Xperia 5 V' },
      { name: 'Sony Xperia 10 V' },
      { name: 'Sony Xperia 1 IV' },
      { name: 'Sony Xperia 5 IV' },
      { name: 'Sony Xperia 10 IV' }
    ],
    hotTitle: 'Sony nổi bật',
    priceRanges: ['Dưới 10 triệu', 'Từ 10 - 15 triệu', 'Từ 15 - 20 triệu', 'Từ 20 - 25 triệu', 'Từ 25 - 30 triệu', 'Trên 30 triệu']
  },
  {
    id: 10,
    name: 'Nokia',
    icon: 'svg',
    brands: ['Nokia XR21', 'Nokia G60', 'Nokia G50', 'Nokia G42', 'Nokia G22', 'Nokia C31', 'Nokia C21', 'Nokia C11'],
    brandTitle: 'Dòng Nokia',
    hotProducts: [
      { name: 'Nokia XR21', badge: 'Hot' },
      { name: 'Nokia G60', badge: 'Hot' },
      { name: 'Nokia G50', badge: 'Hot' },
      { name: 'Nokia G42', badge: 'Hot' },
      { name: 'Nokia G22', badge: 'Hot' },
      { name: 'Nokia C31', badge: 'Hot' },
      { name: 'Nokia C21' },
      { name: 'Nokia C11' },
      { name: 'Nokia XR20' },
      { name: 'Nokia G21' },
      { name: 'Nokia C20' },
      { name: 'Nokia C10' }
    ],
    hotTitle: 'Nokia nổi bật',
    priceRanges: ['Dưới 2 triệu', 'Từ 2 - 4 triệu', 'Từ 4 - 6 triệu', 'Từ 6 - 8 triệu', 'Từ 8 - 10 triệu', 'Trên 10 triệu']
  }
])

const selectCategory = (category) => {
  selectedCategory.value = category
}

// Tự động chọn danh mục đầu tiên khi mở dropdown
const handleDropdownShow = () => {
  showDropdown.value = true
  if (!selectedCategory.value && categories.value.length > 0) {
    selectedCategory.value = categories.value[0]
  }
}
</script>

<style scoped>
/* Custom styles nếu cần */
</style>
