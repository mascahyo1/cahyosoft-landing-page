<template>
  <NuxtLayout>
    <!-- Hero Section -->
    <section id="beranda" class="relative overflow-hidden bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),white)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.900),theme(colors.gray.900))] opacity-20"></div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-6">
          Solusi Digital <span class="text-blue-600 dark:text-blue-500">Cerdas</span> untuk Masa Depan Bisnis Anda
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          Dari konsultasi strategis hingga pengembangan sistem ERP yang kompleks, Cahyosoft menghadirkan teknologi yang dirancang khusus untuk pertumbuhan bisnis Anda.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink to="#kontak" class="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all">
            Mulai Sekarang
          </NuxtLink>
          <NuxtLink to="#layanan" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white flex items-center gap-2">
            Lihat Layanan <i class="fas fa-arrow-right text-xs"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="layanan" class="bg-gray-50 dark:bg-gray-800/50 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400 uppercase tracking-widest">Layanan Kami</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Layanan Pengembangan Web & Konsultasi IT</p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <!-- Web Consultation -->
          <div class="flex flex-col bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow">
            <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
              <i class="fas fa-comments text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Konsultasi Web</h3>
            <p class="mt-4 flex-auto text-base leading-7 text-gray-600 dark:text-gray-400">
              Strategi digital yang tepat sasaran untuk memastikan kehadiran online bisnis Anda memberikan dampak yang maksimal.
            </p>
          </div>
          <!-- Web Development -->
          <div class="flex flex-col bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow">
            <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
              <i class="fas fa-code text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Pengembangan Web Kustom</h3>
            <p class="mt-4 flex-auto text-base leading-7 text-gray-600 dark:text-gray-400">
              Website yang cepat, responsif, dan aman, dibangun dengan teknologi terbaru (Nuxt, Tailwind, Node.js) untuk performa terbaik.
            </p>
          </div>
          <!-- Mobile Optimization -->
          <div class="flex flex-col bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow">
            <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400">
              <i class="fas fa-mobile-alt text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Optimasi Responsif</h3>
            <p class="mt-4 flex-auto text-base leading-7 text-gray-600 dark:text-gray-400">
              Memastikan pengalaman pengguna yang mulus di berbagai perangkat, mulai dari smartphone hingga desktop layar lebar.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ERP Solutions Section -->
    <section id="erp" class="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2 items-center">
          <div>
            <h2 class="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400 uppercase tracking-widest">Solusi ERP Terintegrasi</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Optimalkan Operasional Bisnis Anda dengan Web ERP</p>
            <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Kami menyediakan modul ERP yang dapat dikustomisasi sesuai kebutuhan industri Anda. Semua terintegrasi dalam satu platform berbasis web.
            </p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-400 lg:max-w-none">
              <div class="relative pl-12">
                <dt class="inline font-bold text-gray-900 dark:text-white">
                  <i class="fas fa-users-cog absolute left-1 top-1 text-blue-600 dark:text-blue-400"></i>
                  HRIS (Human Resource Information System).
                </dt>
                <dd class="inline">Manajemen karyawan, penggajian, absensi, dan penilaian kinerja secara otomatis.</dd>
              </div>
              <div class="relative pl-12">
                <dt class="inline font-bold text-gray-900 dark:text-white">
                  <i class="fas fa-calculator absolute left-1 top-1 text-blue-600 dark:text-blue-400"></i>
                  Akuntansi & Keuangan.
                </dt>
                <dd class="inline">Laporan keuangan real-time, manajemen pajak, dan pelacakan arus kas yang akurat.</dd>
              </div>
              <div class="relative pl-12">
                <dt class="inline font-bold text-gray-900 dark:text-white">
                  <i class="fas fa-cash-register absolute left-1 top-1 text-blue-600 dark:text-blue-400"></i>
                  POS & Inventory.
                </dt>
                <dd class="inline">Sistem kasir modern terintegrasi dengan stok barang di berbagai cabang.</dd>
              </div>
              <div class="relative pl-12">
                <dt class="inline font-bold text-gray-900 dark:text-white">
                  <i class="fas fa-handshake absolute left-1 top-1 text-blue-600 dark:text-blue-400"></i>
                  CXM / CRM.
                </dt>
                <dd class="inline">Manajemen hubungan pelanggan untuk meningkatkan loyalitas dan penjualan.</dd>
              </div>
            </dl>
          </div>
          <div class="relative">
            <div class="bg-blue-600/10 dark:bg-blue-500/10 rounded-3xl p-4 lg:p-8">
              <!-- Placeholder for Dashboard Image -->
              <div class="aspect-video bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                <div class="text-center p-6">
                  <i class="fas fa-chart-line text-6xl text-blue-500 mb-4"></i>
                  <p class="text-gray-500 dark:text-gray-400 font-medium italic">Mockup Dashboard ERP Cahyosoft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="kontak" class="relative isolate overflow-hidden bg-blue-700 py-16 sm:py-24 lg:py-32">
      <div class="px-6 lg:px-8 mx-auto max-w-7xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Siap Bertransformasi Digital?</h2>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
          Konsultasikan kebutuhan teknologi bisnis Anda dengan tim ahli kami sekarang juga secara gratis.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="https://wa.me/yournumber" class="rounded-md bg-white px-8 py-4 text-lg font-bold text-blue-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all flex items-center gap-3">
            <i class="fab fa-whatsapp text-2xl"></i> Hubungi via WhatsApp
          </a>
        </div>
      </div>
      <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#blue-gradient)" fill-opacity="0.25" />
        <defs>
          <radialGradient id="blue-gradient">
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  </NuxtLayout>
</template>

<script setup>
// No extra logic needed for simple landing page
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
