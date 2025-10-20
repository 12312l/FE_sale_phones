<template>
  <footer class="">
     <!-- Top Section - 5T Experience -->
     <div class="bg-gray-50 py-8">
       <div class="max-w-7xl mx-auto px-4 py-5 my-5 bg-white rounded-2xl shadow-lg">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-8">
          Trải nghiệm mua sắm 5T tại Hoàng Hà
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
          <!-- Tốt hơn về giá -->
          <div class="text-center">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 mb-1">Tốt hơn về giá</h3>
          </div>

          <!-- Thành viên - HSSV -->
          <div class="text-center">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 mb-1">Thành viên - HSSV</h3>
            <p class="text-sm text-gray-600">Ưu đãi riêng tới 10%</p>
          </div>

          <!-- Thu cũ đổi mới -->
          <div class="text-center">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 mb-1">Thu cũ đổi mới</h3>
            <p class="text-sm text-gray-600">Thu cũ giá cao, trợ giá lên đời</p>
          </div>

          <!-- Thanh toán - Trả góp -->
          <div class="text-center">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 mb-1">Thanh toán - Trả góp</h3>
            <p class="text-sm text-gray-600">Dễ dàng</p>
          </div>

          <!-- Trả máy lỗi -->
          <div class="text-center">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 mb-1">Trả máy lỗi</h3>
            <p class="text-sm text-gray-600">Đổi máy liền</p>
          </div>
        </div>
      </div>
    </div>

     <!-- Main Footer Section -->
     <div class="bg-green-800 text-white py-12 shadow-2xl">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Column 1: Hỗ trợ - dịch vụ -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Hỗ trợ - dịch vụ</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-green-300 transition-colors">Chính sách và hướng dẫn mua hàng trả góp</a></li>
              <li><a href="#" class="hover:text-green-300 transition-colors">Hướng dẫn mua hàng và chính sách vận chuyển</a></li>
              <li><a href="#" class="hover:text-green-300 transition-colors">Chính sách đổi mới và bảo hành</a></li>
              <li><a href="#" class="hover:text-green-300 transition-colors">Dịch vụ bảo hành mở rộng</a></li>
              <li><a href="#" class="hover:text-green-300 transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" class="hover:text-green-300 transition-colors">Chính sách giải quyết khiếu nại</a></li>
              <li><a href="#" class="hover:text-green-300 transition-colors">Quy chế hoạt động</a></li>
              <li><a href="#" class="hover:text-green-300 transition-colors">Chương trình Hoàng Hà Edu</a></li>
              <li><a href="#" class="hover:text-green-300 transition-colors">Quy định về hoá đơn GTGT</a></li>
            </ul>
          </div>

          <!-- Column 2: Thông tin liên hệ -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Thông tin liên hệ</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-green-300 transition-colors">Giới thiệu về Hoàng Hà Mobile</a></li>
              <li><a href="#" class="hover:text-green-300 transition-colors">Thông tin các trang TMĐT</a></li>
              <li><a href="#" class="hover:text-green-300 transition-colors">Chăm sóc khách hàng</a></li>
              <li><a href="#" class="hover:text-green-300 transition-colors">Dịch vụ sửa chữa Hoàng Hà Care</a></li>
              <li><a href="#" class="hover:text-green-300 transition-colors">Khách hàng doanh nghiệp (B2B)</a></li>
              <li><a href="#" class="hover:text-green-300 transition-colors">Tuyển dụng</a></li>
              <li><a href="#" class="hover:text-green-300 transition-colors">Tra cứu đơn hàng</a></li>
              <li><a href="#" class="hover:text-green-300 transition-colors">Tra cứu bảo hành</a></li>
              <li><a href="#" class="hover:text-green-300 transition-colors">Tìm siêu thị (125 cửa hàng)</a></li>
            </ul>
          </div>

          <!-- Column 3: Thanh toán & Vận chuyển -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Thanh toán miễn phí</h3>
            <div class="grid grid-cols-2 gap-2 mb-6">
              <div class="bg-white rounded p-2 text-center">
                <div class="text-xs text-gray-600 font-semibold">VISA</div>
              </div>
              <div class="bg-white rounded p-2 text-center">
                <div class="text-xs text-gray-600 font-semibold">Mastercard</div>
              </div>
              <div class="bg-white rounded p-2 text-center">
                <div class="text-xs text-gray-600 font-semibold">JCB</div>
              </div>
              <div class="bg-white rounded p-2 text-center">
                <div class="text-xs text-gray-600 font-semibold">Samsung Pay</div>
              </div>
              <div class="bg-white rounded p-2 text-center">
                <div class="text-xs text-gray-600 font-semibold">VNPay QR</div>
              </div>
              <div class="bg-white rounded p-2 text-center">
                <div class="text-xs text-gray-600 font-semibold">ZaloPay</div>
              </div>
              <div class="bg-white rounded p-2 text-center">
                <div class="text-xs text-gray-600 font-semibold">Apple Pay</div>
              </div>
            </div>

            <h3 class="text-lg font-semibold mb-4">Hình thức vận chuyển</h3>
            <div class="grid grid-cols-1 gap-2">
              <div class="bg-white rounded p-2 text-center">
                <div class="text-xs text-gray-600 font-semibold">NHAT TIN logistics</div>
              </div>
              <div class="bg-white rounded p-2 text-center">
                <div class="text-xs text-gray-600 font-semibold">VIETNAM POST</div>
              </div>
            </div>
          </div>

          <!-- Column 4: Tư vấn & Kết nối -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Tư vấn mua hàng</h3>
            <div class="mb-6">
              <div class="text-sm mb-2">
                <span class="font-semibold">1900.2091 (Nhánh 1)</span><br>
                <span class="text-green-300">Từ 8h30 - 21h30</span>
              </div>
            </div>

            <h3 class="text-lg font-semibold mb-4">Bảo hành - Hỗ trợ kỹ thuật</h3>
            <div class="mb-6">
              <div class="text-sm mb-2">
                <span class="font-semibold">1900.2091 (Nhánh 2)</span><br>
                <span class="text-green-300">Từ 8h30 - 21h30</span>
              </div>
            </div>

            <h3 class="text-lg font-semibold mb-4">Kết nối với chúng tôi</h3>
            <div class="flex space-x-3 mb-4">
              <a href="#" class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <AkFacebookFill class="w-8 h-8"/>
              </a>
              <a href="#" class="w-8 h-8 bg-black rounded-full flex items-center justify-center  transition-colors">
                <AkTiktokFill class="w-5 h-5"/>
              </a>
              <a href="#" class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <AnFilledYoutube class="w-5 h-5"/>
              </a>
              <a href="#" class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors">
                <BxInstagramAlt class="w-5 h-5"/>
              </a>
              <a href="#" class="w-8 h-8 bg-black rounded-full flex items-center justify-center transition-colors">
                <AkThreadsFill class="w-5 h-5"/>
              </a>
            </div>

             <!-- Regulatory Badge -->
             <div class="bg-blue-600 text-white rounded p-2 text-center shadow-md">
              <div class="text-xs font-bold">ONLINE.GOV.VN</div>
              <div class="text-xs">ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG</div>
            </div>
          </div>
        </div>
      </div>
    </div>

     <!-- Bottom Section -->
     <div class="bg-green-900 text-white py-6 shadow-inner">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-sm space-y-2">
          <p>© 2020. CÔNG TY CỔ PHẦN XÂY DỰNG VÀ ĐẦU TƯ THƯƠNG MẠI HOÀNG HÀ. MST: 0106713191. (Đăng ký lần đầu: Ngày 15 tháng 12 năm 2014, Đăng ký thay đổi ngày 10/07/2025)</p>
          <p>GP số 426/GP-TTĐT do sở TTTT Hà Nội cấp ngày 22/01/2021</p>
          <p>Địa chỉ: Số 89 Đường Tam Trinh, Phường Vĩnh Tuy, Thành Phố Hà Nội, Việt Nam. Điện thoại: 1900.2091. Chịu trách nhiệm nội dung: Hoàng Minh Tâm.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No props needed for this footer component
</script>

<style scoped>
/* Custom styles if needed */
</style>
