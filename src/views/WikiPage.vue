<template>
    <div class="max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col md:flex-row gap-16">
        <aside class="w-full md:w-80 shrink-0">
            <nav class="md:sticky md:top-32 space-y-12">
                <div>
                    <h5 class="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Core Documentation</h5>
                    <ul class="space-y-6 border-l border-slate-800 ml-1">
                        <li class="pl-6 border-l-2 border-blue-600 -ml-px text-white font-bold">Quick Start</li>
                        <li class="pl-6 text-slate-500 hover:text-white transition cursor-pointer font-bold uppercase text-xs tracking-widest">Installation</li>
                        <li class="pl-6 text-slate-500 hover:text-white transition cursor-pointer font-bold uppercase text-xs tracking-widest">Configuration</li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Advanced Setup</h5>
                    <ul class="space-y-6 border-l border-slate-800 ml-1">
                        <li class="pl-6 text-slate-500 hover:text-white transition cursor-pointer font-bold uppercase text-xs tracking-widest">OAuth2 Server</li>
                        <li class="pl-6 text-slate-500 hover:text-white transition cursor-pointer font-bold uppercase text-xs tracking-widest">Discord Integration</li>
                    </ul>
                </div>
            </nav>
        </aside>

        <main class="flex-1">
            <div class="prose prose-invert prose-blue prose-h1:font-black prose-h1:uppercase prose-h1:tracking-tighter prose-h1:text-6xl prose-h2:uppercase prose-h2:tracking-tight max-w-none">
                <h1>Introduction</h1>
                <p>Welcome to the official technical documentation for the XAuth Ecosystem. This platform serves as the central hub for developers and server administrators seeking robust identity solutions for Minecraft: Bedrock Edition.</p>

                <div class="my-10 p-8 bg-blue-600/10 border-l-4 border-blue-600 rounded">
                    <p class="m-0 font-black text-blue-500 uppercase tracking-widest text-sm mb-2">Note</p>
                    <p class="m-0 text-slate-400">This ecosystem is modular. You can deploy the XAuth core independently or scale with XAuthConnect for global authentication.</p>
                </div>

                <h2>Project Overview</h2>
                <p>The suite consists of multiple integrated modules designed to work seamlessly within the PocketMine-MP environment.</p>

                <ul>
                    <li><strong>Standardized Security:</strong> Secure password hashing and 2FA.</li>
                    <li><strong>Federated Identity:</strong> Full OAuth2/OIDC implementation.</li>
                    <li><strong>Multi-platform:</strong> Binding players to external social platforms.</li>
                </ul>

                <h2>Next Steps</h2>
                <p>Follow the installation guide to get started with the core plugin, or explore the API documentation if you are building web integrations.</p>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router'; // Make sure RouterLink is imported if used directly

onMounted(() => {
    document.title = 'Documentation | XAuth Ecosystem';
});
</script>

<style scoped>
/* No specific scoped styles needed if all styling is handled by Tailwind CSS */
</style>
