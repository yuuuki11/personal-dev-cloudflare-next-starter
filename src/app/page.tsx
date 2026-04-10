import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Dynamic Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-900/30 via-emerald-800/10 to-transparent pointer-events-none" />
      <div className="absolute -top-[30%] -left-[10%] w-96 h-96 bg-green-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[30rem] h-[30rem] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Main Content */}
      <main className="z-10 flex flex-col items-center gap-8 px-6 text-center">
        <div className="group relative inline-block">
          <div className="absolute inset-0 bg-green-400 opacity-25 blur-lg rounded-full group-hover:opacity-50 transition-opacity duration-700" />
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-200 to-green-100 drop-shadow-sm mb-4 relative">
            Naganegi Next.js
          </h1>
        </div>

        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed">
          長ネギのようなシャキシャキとしたレスポンスと、<br className="hidden md:block"/>滋味深い SSR / API を備えたモダンウェブアプリケーション。
        </p>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {[
             { title: "Crisp Performance", desc: "Edge環境での超速なレンダリング。" },
             { title: "Deep Flavor", desc: "APIルートとSSRによる奥深い体験。" },
             { title: "Sweet Architecture", desc: "焼けば甘くなる洗練されたコードベース。" }
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-md hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-default group">
              <h3 className="text-xl font-semibold mb-2 text-green-200 group-hover:text-green-300 transition-colors">{item.title}</h3>
              <p className="text-sm text-neutral-400">{item.desc}</p>
            </div>
          ))}
        </section>

        <a 
          href="https://github.com/yuuuki11/personal-dev-cloudflare-next-starter"
          className="mt-12 px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-[0_0_20px_rgba(5,150,105,0.3)] hover:shadow-[0_0_30px_rgba(5,150,105,0.5)] transition-all duration-300"
        >
          View Source
        </a>
      </main>
    </div>
  );
}
