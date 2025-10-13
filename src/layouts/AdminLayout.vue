<!-- <script setup>
import Login from './pages/auth/Login.vue';

</script>

<template>
  <Login />
</template> -->

<template>
    <ThemeProvider>
      <SidebarProvider>
        <RouterView />
      </SidebarProvider>
    </ThemeProvider>
  </template>
  
  <script setup lang="ts">
  import ThemeProvider from '../components/layout/ThemeProvider.vue'
  import SidebarProvider from '../components/layout/SidebarProvider.vue'
  </script>