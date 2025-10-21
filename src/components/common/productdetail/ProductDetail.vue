<template>
  <div class="flex gap-8">
    <div>
      <!-- Product Title -->
      <h1 class="text-2xl font-bold text-gray-900 mb-8">
        iPhone Air 256GB - Chính hãng Apple Việt Nam
      </h1>

      <!-- Main Product Display Area -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8 relative">
        <!-- Main Product Image -->
        <div class="relative">
          <!-- Navigation Arrows -->
          <button
            @click="prevImage"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors z-10"
          >
            <AkChevronLeftSmall class="w-6 h-6 text-white" />
          </button>

          <button
            @click="nextImage"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors z-10"
          >
            <AkChevronRightSmall class="w-6 h-6 text-white" />
          </button>

          <!-- Favorite Button -->
          <button
            @click="toggleFavorite"
            class="absolute top-4 right-4 w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow z-10"
          >
            <AnFilledHeart
              class="w-6 h-6"
              :class="isFavorite ? 'text-red-500' : 'text-gray-400'"
            />
          </button>

          <!-- Product Images -->
          <div class="flex justify-center items-center h-96">
            <div class="relative w-full max-w-4xl">
              <!-- Main Product Image -->
              <div class="flex justify-center">
                <img
                  :src="productImages[currentImageIndex]"
                   :alt="`${selectedColor} iPhone`"
                  class="w-auto object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Options and Information Section -->
      <div class="">
        <!-- Image Gallery Indicator -->
        <div class="text-center mb-8">
          <p class="text-sm text-gray-600">
            Xem tất cả hình ảnh ({{ currentImageIndex + 1 }}/{{
              productImages.length
            }})
          </p>
        </div>

        <!-- Color Options and Information Cards -->
        <div class="flex flex-wrap gap-6 justify-center">
          <!-- Color Options -->
          <div
            v-for="(color, index) in colorOptions"
            :key="index"
            class="flex flex-col items-center"
          >
            <!-- Card -->
            <div
              @click="selectColor(color)"
              :class="[
                'w-20 h-24 bg-white rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md mb-2',
                selectedColor === color.name
                  ? 'border-green-500 shadow-lg'
                  : 'border-gray-200 hover:border-gray-300',
              ]"
            >
              <!-- Phone Image -->
              <div class="w-full h-full p-2 relative">
                <div
                  class="w-full h-full rounded border border-gray-200 relative overflow-hidden"
                  :style="{ backgroundColor: color.color }"
                >
                  <!-- Camera module -->
                  <div
                    class="absolute top-1 left-1 w-2 h-2 bg-gray-800 rounded-full"
                  ></div>
                  <!-- Apple Logo -->
                  <div
                    class="absolute bottom-1 left-1/2 transform -translate-x-1/2"
                  >
                    <svg
                      class="w-3 h-3 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <!-- Color Name - Outside the card -->
            <span
              class="text-sm font-medium text-gray-900 text-center w-20 leading-tight"
              >{{ color.name }}</span
            >
          </div>

          <!-- Technical Specs Card -->
          <div class="flex flex-col items-center">
            <!-- Card -->
            <div
              @click="showTechnicalSpecs = !showTechnicalSpecs"
              class="w-20 h-24 bg-white rounded-lg border-2 border-gray-200 cursor-pointer transition-all duration-200 hover:border-gray-300 hover:shadow-md mb-2 flex items-center justify-center"
            >
              <!-- Settings Icon -->
              <FeSettings class="w-8 h-8 text-gray-600" />
            </div>
            <!-- Text - Outside the card -->
            <span
              class="text-sm font-medium text-gray-900 text-center w-20 leading-tight"
              >Thông số kỹ thuật</span
            >
          </div>

          <!-- Product Info Card -->
          <div class="flex flex-col items-center">
            <!-- Card -->
            <div
              @click="showProductInfo = !showProductInfo"
              class="w-20 h-24 bg-white rounded-lg border-2 border-gray-200 cursor-pointer transition-all duration-200 hover:border-gray-300 hover:shadow-md mb-2 flex items-center justify-center"
            >
              <!-- Document Icon -->
              <FlDocumentBulletList class="w-8 h-8 text-gray-600" />
            </div>
            <!-- Text - Outside the card -->
            <span
              class="text-sm font-medium text-gray-900 text-center w-20 leading-tight"
              >Thông tin sản phẩm</span
            >
          </div>
        </div>

        <!-- Modal Components -->
        <Specification
          :isOpen="showTechnicalSpecs"
          @close="showTechnicalSpecs = false"
        />

        <InfoProduct
          :isOpen="showProductInfo"
          @close="showProductInfo = false"
        />
      </div>

      <!-- Product Commitment Section -->
      <div class="mt-8">
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <!-- Title -->
          <h3 class="text-xl font-bold text-red-600 text-center mb-6">
            CAM KẾT SẢN PHẨM
          </h3>

          <!-- Commitment Items -->
          <div class="space-y-4">
            <!-- Shipping Commitment -->
            <div class="flex items-start space-x-4">
              <div
                class="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-gray-900">
                  Miễn phí vận chuyển toàn quốc - Giao hàng hỏa tốc 2H nội thành
                </p>
              </div>
            </div>

            <!-- Warranty Commitment -->
            <div class="flex items-start space-x-4">
              <div
                class="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-gray-900">
                  Bảo hành chính hãng Apple 12 tháng
                  <span class="text-green-600 cursor-pointer hover:underline"
                    >(Xem trung tâm bảo hành)</span
                  >
                </p>
              </div>
            </div>

            <!-- Quality Commitment -->
            <div class="flex items-start space-x-4">
              <div
                class="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-gray-900">
                  Cam kết máy mới nguyên Seal, chưa Active - Lỗi Đổi Liền trong
                  12 tháng, đổi mới miễn phí hoặc sản phẩm tương đương (miễn phí
                  trong 30 ngày đầu).
                  <span class="text-green-600 cursor-pointer hover:underline"
                    >(Xem chi tiết)</span
                  >
                </p>
              </div>
            </div>

            <!-- Invoice Commitment -->
            <div class="flex items-start space-x-4">
              <div
                class="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-gray-900">
                  Giá đã bao gồm VAT, xuất hóa đơn ngay sau khi bán hàng. Yên
                  tâm mua sắm, hạch toán dễ dàng!
                  <span class="text-green-600 cursor-pointer hover:underline"
                    >(Tham khảo chính sách xuất hoá đơn)</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column: Product Information -->
    <div>
      <div class=" mx-auto bg-white rounded-2xl shadow p-4 space-y-4">
         <!-- Giá và mã -->
         <div>
           <div class="flex items-center gap-2">
             <span class="text-red-600 font-bold text-2xl">{{ formatPrice(currentPrice) }}</span>
             <span class="text-gray-400 line-through text-sm">{{ formatPrice(originalPrice) }}</span>
             <span class="text-gray-500 text-xs ml-auto">SKU: MG2Q4ZP</span>
           </div>
           <p class="text-gray-500 text-sm mt-1">
             iPhone Air chỉ hỗ trợ esim - không hỗ trợ sim vật lý. Khi nhận hàng
             quý khách vui lòng chuẩn bị esim để active máy
           </p>
         </div>

        <!-- Chọn phiên bản -->
        <div>
          <h3 class="font-semibold mb-2">Lựa chọn phiên bản</h3>
          <div class="grid grid-cols-3 gap-2">
             <button
               v-for="item in capacities"
               :key="item.value"
               :class="[
                 'border rounded-lg py-2 text-sm',
                 selectedCapacity === item.value
                   ? 'border-red-500 text-red-600 font-semibold'
                   : 'border-gray-300 text-gray-700',
               ]"
               @click="selectedCapacity = item.value"
             >
               <div>{{ item.label }}</div>
               <div class="text-xs text-gray-500">{{ formatPrice(item.basePrice) }}</div>
             </button>
          </div>
        </div>

        <!-- Chọn màu -->
        <div>
          <h3 class="font-semibold mb-2">
            Lựa chọn màu và xem địa chỉ còn hàng
          </h3>
          <div class="grid grid-cols-3 gap-2">
             <button
               v-for="color in colors"
               :key="color.value"
               :class="[
                 'border rounded-lg py-2 text-sm flex flex-col items-center',
                 selectedColor === color.value
                   ? 'border-red-500 text-red-600 font-semibold'
                   : 'border-gray-300 text-gray-700',
               ]"
               @click="selectedColor = color.value"
             >
               <span>{{ color.label }}</span>
               <span class="text-xs text-gray-500">{{ formatPrice(Math.round(currentBasePrice * color.priceMultiplier)) }}</span>
             </button>
          </div>
        </div>

         <!-- Giá riêng cho thành viên -->
         <div class="bg-green-50 p-3 rounded-lg border border-green-200">
           <div class="flex justify-between text-sm">
             <span>Dành riêng cho Hoàng Hà Member</span>
             <span class="font-semibold text-green-700">{{ formatPrice(Math.round(currentPrice * 0.99)) }}</span>
           </div>
           <div class="flex justify-between text-sm mt-1">
             <span>Thu cũ trợ giá tới</span>
             <span class="font-semibold text-gray-700">4.000.000 ₫</span>
           </div>
           <div class="text-xs text-yellow-600 mt-1">+{{ formatPrice(Math.round(currentPrice * 0.002)) }} điểm thưởng</div>
         </div>

        <!-- Nút hành động -->
        <div class="space-y-4">
          <!-- Top Section: Cart + Buy Now -->
          <div class="flex gap-2">
            <!-- Cart Button (Small) -->
            <button
              class="w-[68px] bg-white border-2 border-red-500 rounded-lg flex items-center justify-center hover:bg-red-50 transition-colors"
            >
            <BxSolidCartAlt class="w-10 h-10 text-red-500" />           
           </button>
            
            <!-- Buy Now Button (Large) -->
            <button
              class="flex-1 bg-[#fd475a] hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-colors"
            >
              MUA NGAY
              <span class="block text-sm font-normal">(Giao tận nhà hoặc nhận tại cửa hàng)</span>
            </button>
          </div>

          <!-- Bottom Section: Installment Options -->
          <div class="flex gap-2">
            <button
              class="flex-1 bg-[#009981] hover:bg-[#006555] text-white font-bold py-3 rounded-lg transition-colors"
            >
              TRẢ GÓP 0%
              <span class="block text-sm font-normal">Không phí - Duyệt nhanh 10p</span>
            </button>
            <button
              class="flex-1 bg-[#009981] hover:bg-[#006555] text-white font-bold py-3 rounded-lg transition-colors"
            >
              TRẢ GÓP QUA THẺ
              <span class="block text-sm font-normal">(Visa, Mastercard, JCB)</span>
            </button>
          </div>
        </div>

        <!-- Ưu đãi -->
        <div class="bg-pink-50 border border-pink-200 rounded-lg p-3">

           <div class="flex items-center gap-2 mb-2">
             <FaChessQueen class="w-6 h-6 text-pink-600" />
             <h3 class="font-semibold text-pink-600">ƯU ĐÃI HOÀNG HÀ</h3>
           </div>
          <ul class="text-sm space-y-2 text-gray-700">
            <li class="flex gap-2">
              <span class="text-red-500 font-bold">1.</span>
              Tặng sạc dự phòng Energizer 5,000mAh (giá 300.000 ₫)
            </li>
            <li class="flex gap-2">
              <span class="text-red-500 font-bold">2.</span>
              Thu cũ đổi mới trợ giá 1.000.000 ₫ - 4.000.000 ₫
            </li>
            <li class="flex gap-2">
              <span class="text-red-500 font-bold">3.</span>
              Mua iPhone 17 - iPhone Air Series kèm phụ kiện giảm 20%
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import {
  AnFilledHeart,
  FeSettings,
  FlDocumentBulletList,
} from "@kalimahapps/vue-icons";
import Specification from "@/modal/Specification.vue";
import InfoProduct from "@/modal/InfoProduct.vue";
// Import images
import b1 from "@/assets/images/b1.webp";
import b2 from "@/assets/images/b2.webp";
import b3 from "@/assets/images/b3.webp";
import b4 from "@/assets/images/b4.webp";
import b5 from "@/assets/images/b5.webp";
import b6 from "@/assets/images/b6.webp";

// Product data
const currentImageIndex = ref(0);
const isFavorite = ref(false);
const showTechnicalSpecs = ref(false);
const showProductInfo = ref(false);

const colorOptions = ref([
  {
    id: 1,
    name: "Xanh Da Trời",
    color: "#87CEEB",
    images: [b1, b2],
  },
  {
    id: 2,
    name: "Đen Không Gian",
    color: "#2C2C2C",
    images: [b3, b4],
  },
  {
    id: 3,
    name: "Vàng Nhạt",
    color: "#F5DEB3",
    images: [b5, b6],
  },
  {
    id: 4,
    name: "Trắng Mây",
    color: "#F8F8FF",
    images: [b1, b3],
  },
]);

const selectedColor = ref("Xanh Da Trời");

// Computed property for current product images based on selected color
const productImages = computed(() => {
  const colorOption = colorOptions.value.find(color => color.name === selectedColor.value);
  return colorOption ? colorOption.images : [b1, b2];
});

// Methods
const nextImage = () => {
  if (productImages.value.length > 0) {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % productImages.value.length;
  }
};

const prevImage = () => {
  if (productImages.value.length > 0) {
    currentImageIndex.value =
      currentImageIndex.value === 0
        ? productImages.value.length - 1
        : currentImageIndex.value - 1;
  }
};

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

const selectColor = (color) => {
  selectedColor.value = color.name;
  // Reset to first image when color changes
  currentImageIndex.value = 0;
};


const selectedCapacity = ref("512GB");

// Version options with base prices
const capacities = [
  { label: "256GB", value: "256GB", basePrice: 31290000 },
  { label: "512GB", value: "512GB", basePrice: 37590000 },
  { label: "1TB", value: "1TB", basePrice: 43690000 },
];

// Color options with price multipliers
const colors = [
  { 
    label: "Xanh Da Trời", 
    value: "Xanh Da Trời", 
    priceMultiplier: 1.0, // Giá gốc
    image: "https://via.placeholder.com/40x40/87CEEB/fff?text=X" 
  },
  { 
    label: "Trắng Mây", 
    value: "Trắng Mây", 
    priceMultiplier: 1.0, // Giá gốc
    image: "https://via.placeholder.com/40x40/F8F8FF/000?text=T" 
  },
  { 
    label: "Đen Không Gian", 
    value: "Đen Không Gian", 
    priceMultiplier: 1.05, // Đắt hơn 5%
    image: "https://via.placeholder.com/40x40/000000/fff?text=Đ" 
  },
  { 
    label: "Vàng Nhạt", 
    value: "Vàng Nhạt", 
    priceMultiplier: 1.1, // Đắt hơn 10%
    image: "https://via.placeholder.com/40x40/FFD700/000?text=V" 
  },
];

// Computed properties for dynamic pricing
const currentBasePrice = computed(() => {
  const selectedCap = capacities.find(cap => cap.value === selectedCapacity.value);
  return selectedCap ? selectedCap.basePrice : 37590000;
});

const currentColorMultiplier = computed(() => {
  const selectedCol = colors.find(col => col.value === selectedColor.value);
  return selectedCol ? selectedCol.priceMultiplier : 1.0;
});

const currentPrice = computed(() => {
  return Math.round(currentBasePrice.value * currentColorMultiplier.value);
});

const originalPrice = computed(() => {
  return Math.round(currentPrice.value * 1.02); // Giá gốc cao hơn 2%
});

// Format price function
const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price) + ' ₫';
};
</script>

<style scoped>
button {
  transition: all 0.2s ease;
}
</style>