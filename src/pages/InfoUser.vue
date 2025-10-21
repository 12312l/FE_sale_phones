<template>
    <div>
        <Header />
        <div class="flex w-[70%] mx-auto mt-10 gap-5">
            <div class="w-[20%]">
                <SlideBar />
            </div>
            <div class="w-[80%]">
                <router-view class="bg-white rounded-lg shadow-sm p-4"/>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Header from '../components/common/home/Header.vue';
import Footer from '../components/common/home/Footer.vue';
import SlideBar from '../components/user/SlideBar.vue';
import MyProfile from '../components/user/MyProfile.vue';
</script>