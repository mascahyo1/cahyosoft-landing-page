<template>
  <NuxtLayout>
    <!-- Hero Section -->
    <section id="beranda" class="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900">
      <!-- Background decorative blobs -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-3xl animate-float"></div>
        <div class="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-3xl animate-float" style="animation-delay: 1.5s;"></div>
        <div class="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-emerald-400/10 dark:bg-emerald-600/10 blur-3xl animate-float" style="animation-delay: 3s;"></div>
      </div>

      <div class="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Left: Text -->
          <div class="scroll-reveal text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <i class="fas fa-rocket text-xs"></i>
              <span>Transformasi Digital Anda Dimulai di Sini</span>
            </div>
            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight">
              Solusi Digital <span class="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent animate-gradient">Cerdas</span> untuk Masa Depan Bisnis Anda
            </h1>
            <p class="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
              Dari konsultasi strategis hingga pengembangan sistem ERP yang kompleks, Cahyosoft menghadirkan teknologi yang dirancang khusus untuk pertumbuhan bisnis Anda.
            </p>
            <div class="mt-8 flex items-center gap-x-6 justify-center lg:justify-start">
              <NuxtLink to="#kontak" class="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all active:scale-95">
                Mulai Sekarang
              </NuxtLink>
              <NuxtLink to="#layanan" class="group text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                Lihat Layanan
                <i class="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </NuxtLink>
            </div>
          </div>

          <!-- Right: Hero Illustration -->
          <div class="scroll-reveal hidden lg:block">
            <div class="relative">
              <!-- Main illustration card -->
              <div class="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 animate-float">
                <!-- Browser mockup -->
                <div class="flex items-center gap-1.5 mb-4">
                  <div class="w-3 h-3 rounded-full bg-red-400"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div class="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div class="space-y-3">
                  <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  <!-- Stats cards -->
                  <div class="grid grid-cols-2 gap-3 mt-4">
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-3">
                      <i class="fas fa-chart-line text-blue-500 text-lg mb-1"></i>
                      <div class="h-4 bg-blue-200 dark:bg-blue-700 rounded w-3/4 mt-1"></div>
                      <div class="h-2 bg-blue-100 dark:bg-blue-800 rounded w-1/2 mt-1"></div>
                    </div>
                    <div class="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-xl p-3">
                      <i class="fas fa-users text-emerald-500 text-lg mb-1"></i>
                      <div class="h-4 bg-emerald-200 dark:bg-emerald-700 rounded w-3/4 mt-1"></div>
                      <div class="h-2 bg-emerald-100 dark:bg-emerald-800 rounded w-1/2 mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Decorative elements behind the card -->
              <div class="absolute -top-6 -right-6 w-full h-full bg-blue-600/10 dark:bg-blue-500/10 rounded-2xl -z-10"></div>
              <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl -z-10 rotate-12"></div>
              <div class="absolute -top-4 -right-4 w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg -z-10 -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="layanan" class="relative bg-gray-50 dark:bg-gray-800/50 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6">
        <div class="scroll-reveal mx-auto max-w-2xl text-center">
          <h2 class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Layanan Kami</h2>
          <p class="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Solusi Digital yang Kami Tawarkan
          </p>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Dari strategi hingga implementasi, kami siap membantu perjalanan digital Anda.
          </p>
        </div>
        <div class="mt-16 grid gap-8 md:grid-cols-3">
          <!-- Konsultasi Web -->
          <div class="scroll-reveal group flex flex-col bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
            <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-comments text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Konsultasi Web</h3>
            <p class="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
              Strategi digital yang tepat sasaran untuk memastikan kehadiran online bisnis Anda memberikan dampak yang maksimal.
            </p>
            <div class="mt-6 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:gap-3 transition-all">
              <span>Pelajari lebih lanjut</span>
              <i class="fas fa-chevron-right text-xs"></i>
            </div>
          </div>
          <!-- Pengembangan Web -->
          <div class="scroll-reveal group flex flex-col bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300" style="transition-delay: 0.1s;">
            <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/50 dark:to-indigo-800/50 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-code text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Pengembangan Web Kustom</h3>
            <p class="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
              Website yang cepat, responsif, dan aman, dibangun dengan teknologi terbaru untuk performa terbaik.
            </p>
            <div class="mt-6 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium text-sm group-hover:gap-3 transition-all">
              <span>Pelajari lebih lanjut</span>
              <i class="fas fa-chevron-right text-xs"></i>
            </div>
          </div>
          <!-- Optimasi Responsif -->
          <div class="scroll-reveal group flex flex-col bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300" style="transition-delay: 0.2s;">
            <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/50 dark:to-emerald-800/50 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-mobile-alt text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Optimasi Responsif</h3>
            <p class="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
              Memastikan pengalaman pengguna yang mulus di berbagai perangkat, mulai dari smartphone hingga desktop layar lebar.
            </p>
            <div class="mt-6 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium text-sm group-hover:gap-3 transition-all">
              <span>Pelajari lebih lanjut</span>
              <i class="fas fa-chevron-right text-xs"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Features Section -->
    <section id="teknologi" class="relative bg-white dark:bg-gray-900 py-24 sm:py-32 overflow-hidden">
      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(96,165,250,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.04)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

      <div class="relative mx-auto max-w-7xl px-6">
        <div class="scroll-reveal mx-auto max-w-2xl text-center">
          <h2 class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Keunggulan Teknologi</h2>
          <p class="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Dibangun dengan Teknologi Modern
          </p>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Setiap solusi kami dilengkapi dengan fitur enterprise-grade yang siap mendukung skala bisnis Anda.
          </p>
        </div>

        <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Single Page App -->
          <div class="scroll-reveal group flex flex-col bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300">
            <div class="flex items-center gap-4 mb-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-bolt text-xl"></i>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">Single Page App</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
              Aplikasi berbasis SPA dengan navigasi instan tanpa reload halaman. Pengalaman pengguna yang cepat dan mulus seperti aplikasi native, didukung oleh Vue 3 dan Nuxt 4.
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="text-xs px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Vue 3</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Nuxt 4</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">SSR/CSR</span>
            </div>
          </div>

          <!-- Light & Dark Mode -->
          <div class="scroll-reveal group flex flex-col bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-800 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300" style="transition-delay: 0.05s;">
            <div class="flex items-center gap-4 mb-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/40 dark:to-indigo-800/40 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-circle-half-stroke text-xl"></i>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">Light & Dark Mode</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
              Tema otomatis mengikuti preferensi sistem operasi pengguna. Mendukung peralihan manual dengan penyimpanan preferensi personal yang persisten di browser.
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="text-xs px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">System-aware</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Persistent</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">Tailwind v4</span>
            </div>
          </div>

          <!-- Integrasi AI -->
          <div class="scroll-reveal group flex flex-col bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-violet-200 dark:hover:border-violet-800 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300" style="transition-delay: 0.1s;">
            <div class="flex items-center gap-4 mb-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-900/40 dark:to-violet-800/40 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-brain text-xl"></i>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">Integrasi AI</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
              Sistem cerdas dengan AI untuk chatbot layanan pelanggan, rekomendasi cerdas, analisis prediktif bisnis, dan otomatisasi proses yang meningkatkan efisiensi operasional.
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="text-xs px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">Chatbot</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">Prediktif</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">LLM/RAG</span>
            </div>
          </div>

          <!-- Integrasi Payment Gateway -->
          <div class="scroll-reveal group flex flex-col bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-emerald-200 dark:hover:border-emerald-800 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300" style="transition-delay: 0.15s;">
            <div class="flex items-center gap-4 mb-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/40 dark:to-emerald-800/40 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-credit-card text-xl"></i>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">Integrasi Payment Gateway</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
              Dukungan multi payment gateway: Midtrans, Xendit, Stripe, dan lainnya. Proses pembayaran aman dengan enkripsi end-to-end dan sertifikasi PCI DSS.
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="text-xs px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">Midtrans</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">Xendit</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">Stripe</span>
            </div>
          </div>

          <!-- Integrasi WhatsApp -->
          <div class="scroll-reveal group flex flex-col bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-amber-200 dark:hover:border-amber-800 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300" style="transition-delay: 0.2s;">
            <div class="flex items-center gap-4 mb-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/40 dark:to-amber-800/40 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
                <i class="fab fa-whatsapp text-xl"></i>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">Integrasi WhatsApp</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
              WhatsApp Business API terintegrasi langsung ke sistem: notifikasi otomatis, chatbot layanan 24/7, broadcast pelanggan, dan WhatsApp Commerce untuk katalog produk.
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="text-xs px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">WABA</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">Blast</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">Commerce</span>
            </div>
          </div>

          <!-- IAM Enterprise RBAC -->
          <div class="scroll-reveal group flex flex-col bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-rose-200 dark:hover:border-rose-800 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300" style="transition-delay: 0.25s;">
            <div class="flex items-center gap-4 mb-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-900/40 dark:to-rose-800/40 text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-shield-halved text-xl"></i>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">IAM Enterprise RBAC</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
              Sistem hak akses granular enterprise-grade dengan Role-Based Access Control yang fleksibel. Permission kustom per modul, multi-role user, audit log lengkap, dan integrasi SSO/SAML.
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="text-xs px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300">RBAC</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300">SSO/SAML</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300">Audit Trail</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300">Granular</span>
            </div>
          </div>

          <!-- Tampilan Responsif -->
          <div class="scroll-reveal group flex flex-col bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-cyan-200 dark:hover:border-cyan-800 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300" style="transition-delay: 0.3s;">
            <div class="flex items-center gap-4 mb-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900/40 dark:to-cyan-800/40 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-tablet-screen-button text-xl"></i>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">Tampilan Responsif</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
              Desain fully responsive yang beradaptasi sempurna di semua ukuran layar — dari smartphone, tablet, hingga desktop. Mobile-first approach dengan touch-friendly UI components.
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="text-xs px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300">Mobile-first</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300">Adaptive</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300">Touch UI</span>
            </div>
          </div>

          <!-- Real Time -->
          <div class="scroll-reveal group flex flex-col bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-teal-200 dark:hover:border-teal-800 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300" style="transition-delay: 0.35s;">
            <div class="flex items-center gap-4 mb-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900/40 dark:to-teal-800/40 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-clock-rotate-left text-xl"></i>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">Real Time</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
              Update data secara instan tanpa refresh halaman dengan WebSocket dan Server-Sent Events. Notifikasi real-time, live dashboard, dan kolaborasi tim yang mulus dalam satu platform.
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="text-xs px-2.5 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">WebSocket</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">SSE</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">Live Sync</span>
            </div>
          </div>

          <!-- Automated Testing with Screenshot & Video -->
          <div class="scroll-reveal group flex flex-col bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-purple-200 dark:hover:border-purple-800 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300" style="transition-delay: 0.4s;">
            <div class="flex items-center gap-4 mb-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-vials text-xl"></i>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">Automated Testing</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
              Quality assurance yang lebih mudah dan confident dengan automated testing. Setiap pengujian dilengkapi screenshot dan video recording otomatis untuk validasi visual yang detail dan dokumentasi yang lengkap.
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="text-xs px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Screenshot</span>
              <span class="text-xs px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">Video Recording</span>
            </div>
          </div>
        </div>

        <!-- Bottom highlight -->
        <div class="scroll-reveal mt-16 text-center">
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            Semua fitur di atas tersedia <span class="font-semibold text-gray-700 dark:text-gray-300">out-of-the-box</span> dan dapat dikustomisasi sesuai kebutuhan spesifik bisnis Anda.
          </p>
        </div>
      </div>
    </section>

    <!-- ERP Solutions Section -->
    <section id="erp" class="relative bg-white dark:bg-gray-900 py-24 sm:py-32 overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MGE1ZmEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50 pointer-events-none"></div>

      <div class="relative mx-auto max-w-7xl px-6">
        <div class="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2 items-center">
          <!-- Left: Text -->
          <div class="scroll-reveal">
            <h2 class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Solusi ERP Terintegrasi</h2>
            <p class="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Optimalkan Operasional Bisnis Anda
            </p>
            <p class="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Kami menyediakan modul ERP yang dapat dikustomisasi sesuai kebutuhan industri Anda. Semua terintegrasi dalam satu platform berbasis web.
            </p>

            <!-- Feature list with images -->
            <dl class="mt-10 space-y-6">
              <div class="scroll-reveal group flex gap-4 p-3 -mx-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div class="flex-shrink-0 mt-1">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                    <i class="fas fa-users-cog text-lg"></i>
                  </div>
                </div>
                <div>
                  <dt class="font-bold text-gray-900 dark:text-white">HRIS</dt>
                  <dd class="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Manajemen karyawan, penggajian, absensi, dan penilaian kinerja secara otomatis.</dd>
                </div>
              </div>
              <div class="scroll-reveal group flex gap-4 p-3 -mx-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div class="flex-shrink-0 mt-1">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/40 dark:to-indigo-800/40 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                    <i class="fas fa-calculator text-lg"></i>
                  </div>
                </div>
                <div>
                  <dt class="font-bold text-gray-900 dark:text-white">Akuntansi & Keuangan</dt>
                  <dd class="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Laporan keuangan real-time, manajemen pajak, dan pelacakan arus kas yang akurat.</dd>
                </div>
              </div>
              <div class="scroll-reveal group flex gap-4 p-3 -mx-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div class="flex-shrink-0 mt-1">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/40 dark:to-emerald-800/40 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                    <i class="fas fa-cash-register text-lg"></i>
                  </div>
                </div>
                <div>
                  <dt class="font-bold text-gray-900 dark:text-white">POS & Inventory</dt>
                  <dd class="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Sistem kasir modern terintegrasi dengan stok barang di berbagai cabang.</dd>
                </div>
              </div>
              <div class="scroll-reveal group flex gap-4 p-3 -mx-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div class="flex-shrink-0 mt-1">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/40 dark:to-amber-800/40 text-amber-600 dark:text-amber-400 group-hover:scale-105 transition-transform">
                    <i class="fas fa-handshake text-lg"></i>
                  </div>
                </div>
                <div>
                  <dt class="font-bold text-gray-900 dark:text-white">CXM / CRM</dt>
                  <dd class="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Manajemen hubungan pelanggan untuk meningkatkan loyalitas dan penjualan.</dd>
                </div>
              </div>
            </dl>
          </div>

          <!-- Right: Dashboard Mockup -->
          <div class="scroll-reveal relative lg:ml-auto lg:max-w-lg w-full">
            <div class="relative">
              <!-- Dashboard card -->
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <!-- Dashboard header -->
                <div class="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 px-5 py-3 flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <i class="fas fa-chart-pie text-white text-sm"></i>
                    <span class="text-white font-semibold text-sm">Dashboard ERP</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <div class="w-2 h-2 rounded-full bg-white/60"></div>
                    <div class="w-2 h-2 rounded-full bg-white/60"></div>
                    <div class="w-2 h-2 rounded-full bg-white/60"></div>
                  </div>
                </div>
                <!-- Dashboard content -->
                <div class="p-5 space-y-5">
                  <!-- Stats row -->
                  <div class="grid grid-cols-3 gap-3">
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 text-center">
                      <div class="text-blue-600 dark:text-blue-400 text-xl font-bold">$2.4M</div>
                      <div class="text-gray-500 dark:text-gray-400 text-xs mt-1">Revenue</div>
                    </div>
                    <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-3 text-center">
                      <div class="text-emerald-600 dark:text-emerald-400 text-xl font-bold">+12%</div>
                      <div class="text-gray-500 dark:text-gray-400 text-xs mt-1">Growth</div>
                    </div>
                    <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-3 text-center">
                      <div class="text-indigo-600 dark:text-indigo-400 text-xl font-bold">847</div>
                      <div class="text-gray-500 dark:text-gray-400 text-xs mt-1">Orders</div>
                    </div>
                  </div>
                  <!-- Mini bar chart -->
                  <div>
                    <div class="text-sm font-semibold text-gray-900 dark:text-white mb-3">Monthly Sales</div>
                    <div class="flex items-end gap-2 h-24">
                      <div class="flex-1 bg-blue-200 dark:bg-blue-800 rounded-t-md h-3/5 hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors cursor-pointer relative group/chart">
                        <div class="opacity-0 group-hover/chart:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap transition-opacity pointer-events-none">Jan</div>
                      </div>
                      <div class="flex-1 bg-blue-200 dark:bg-blue-800 rounded-t-md h-4/5 hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors cursor-pointer relative group/chart">
                        <div class="opacity-0 group-hover/chart:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap transition-opacity pointer-events-none">Feb</div>
                      </div>
                      <div class="flex-1 bg-blue-200 dark:bg-blue-800 rounded-t-md h-2/4 hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors cursor-pointer relative group/chart">
                        <div class="opacity-0 group-hover/chart:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap transition-opacity pointer-events-none">Mar</div>
                      </div>
                      <div class="flex-1 bg-blue-200 dark:bg-blue-800 rounded-t-md h-full hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors cursor-pointer relative group/chart">
                        <div class="opacity-0 group-hover/chart:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap transition-opacity pointer-events-none">Apr</div>
                      </div>
                      <div class="flex-1 bg-blue-200 dark:bg-blue-800 rounded-t-md h-3/4 hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors cursor-pointer relative group/chart">
                        <div class="opacity-0 group-hover/chart:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap transition-opacity pointer-events-none">May</div>
                      </div>
                      <div class="flex-1 bg-blue-200 dark:bg-blue-800 rounded-t-md h-4/5 hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors cursor-pointer relative group/chart">
                        <div class="opacity-0 group-hover/chart:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap transition-opacity pointer-events-none">Jun</div>
                      </div>
                    </div>
                  </div>
                  <!-- Recent orders table -->
                  <div>
                    <div class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Recent Orders</div>
                    <div class="space-y-2">
                      <div class="flex items-center justify-between text-sm py-1.5 px-2 rounded-lg bg-gray-50 dark:bg-gray-900">
                        <span class="text-gray-600 dark:text-gray-400">INV-001</span>
                        <span class="text-emerald-600 dark:text-emerald-400 font-medium">$480</span>
                        <span class="text-xs text-gray-400">Paid</span>
                      </div>
                      <div class="flex items-center justify-between text-sm py-1.5 px-2 rounded-lg bg-gray-50 dark:bg-gray-900">
                        <span class="text-gray-600 dark:text-gray-400">INV-002</span>
                        <span class="text-emerald-600 dark:text-emerald-400 font-medium">$1,250</span>
                        <span class="text-xs text-gray-400">Paid</span>
                      </div>
                      <div class="flex items-center justify-between text-sm py-1.5 px-2 rounded-lg bg-amber-50 dark:bg-amber-900/10">
                        <span class="text-gray-600 dark:text-gray-400">INV-003</span>
                        <span class="text-amber-600 dark:text-amber-400 font-medium">$890</span>
                        <span class="text-xs text-amber-500">Pending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Decorative behind -->
              <div class="absolute -top-6 -right-6 w-full h-full bg-blue-600/5 dark:bg-blue-500/10 rounded-2xl -z-10"></div>
              <div class="absolute -bottom-8 -left-8 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/20 rounded-2xl -z-10 rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section id="tentang" class="relative bg-gray-50 dark:bg-gray-800/50 py-24 sm:py-32 overflow-hidden">
      <!-- Decorative -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div class="relative mx-auto max-w-7xl px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Left: Visual -->
          <div class="scroll-reveal relative order-last lg:order-first">
            <div class="relative">
              <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <!-- Company illustration -->
                <div class="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                  <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">CS</div>
                  <div>
                    <div class="text-lg font-bold text-gray-900 dark:text-white">Cahyosoft</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">Software House & IT Consultant</div>
                  </div>
                </div>
                <!-- Stats -->
                <div class="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div class="text-2xl font-extrabold text-blue-600 dark:text-blue-400">{{ profile.company.yearsExperience }}+</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Tahun Pengalaman</div>
                  </div>
                  <div>
                    <div class="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">{{ profile.company.totalClients }}+</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Klien Puas</div>
                  </div>
                  <div>
                    <div class="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">{{ profile.company.totalProjects }}+</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Proyek Selesai</div>
                  </div>
                </div>
                <!-- Mission highlight -->
                <div class="mt-6 flex items-start gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                  <i class="fas fa-quote-right text-blue-400 dark:text-blue-500 text-lg mt-1"></i>
                  <p class="text-sm text-blue-800 dark:text-blue-300 leading-relaxed italic">
                    Misi kami adalah menghadirkan solusi digital yang memberdayakan bisnis Indonesia untuk bersaing di era global melalui teknologi yang inovatif dan terjangkau.
                  </p>
                </div>
              </div>
              <!-- Decorative shapes -->
              <div class="absolute -top-4 -right-4 w-full h-full bg-blue-600/5 dark:bg-blue-500/10 rounded-2xl -z-10"></div>
              <div class="absolute -bottom-3 -left-3 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl -z-10 rotate-12"></div>
            </div>
          </div>

          <!-- Right: Text -->
          <div class="scroll-reveal">
            <h2 class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Tentang Kami</h2>
            <p class="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Partner Teknologi Terpercaya untuk Bisnis Anda
            </p>
            <p class="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Cahyosoft adalah software house dan konsultan IT yang berfokus pada pengembangan aplikasi web modern dan solusi ERP untuk bisnis skala UKM hingga enterprise. Kami menggabungkan keahlian teknis dengan pemahaman mendalam tentang proses bisnis untuk menghasilkan solusi yang tepat guna.
            </p>
            <p class="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Didirikan dengan visi untuk mendigitalisasi bisnis Indonesia, kami telah membantu puluhan klien dari berbagai industri — manufaktur, retail, jasa, dan distribusi — dalam mengoptimalkan operasional mereka melalui teknologi.
            </p>

            <!-- Values -->
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div class="flex items-center gap-3">
                <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <i class="fas fa-check-circle text-sm"></i>
                </div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Solusi yang Dapat Dikustomisasi</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <i class="fas fa-check-circle text-sm"></i>
                </div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Standar Keamanan Enterprise</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <i class="fas fa-check-circle text-sm"></i>
                </div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Dukungan Teknis 24/7</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <i class="fas fa-check-circle text-sm"></i>
                </div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Teknologi Modern & Terbaru</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Workflow Section: Plane.so Project Management -->
    <section id="workflow" class="relative bg-white dark:bg-gray-900 py-24 sm:py-32 overflow-hidden">
      <!-- Background decorative blobs -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl"></div>
        <div class="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl"></div>
      </div>

      <div class="relative mx-auto max-w-7xl px-6">
        <!-- Section Header -->
        <div class="scroll-reveal mx-auto max-w-3xl text-center">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <i class="fas fa-diagram-project text-xs"></i>
            <span>Workflow Profesional</span>
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Manajemen Proyek <span class="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Modern & Transparan</span>
          </h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Setiap request Anda dikelola di <strong>Plane.so</strong> — platform project management open-source — dengan bantuan <strong>MCP Notion</strong> untuk dokumentasi otomatis. Anda bisa melihat progress secara real-time.
          </p>
        </div>

        <!-- Workflow Steps -->
        <div class="scroll-reveal mt-12 grid gap-4 sm:grid-cols-4 max-w-5xl mx-auto">
          <div class="relative flex flex-col items-center text-center p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 border border-blue-100 dark:border-blue-900/40">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white text-lg font-bold mb-3 shadow-md shadow-blue-600/30">1</div>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm">Request Masuk</h3>
            <p class="mt-1 text-xs text-gray-600 dark:text-gray-400">Anda mengirim brief kebutuhan</p>
          </div>
          <div class="relative flex flex-col items-center text-center p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-900/20 dark:to-indigo-800/10 border border-indigo-100 dark:border-indigo-900/40">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white text-lg font-bold mb-3 shadow-md shadow-indigo-600/30">2</div>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm">AI Bikin Task</h3>
            <p class="mt-1 text-xs text-gray-600 dark:text-gray-400">Otomatis dibuat di Plane.so</p>
          </div>
          <div class="relative flex flex-col items-center text-center p-5 rounded-2xl bg-gradient-to-br from-violet-50 to-violet-100/50 dark:from-violet-900/20 dark:to-violet-800/10 border border-violet-100 dark:border-violet-900/40">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white text-lg font-bold mb-3 shadow-md shadow-violet-600/30">3</div>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm">Eksekusi & Test</h3>
            <p class="mt-1 text-xs text-gray-600 dark:text-gray-400">Dev kerja, auto-update progress</p>
          </div>
          <div class="relative flex flex-col items-center text-center p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-900/20 dark:to-emerald-800/10 border border-emerald-100 dark:border-emerald-900/40">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white text-lg font-bold mb-3 shadow-md shadow-emerald-600/30">4</div>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm">Dokumentasi</h3>
            <p class="mt-1 text-xs text-gray-600 dark:text-gray-400">Auto-publish ke Notion + screenshot</p>
          </div>
        </div>

        <!-- Plane.so Kanban Mockup -->
        <div class="scroll-reveal mt-16">
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <!-- Kanban Header -->
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 px-5 py-3 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-400"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div class="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div class="flex items-center gap-2 ml-3">
                  <i class="fas fa-layer-group text-blue-400 text-sm"></i>
                  <span class="text-white font-semibold text-sm">Plane.so — Project Board</span>
                </div>
              </div>
              <div class="hidden sm:flex items-center gap-2 text-xs text-gray-300">
                <span class="px-2 py-1 rounded bg-white/10">Sprint 14</span>
                <span class="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300">
                  <i class="fas fa-circle text-[8px] mr-1"></i>On Track
                </span>
              </div>
            </div>

            <!-- Kanban Board -->
            <div class="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-50 dark:bg-gray-900/50">
              <!-- Column: Backlog -->
              <div class="bg-gray-100/70 dark:bg-gray-800/60 rounded-xl p-3">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-gray-400"></span>
                    <h4 class="font-semibold text-gray-700 dark:text-gray-300 text-sm">Backlog</h4>
                  </div>
                  <span class="text-xs text-gray-500 bg-white dark:bg-gray-900 px-2 py-0.5 rounded-full">4</span>
                </div>
                <div class="space-y-2">
                  <div class="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div class="flex items-center gap-1.5 mb-1.5">
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">CS-101</span>
                      <span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">feature</span>
                    </div>
                    <p class="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug">Integrasi payment gateway Midtrans</p>
                    <div class="flex items-center justify-between mt-2">
                      <div class="flex -space-x-1.5">
                        <div class="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white dark:border-gray-900"></div>
                      </div>
                      <span class="text-[10px] text-gray-400">Mar 20</span>
                    </div>
                  </div>
                  <div class="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div class="flex items-center gap-1.5 mb-1.5">
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">CS-102</span>
                      <span class="text-[10px] px-1.5 py-0.5 rounded bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300">research</span>
                    </div>
                    <p class="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug">Riset modul HRIS untuk retail</p>
                    <div class="flex items-center justify-between mt-2">
                      <div class="flex -space-x-1.5">
                        <div class="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white dark:border-gray-900"></div>
                      </div>
                      <span class="text-[10px] text-gray-400">Mar 22</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Column: In Progress -->
              <div class="bg-amber-50/70 dark:bg-amber-900/10 rounded-xl p-3">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    <h4 class="font-semibold text-gray-700 dark:text-gray-300 text-sm">In Progress</h4>
                  </div>
                  <span class="text-xs text-amber-700 dark:text-amber-300 bg-white dark:bg-gray-900 px-2 py-0.5 rounded-full">2</span>
                </div>
                <div class="space-y-2">
                  <div class="bg-white dark:bg-gray-900 rounded-lg p-3 border-l-4 border-amber-500 border-y border-r border-gray-200 dark:border-gray-700 shadow-sm">
                    <div class="flex items-center gap-1.5 mb-1.5">
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">CS-098</span>
                      <span class="text-[10px] px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300">urgent</span>
                    </div>
                    <p class="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug">Fix bug login session di mobile</p>
                    <div class="flex items-center justify-between mt-2">
                      <div class="flex -space-x-1.5">
                        <div class="w-5 h-5 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 border-2 border-white dark:border-gray-900"></div>
                        <div class="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-white dark:border-gray-900"></div>
                      </div>
                      <span class="text-[10px] text-amber-600 dark:text-amber-400 font-medium">65%</span>
                    </div>
                    <div class="mt-1.5 h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div class="h-full bg-amber-500 rounded-full" style="width: 65%"></div>
                    </div>
                  </div>
                  <div class="bg-white dark:bg-gray-900 rounded-lg p-3 border-l-4 border-amber-500 border-y border-r border-gray-200 dark:border-gray-700 shadow-sm">
                    <div class="flex items-center gap-1.5 mb-1.5">
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">CS-099</span>
                      <span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">feature</span>
                    </div>
                    <p class="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug">Dashboard analytics untuk ERP</p>
                    <div class="flex items-center justify-between mt-2">
                      <div class="flex -space-x-1.5">
                        <div class="w-5 h-5 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 border-2 border-white dark:border-gray-900"></div>
                      </div>
                      <span class="text-[10px] text-amber-600 dark:text-amber-400 font-medium">40%</span>
                    </div>
                    <div class="mt-1.5 h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div class="h-full bg-amber-500 rounded-full" style="width: 40%"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Column: In Review -->
              <div class="bg-violet-50/70 dark:bg-violet-900/10 rounded-xl p-3">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-violet-500"></span>
                    <h4 class="font-semibold text-gray-700 dark:text-gray-300 text-sm">In Review</h4>
                  </div>
                  <span class="text-xs text-violet-700 dark:text-violet-300 bg-white dark:bg-gray-900 px-2 py-0.5 rounded-full">2</span>
                </div>
                <div class="space-y-2">
                  <div class="bg-white dark:bg-gray-900 rounded-lg p-3 border-l-4 border-violet-500 border-y border-r border-gray-200 dark:border-gray-700 shadow-sm">
                    <div class="flex items-center gap-1.5 mb-1.5">
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">CS-095</span>
                      <span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">testing</span>
                    </div>
                    <p class="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug">QA testing modul inventory</p>
                    <div class="flex items-center justify-between mt-2">
                      <div class="flex -space-x-1.5">
                        <div class="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white dark:border-gray-900"></div>
                      </div>
                      <span class="text-[10px] text-gray-400">PR #234</span>
                    </div>
                  </div>
                  <div class="bg-white dark:bg-gray-900 rounded-lg p-3 border-l-4 border-violet-500 border-y border-r border-gray-200 dark:border-gray-700 shadow-sm">
                    <div class="flex items-center gap-1.5 mb-1.5">
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">CS-096</span>
                      <span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">docs</span>
                    </div>
                    <p class="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug">Auto-generate docs via MCP Notion</p>
                    <div class="flex items-center justify-between mt-2">
                      <div class="flex -space-x-1.5">
                        <div class="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-white dark:border-gray-900"></div>
                      </div>
                      <span class="text-[10px] text-gray-400">PR #235</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Column: Done -->
              <div class="bg-emerald-50/70 dark:bg-emerald-900/10 rounded-xl p-3">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <h4 class="font-semibold text-gray-700 dark:text-gray-300 text-sm">Done</h4>
                  </div>
                  <span class="text-xs text-emerald-700 dark:text-emerald-300 bg-white dark:bg-gray-900 px-2 py-0.5 rounded-full">3</span>
                </div>
                <div class="space-y-2">
                  <div class="bg-white dark:bg-gray-900 rounded-lg p-3 border-l-4 border-emerald-500 border-y border-r border-gray-200 dark:border-gray-700 shadow-sm opacity-90">
                    <div class="flex items-center gap-1.5 mb-1.5">
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">CS-090</span>
                      <i class="fas fa-check-circle text-emerald-500 text-[10px]"></i>
                    </div>
                    <p class="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug line-through opacity-70">Setup auth & RBAC system</p>
                    <div class="flex items-center justify-between mt-2">
                      <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium"><i class="fas fa-check mr-1"></i>Passed</span>
                      <span class="text-[10px] text-gray-400">Mar 15</span>
                    </div>
                  </div>
                  <div class="bg-white dark:bg-gray-900 rounded-lg p-3 border-l-4 border-emerald-500 border-y border-r border-gray-200 dark:border-gray-700 shadow-sm opacity-90">
                    <div class="flex items-center gap-1.5 mb-1.5">
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">CS-091</span>
                      <i class="fas fa-check-circle text-emerald-500 text-[10px]"></i>
                    </div>
                    <p class="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug line-through opacity-70">Landing page responsive</p>
                    <div class="flex items-center justify-between mt-2">
                      <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium"><i class="fas fa-check mr-1"></i>Passed</span>
                      <span class="text-[10px] text-gray-400">Mar 14</span>
                    </div>
                  </div>
                  <div class="bg-white dark:bg-gray-900 rounded-lg p-3 border-l-4 border-emerald-500 border-y border-r border-gray-200 dark:border-gray-700 shadow-sm opacity-90">
                    <div class="flex items-center gap-1.5 mb-1.5">
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">CS-092</span>
                      <i class="fas fa-check-circle text-emerald-500 text-[10px]"></i>
                    </div>
                    <p class="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug line-through opacity-70">Deploy VPS production</p>
                    <div class="flex items-center justify-between mt-2">
                      <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium"><i class="fas fa-check mr-1"></i>Passed</span>
                      <span class="text-[10px] text-gray-400">Mar 12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tool badges -->
        <div class="scroll-reveal mt-8 flex flex-wrap items-center justify-center gap-3">
          <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium">
            <i class="fas fa-layer-group text-blue-500"></i> Plane.so
          </span>
          <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium">
            <i class="fas fa-book text-gray-700 dark:text-gray-300"></i> Notion MCP
          </span>
          <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium">
            <i class="fab fa-git-alt text-orange-500"></i> Git Workflow
          </span>
          <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium">
            <i class="fas fa-robot text-violet-500"></i> AI Assistant
          </span>
        </div>
      </div>
    </section>

    <!-- Progress Reports Section -->
    <section id="progress" class="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900 py-24 sm:py-32 overflow-hidden">
      <div class="relative mx-auto max-w-7xl px-6">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Left: Dashboard Mockup -->
          <div class="scroll-reveal order-2 lg:order-1">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <!-- Dashboard Header -->
              <div class="bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-700 dark:to-blue-700 px-5 py-3 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <i class="fas fa-chart-line text-white text-sm"></i>
                  <span class="text-white font-semibold text-sm">Progress Report — Sprint 14</span>
                </div>
                <span class="text-white/80 text-xs">Auto-update: barusan</span>
              </div>
              <!-- Dashboard Content -->
              <div class="p-5 space-y-5">
                <!-- Sprint progress -->
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold text-gray-900 dark:text-white">Sprint Progress</span>
                    <span class="text-sm font-bold text-blue-600 dark:text-blue-400">73%</span>
                  </div>
                  <div class="h-2.5 bg-gray-100 dark:bg-gray-900 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style="width: 73%"></div>
                  </div>
                  <div class="flex justify-between mt-1 text-[10px] text-gray-500">
                    <span>11/15 tasks selesai</span>
                    <span>4 hari tersisa</span>
                  </div>
                </div>
                <!-- Burndown Chart -->
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold text-gray-900 dark:text-white">Burndown Chart</span>
                    <span class="text-xs text-emerald-600 dark:text-emerald-400 font-medium"><i class="fas fa-arrow-down mr-1"></i>On Track</span>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
                    <svg viewBox="0 0 300 100" class="w-full h-24" preserveAspectRatio="none">
                      <!-- Grid lines -->
                      <line x1="0" y1="25" x2="300" y2="25" stroke="currentColor" class="text-gray-200 dark:text-gray-700" stroke-width="0.5" stroke-dasharray="2,2"/>
                      <line x1="0" y1="50" x2="300" y2="50" stroke="currentColor" class="text-gray-200 dark:text-gray-700" stroke-width="0.5" stroke-dasharray="2,2"/>
                      <line x1="0" y1="75" x2="300" y2="75" stroke="currentColor" class="text-gray-200 dark:text-gray-700" stroke-width="0.5" stroke-dasharray="2,2"/>
                      <!-- Ideal line -->
                      <line x1="0" y1="10" x2="300" y2="90" stroke="currentColor" class="text-gray-400 dark:text-gray-600" stroke-width="1" stroke-dasharray="4,4"/>
                      <!-- Actual line -->
                      <polyline points="0,10 30,18 60,28 90,32 120,42 150,48 180,58 210,62" fill="none" stroke="url(#burndownGradient)" stroke-width="2.5" stroke-linejoin="round"/>
                      <!-- Fill area -->
                      <polygon points="0,10 30,18 60,28 90,32 120,42 150,48 180,58 210,62 210,90 0,90" fill="url(#burndownFill)" opacity="0.3"/>
                      <!-- Data point -->
                      <circle cx="210" cy="62" r="4" fill="#3b82f6" stroke="white" stroke-width="2"/>
                      <defs>
                        <linearGradient id="burndownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stop-color="#6366f1"/>
                          <stop offset="100%" stop-color="#3b82f6"/>
                        </linearGradient>
                        <linearGradient id="burndownFill" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stop-color="#3b82f6"/>
                          <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div class="flex justify-between text-[10px] text-gray-500 mt-1">
                      <span>Hari 1</span>
                      <span>Hari 4</span>
                      <span>Hari 7</span>
                      <span>Hari 10</span>
                    </div>
                  </div>
                </div>
                <!-- Velocity stats -->
                <div class="grid grid-cols-3 gap-2">
                  <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2.5 text-center">
                    <div class="text-lg font-bold text-blue-600 dark:text-blue-400">42</div>
                    <div class="text-[10px] text-gray-500">Story Points</div>
                  </div>
                  <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-2.5 text-center">
                    <div class="text-lg font-bold text-emerald-600 dark:text-emerald-400">38</div>
                    <div class="text-[10px] text-gray-500">Completed</div>
                  </div>
                  <div class="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-2.5 text-center">
                    <div class="text-lg font-bold text-amber-600 dark:text-amber-400">4</div>
                    <div class="text-[10px] text-gray-500">In Progress</div>
                  </div>
                </div>
                <!-- Activity feed -->
                <div>
                  <div class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Recent Activity</div>
                  <div class="space-y-1.5">
                    <div class="flex items-start gap-2 text-xs">
                      <div class="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex-shrink-0 mt-0.5"></div>
                      <div class="flex-1">
                        <p class="text-gray-700 dark:text-gray-300"><strong>AI Bot</strong> marked <span class="text-emerald-600 dark:text-emerald-400">CS-090</span> as done</p>
                        <span class="text-[10px] text-gray-400">2 menit lalu</span>
                      </div>
                    </div>
                    <div class="flex items-start gap-2 text-xs">
                      <div class="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0 mt-0.5"></div>
                      <div class="flex-1">
                        <p class="text-gray-700 dark:text-gray-300"><strong>Arif</strong> created new task <span class="text-blue-600 dark:text-blue-400">CS-101</span></p>
                        <span class="text-[10px] text-gray-400">15 menit lalu</span>
                      </div>
                    </div>
                    <div class="flex items-start gap-2 text-xs">
                      <div class="w-5 h-5 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 flex-shrink-0 mt-0.5"></div>
                      <div class="flex-1">
                        <p class="text-gray-700 dark:text-gray-300"><strong>Notion MCP</strong> published docs <span class="text-violet-600 dark:text-violet-400">API v2.1</span></p>
                        <span class="text-[10px] text-gray-400">1 jam lalu</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Text -->
          <div class="scroll-reveal order-1 lg:order-2">
            <h2 class="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Laporan Progress Real-Time</h2>
            <p class="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Anda Selalu Tahu <span class="bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">Posisi Proyek Anda</span>
            </p>
            <p class="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Tidak ada lagi <em>"kabar kabarin aja ya"</em> yang gelap. Setiap task yang dibuat AI di <strong>Plane.so</strong> akan ter-update otomatis saat developer mengerjakannya — Anda bisa pantau sprint, burndown, dan velocity secara langsung.
            </p>

            <!-- Feature bullets -->
            <div class="mt-8 space-y-4">
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0 mt-1 w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <i class="fas fa-bolt text-blue-600 dark:text-blue-400 text-sm"></i>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 dark:text-white">Update Otomatis via AI</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-0.5">AI Agent membuat task, update status, dan menutup task begitu QA pass — tanpa input manual dari tim.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0 mt-1 w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <i class="fas fa-chart-area text-indigo-600 dark:text-indigo-400 text-sm"></i>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 dark:text-white">Burndown & Velocity</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-0.5">Laporan sprint dengan visualisasi burndown chart, story points, dan metrik tim yang mudah dipahami.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0 mt-1 w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                  <i class="fas fa-bell text-violet-600 dark:text-violet-400 text-sm"></i>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 dark:text-white">Notifikasi Real-Time</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-0.5">Dapatkan update langsung via email, WhatsApp, atau webhook saat ada task yang berubah statusnya.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0 mt-1 w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <i class="fas fa-file-pdf text-emerald-600 dark:text-emerald-400 text-sm"></i>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 dark:text-white">Export Laporan PDF</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-0.5">Laporan mingguan/bulanan otomatis ter-generate dalam format PDF siap kirim ke stakeholder.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Documentation Section -->
    <section id="dokumentasi" class="relative bg-white dark:bg-gray-900 py-24 sm:py-32 overflow-hidden">
      <!-- Subtle pattern -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none"></div>

      <div class="relative mx-auto max-w-7xl px-6">
        <!-- Header -->
        <div class="scroll-reveal mx-auto max-w-3xl text-center">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6">
            <i class="fas fa-book-open text-xs"></i>
            <span>Dokumentasi Lengkap</span>
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Dokumentasi <span class="bg-gradient-to-r from-violet-600 to-blue-600 dark:from-violet-400 dark:to-blue-400 bg-clip-text text-transparent">+ Screenshot</span> Otomatis
          </h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Begitu task <strong>passed</strong>, AI otomatis membuat dokumentasi lengkap di <strong>Notion</strong> lewat <strong>MCP Notion</strong> — lengkap dengan screenshot, snippet kode, dan panduan penggunaan.
          </p>
        </div>

        <!-- Documentation Mockup -->
        <div class="scroll-reveal mt-16 max-w-6xl mx-auto">
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <!-- Docs Header -->
            <div class="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700 px-5 py-2.5 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <i class="fas fa-book text-gray-700 dark:text-gray-300"></i>
                <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">Notion — Cahyosoft Docs</span>
              </div>
              <div class="hidden sm:flex items-center gap-2">
                <span class="text-xs text-gray-500 dark:text-gray-400"><i class="fas fa-circle text-emerald-500 text-[8px] mr-1"></i>Auto-published 5m ago</span>
              </div>
            </div>
            <div class="grid md:grid-cols-4 min-h-[420px]">
              <!-- Sidebar -->
              <div class="md:col-span-1 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4">
                <div class="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-2">Getting Started</div>
                <ul class="space-y-1 mb-4">
                  <li class="text-xs px-2 py-1.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium">
                    <i class="fas fa-home text-[10px] mr-1.5"></i> Overview
                  </li>
                  <li class="text-xs px-2 py-1.5 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <i class="fas fa-rocket text-[10px] mr-1.5"></i> Quick Start
                  </li>
                  <li class="text-xs px-2 py-1.5 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <i class="fas fa-cog text-[10px] mr-1.5"></i> Installation
                  </li>
                </ul>
                <div class="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-2 mt-4">Modules</div>
                <ul class="space-y-1 mb-4">
                  <li class="text-xs px-2 py-1.5 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <i class="fas fa-users-cog text-[10px] mr-1.5"></i> HRIS
                  </li>
                  <li class="text-xs px-2 py-1.5 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <i class="fas fa-calculator text-[10px] mr-1.5"></i> Accounting
                  </li>
                  <li class="text-xs px-2 py-1.5 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <i class="fas fa-cash-register text-[10px] mr-1.5"></i> POS
                  </li>
                </ul>
                <div class="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-2 mt-4">API Reference</div>
                <ul class="space-y-1">
                  <li class="text-xs px-2 py-1.5 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <i class="fas fa-code text-[10px] mr-1.5"></i> Authentication
                  </li>
                  <li class="text-xs px-2 py-1.5 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <i class="fas fa-database text-[10px] mr-1.5"></i> Endpoints
                  </li>
                </ul>
              </div>

              <!-- Content -->
              <div class="md:col-span-3 p-6 bg-white dark:bg-gray-800">
                <div class="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span>Docs</span>
                  <i class="fas fa-chevron-right text-[8px]"></i>
                  <span>Sprint 14</span>
                  <i class="fas fa-chevron-right text-[8px]"></i>
                  <span class="text-blue-600 dark:text-blue-400 font-medium">CS-090: Auth & RBAC</span>
                </div>
                <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">Autentikasi & Role-Based Access Control</h1>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Sistem keamanan enterprise-grade untuk modul ERP · Update: 5 menit lalu</p>

                <!-- Tags -->
                <div class="flex flex-wrap items-center gap-2 mb-5 pb-4 border-b border-gray-100 dark:border-gray-700">
                  <span class="text-[10px] px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">backend</span>
                  <span class="text-[10px] px-2 py-1 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">security</span>
                  <span class="text-[10px] px-2 py-1 rounded bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">sprint-14</span>
                  <span class="text-[10px] px-2 py-1 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-medium"><i class="fas fa-check mr-1"></i>Passed</span>
                </div>

                <!-- Content sections -->
                <h2 class="text-base font-bold text-gray-900 dark:text-white mb-2">📋 Ringkasan Task</h2>
                <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Task <code class="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-900 text-xs">CS-090</code> telah diselesaikan dan passed semua unit test (47/47 ✅). Sistem auth mendukung multi-role, JWT refresh token, dan audit log lengkap.
                </p>

                <h2 class="text-base font-bold text-gray-900 dark:text-white mb-2">📸 Screenshot</h2>
                <div class="grid grid-cols-2 gap-3 mb-4">
                  <!-- Screenshot 1 -->
                  <div class="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div class="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-4 h-28 flex items-center justify-center">
                      <div class="bg-white dark:bg-gray-800 rounded shadow-sm p-2 w-full">
                        <div class="flex items-center gap-1 mb-1.5">
                          <div class="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                          <div class="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                          <div class="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                        </div>
                        <div class="h-1 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-1"></div>
                        <div class="h-1 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
                        <div class="h-3 bg-blue-500 rounded w-full"></div>
                      </div>
                    </div>
                    <div class="px-2 py-1.5 bg-gray-50 dark:bg-gray-900 text-[10px] text-gray-600 dark:text-gray-400 flex items-center justify-between">
                      <span><i class="fas fa-image mr-1"></i>login-page.png</span>
                      <span>240 KB</span>
                    </div>
                  </div>
                  <!-- Screenshot 2 -->
                  <div class="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div class="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 p-4 h-28 flex items-center justify-center">
                      <div class="bg-white dark:bg-gray-800 rounded shadow-sm p-2 w-full">
                        <div class="flex items-center gap-1 mb-1.5">
                          <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
                          <div class="h-1 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
                        </div>
                        <div class="grid grid-cols-3 gap-1">
                          <div class="h-4 bg-blue-100 dark:bg-blue-900/30 rounded"></div>
                          <div class="h-4 bg-emerald-100 dark:bg-emerald-900/30 rounded"></div>
                          <div class="h-4 bg-violet-100 dark:bg-violet-900/30 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div class="px-2 py-1.5 bg-gray-50 dark:bg-gray-900 text-[10px] text-gray-600 dark:text-gray-400 flex items-center justify-between">
                      <span><i class="fas fa-image mr-1"></i>dashboard-rbac.png</span>
                      <span>318 KB</span>
                    </div>
                  </div>
                </div>

                <h2 class="text-base font-bold text-gray-900 dark:text-white mb-2">💻 Snippet Kode</h2>
                <div class="bg-gray-900 dark:bg-gray-950 rounded-lg p-3 mb-4 font-mono text-xs overflow-x-auto">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-gray-400 text-[10px]">typescript · auth.service.ts</span>
                    <button class="text-gray-400 hover:text-white text-[10px]"><i class="fas fa-copy mr-1"></i>Copy</button>
                  </div>
                  <pre class="text-blue-300"><span class="text-violet-400">async function</span> <span class="text-yellow-300">login</span>(email: <span class="text-green-300">string</span>, pwd: <span class="text-green-300">string</span>) {
  <span class="text-violet-400">const</span> user = <span class="text-violet-400">await</span> <span class="text-yellow-300">verifyCredentials</span>(email, pwd);
  <span class="text-violet-400">const</span> token = <span class="text-yellow-300">signJWT</span>({ id: user.id, role: user.role });
  <span class="text-violet-4 00">return</span> { token, refreshToken: <span class="text-yellow-300">genRefresh</span>() };
}</pre>
                </div>

                <h2 class="text-base font-bold text-gray-900 dark:text-white mb-2">✅ Test Coverage</h2>
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-gray-700 dark:text-gray-300">Unit Tests</span>
                    <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">47 / 47 ✓</span>
                  </div>
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-gray-700 dark:text-gray-300">Integration Tests</span>
                    <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">12 / 12 ✓</span>
                  </div>
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-gray-700 dark:text-gray-300">E2E (Playwright)</span>
                    <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">8 / 8 ✓</span>
                  </div>
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-gray-700 dark:text-gray-300">Security Audit</span>
                    <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">PASS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Documentation feature cards -->
        <div class="scroll-reveal mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-900/40">
            <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3">
              <i class="fas fa-camera-retro"></i>
            </div>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm">Auto Screenshot</h3>
            <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Setiap UI selesai, AI ambil screenshot & simpan ke docs.</p>
          </div>
          <div class="bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-900/20 dark:to-indigo-800/10 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-900/40">
            <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-3">
              <i class="fas fa-code"></i>
            </div>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm">Snippet Code</h3>
            <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Potongan kode penting otomatis ter-embed dengan syntax highlight.</p>
          </div>
          <div class="bg-gradient-to-br from-violet-50 to-violet-100/50 dark:from-violet-900/20 dark:to-violet-800/10 p-5 rounded-2xl border border-violet-100 dark:border-violet-900/40">
            <div class="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center mb-3">
              <i class="fas fa-vial"></i>
            </div>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm">Test Coverage</h3>
            <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Laporan unit, integration, dan E2E test otomatis tercatat.</p>
          </div>
          <div class="bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-900/20 dark:to-emerald-800/10 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-900/40">
            <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3">
              <i class="fas fa-share-nodes"></i>
            </div>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm">Share Link</h3>
            <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Docs di-publish ke Notion, bisa di-share via link publik.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="kontak" class="relative isolate overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 dark:from-blue-800 dark:via-blue-900 dark:to-indigo-900 py-16 sm:py-24">
      <!-- Decorative blobs -->
      <div class="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl animate-float"></div>
      <div class="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-indigo-400/20 blur-3xl animate-float" style="animation-delay: 2s;"></div>

      <div class="relative mx-auto max-w-7xl px-6 text-center">
        <div class="scroll-reveal">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
            <i class="fas fa-headset"></i>
            <span>Konsultasi Gratis</span>
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Siap Bertransformasi Digital?
          </h2>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-blue-100">
            Konsultasikan kebutuhan teknologi bisnis Anda dengan tim ahli kami sekarang juga secara gratis.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a v-if="waLink()" :href="waLink()" class="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95">
              <i class="fab fa-whatsapp text-2xl"></i> Hubungi via WhatsApp
            </a>
            <a v-if="mailTo('general')" :href="mailTo('general')" class="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-6 py-4 text-white font-semibold hover:bg-white/10 transition-colors">
              <i class="fas fa-envelope"></i> Email Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
const { profile, waLink, mailTo } = useProfile()
</script>
