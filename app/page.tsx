import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>XAuth Ecosystem | Professional Identity Management</title>
      </Head>
      <section className="pt-48 pb-32 border-b border-slate-900 bg-gradient-to-b from-[#020617] to-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-8">
            ADVANCED IDENTITY <br />INFRASTRUCTURE
          </h1>
          <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed mb-12">
            A high-performance modular suite for Minecraft: Bedrock Edition. Providing industry-standard security since 2021.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/download" className="px-10 py-5 bg-blue-600 text-white font-black rounded uppercase tracking-wider hover:bg-blue-700 transition">Get Started</Link>
            <Link href="/wiki" className="px-10 py-5 bg-slate-800 text-white font-black rounded uppercase tracking-wider hover:bg-slate-700 transition">Read Documentation</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#020617] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div className="text-4xl font-black text-white">2021</div><div className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">Established</div></div>
          <div><div className="text-4xl font-black text-white">8+</div><div className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">Repositories</div></div>
          <div><div className="text-4xl font-black text-white">OIDC</div><div className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">Compliance</div></div>
          <div><div className="text-4xl font-black text-white">2FA</div><div className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">Security</div></div>
        </div>
      </section>

      <section className="py-32 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.5em] mb-16 text-center">Core Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-slate-900/40 border border-slate-800 rounded shadow-2xl">
              <i className="fa-solid fa-key text-blue-500 text-4xl mb-8"></i>
              <h3 className="text-2xl font-black text-white mb-4 uppercase">XAuth Core</h3>
              <p className="text-slate-400 leading-relaxed mb-8">Modern authorization plugin for PocketMine-MP. Supports local database, MySQL, and robust 2FA verification.</p>
              <Link href="/wiki" className="font-black text-xs text-blue-500 uppercase tracking-widest hover:text-blue-400">View Module</Link>
            </div>
            <div className="p-10 bg-slate-900/40 border border-slate-800 rounded shadow-2xl">
              <i className="fa-solid fa-circle-nodes text-blue-500 text-4xl mb-8"></i>
              <h3 className="text-2xl font-black text-white mb-4 uppercase">XAuthConnect</h3>
              <p className="text-slate-400 leading-relaxed mb-8">Full OAuth2 and OpenID Connect server. Bridge your game server with web applications and external services.</p>
              <Link href="/wiki" className="font-black text-xs text-blue-500 uppercase tracking-widest hover:text-blue-400">View Module</Link>
            </div>
            <div className="p-10 bg-slate-900/10 border border-slate-900 rounded opacity-60">
              <i className="fa-solid fa-link text-slate-500 text-4xl mb-8"></i>
              <h3 className="text-2xl font-black text-slate-400 mb-4 uppercase">BindingManager</h3>
              <p className="text-slate-500 leading-relaxed mb-8">Multi-platform account binding for Telegram and VK. A specialized NewLandPE resource for social linking.</p>
              <a href="https://github.com/newlandpe/BindingManager" className="font-black text-xs text-slate-500 uppercase tracking-widest hover:text-slate-300">Repository</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}