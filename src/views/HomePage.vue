<template>
    <section class="pt-48 pb-32 border-b border-slate-900 bg-gradient-to-b from-[#020617] to-[#0f172a]">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <h1 class="text-6xl md:text-8xl font-black text-white leading-none mb-8">
                ADVANCED IDENTITY <br>INFRASTRUCTURE
            </h1>
            <p class="text-2xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed mb-12">
                A high-performance modular suite for Minecraft: Bedrock Edition. Providing industry-standard security since 2021.
            </p>
            <div class="flex flex-wrap justify-center gap-6">
                <RouterLink to="/download" class="px-10 py-5 bg-blue-600 text-white font-black rounded uppercase tracking-wider hover:bg-blue-700 transition">Get Started</RouterLink>
                <RouterLink to="/wiki" class="px-10 py-5 bg-slate-800 text-white font-black rounded uppercase tracking-wider hover:bg-slate-700 transition">Read Documentation</RouterLink>
            </div>
        </div>
    </section>

    <section class="py-16 bg-[#020617] border-b border-slate-900">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div class="text-4xl font-black text-white">2021</div><div class="text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">Established</div></div>
            <div><div class="text-4xl font-black text-white">8+</div><div class="text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">Repositories</div></div>
            <div><div class="text-4xl font-black text-white">OIDC</div><div class="text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">Compliance</div></div>
            <div><div class="text-4xl font-black text-white">2FA</div><div class="text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">Security</div></div>
        </div>
    </section>

    <section class="py-32 bg-[#020617]">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-xs font-black text-blue-500 uppercase tracking-[0.5em] mb-16 text-center">Core Ecosystem</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="p-10 bg-slate-900/40 border border-slate-800 rounded shadow-2xl">
                    <i class="fa-solid fa-key text-blue-500 text-4xl mb-8"></i>
                    <h3 class="text-2xl font-black text-white mb-4 uppercase">XAuth Core</h3>
                    <p class="text-slate-400 leading-relaxed mb-8">Modern authorization plugin for PocketMine-MP. Supports local database, MySQL, and robust 2FA verification.</p>
                    <RouterLink to="/wiki" class="font-black text-xs text-blue-500 uppercase tracking-widest hover:text-blue-400">View Module</RouterLink>
                </div>
                <div class="p-10 bg-slate-900/40 border border-slate-800 rounded shadow-2xl">
                    <i class="fa-solid fa-circle-nodes text-blue-500 text-4xl mb-8"></i>
                    <h3 class="text-2xl font-black text-white mb-4 uppercase">XAuthConnect</h3>
                    <p class="text-slate-400 leading-relaxed mb-8">Full OAuth2 and OpenID Connect server. Bridge your game server with web applications and external services.</p>
                    <RouterLink to="/wiki" class="font-black text-xs text-blue-500 uppercase tracking-widest hover:text-blue-400">View Module</RouterLink>
                </div>
                <div class="p-10 bg-slate-900/10 border border-slate-900 rounded opacity-60">
                    <i class="fa-solid fa-link text-slate-500 text-4xl mb-8"></i>
                    <h3 class="text-2xl font-black text-slate-400 mb-4 uppercase">BindingManager</h3>
                    <p class="text-slate-500 leading-relaxed mb-8">Multi-platform account binding for Telegram and VK. A specialized NewLandPE resource for social linking.</p>
                    <a href="https://github.com/newlandpe/BindingManager" class="font-black text-xs text-slate-500 uppercase tracking-widest hover:text-slate-300">Repository</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router'; // Make sure RouterLink is imported if used directly

onMounted(() => {
    document.title = 'XAuth Ecosystem | Professional Identity Management';
});
</script>

<style scoped>
/* No specific scoped styles needed if all styling is handled by Tailwind CSS */
</style>
