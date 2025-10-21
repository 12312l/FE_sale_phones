<template>
    <div>
        <Header />
        <div class="w-[70%] mx-auto mt-10">
            <ProductDetail />
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Header from '../components/common/home/Header.vue';
import Footer from '../components/common/home/Footer.vue';
import ProductDetail from '../components/common/productdetail/ProductDetail.vue';
</script>