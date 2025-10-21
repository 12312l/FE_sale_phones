<template>
        <div>
            <Header />
        </div>
    <div class="w-[70%] mx-auto">
        <Banner class="mt-5"/>
        <ProductList class="mt-5"/>
    </div>
    <Footer />
</template>

<script setup>
import Banner from '../../components/common/home/Banner.vue';
import Footer from '../../components/common/home/Footer.vue';
import Header from '../../components/common/home/Header.vue';
import ProductList from '../../components/product/ProductList.vue';


</script>

