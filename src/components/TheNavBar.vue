<template>
    <nav class="fixed top-0 w-full z-50 bg-[#020617]/95 backdrop-blur-sm border-b border-slate-800">
        <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <RouterLink to="/" class="flex items-center gap-3 font-black text-white text-2xl tracking-tighter">
                <i class="fa-solid fa-shield-halved text-blue-500"></i> XAUTH
            </RouterLink>
            <div class="hidden md:flex items-center gap-10 text-[14px] font-bold uppercase tracking-widest">
                <RouterLink to="/" :class="{ 'text-blue-500': route.path === '/' }">Overview</RouterLink>
                <RouterLink to="/wiki" class="transition" :class="{ 'text-blue-500': route.path === '/wiki', 'hover:text-white': route.path !== '/wiki' }">Wiki</RouterLink>
                <RouterLink to="/download" class="transition" :class="{ 'text-blue-500': route.path === '/download', 'hover:text-white': route.path !== '/download' }">Downloads</RouterLink>
                <RouterLink to="/support" class="transition" :class="{ 'text-blue-500': route.path === '/support', 'hover:text-white': route.path !== '/support' }">Support</RouterLink>
                <a href="https://github.com/xauth-ecosystem" class="text-slate-500 hover:text-white transition">
                    <i class="fa-brands fa-github text-xl"></i>
                </a>
            </div>
            <button class="md:hidden text-white text-2xl" @click="toggleMobileMenu">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
        <div id="mobile-menu" :class="{ 'hidden': !isMobileMenuOpen }" class="md:hidden bg-[#020617] border-t border-slate-800">
            <div class="px-6 py-4 space-y-4">
                <RouterLink to="/" class="block font-bold uppercase tracking-widest" :class="{ 'text-blue-500': route.path === '/' }">Overview</RouterLink>
                <RouterLink to="/wiki" class="block transition font-bold uppercase tracking-widest" :class="{ 'text-blue-500': route.path === '/wiki', 'hover:text-white': route.path !== '/wiki' }">Wiki</RouterLink>
                <RouterLink to="/download" class="block transition font-bold uppercase tracking-widest" :class="{ 'text-blue-500': route.path === '/download', 'hover:text-white': route.path !== '/download' }">Downloads</RouterLink>
                <RouterLink to="/support" class="block transition font-bold uppercase tracking-widest" :class="{ 'text-blue-500': route.path === '/support', 'hover:text-white': route.path !== '/support' }">Support</RouterLink>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const isMobileMenuOpen = ref(false);
const route = useRoute();

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
/* No specific scoped styles needed if all styling is handled by Tailwind CSS */
</style>
