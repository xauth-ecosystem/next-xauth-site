<template>
    <footer class="py-20 bg-[#020617] border-t border-slate-900">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div class="col-span-2">
                <div class="font-black text-white text-2xl tracking-tighter mb-6 underline decoration-blue-500 decoration-4">XAUTH ECOSYSTEM</div>
                <p class="max-w-sm text-slate-500 leading-loose uppercase text-xs font-bold tracking-widest">
                    Building secure, connected experiences for Minecraft: Bedrock Edition servers since 2021.
                </p>
            </div>
            <div>
                <h4 class="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Navigation</h4>
                <ul class="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                    <li><RouterLink to="/wiki" class="hover:text-blue-500 transition">Documentation</RouterLink></li>
                    <li><RouterLink to="/download" class="hover:text-blue-500 transition">Downloads</RouterLink></li>
                    <li><RouterLink to="/support" class="hover:text-blue-500 transition">Support</RouterLink></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Connect</h4>
                <ul class="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                    <li><a href="https://github.com/xauth-ecosystem" class="hover:text-white transition">GitHub</a></li>
                    <li><a href="https://t.me/xauth_ecosystem" class="hover:text-white transition">Telegram</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* No specific scoped styles needed if all styling is handled by Tailwind CSS */
</style>
