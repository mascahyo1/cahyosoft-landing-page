<template>
  <NuxtLayout>
    <section class="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-3xl px-6">
        <div class="scroll-reveal mb-12">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm mb-6">
            <i class="fas fa-arrow-left text-xs"></i> Kembali ke Beranda
          </NuxtLink>
          <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Kebijakan Privasi</h1>
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Terakhir diperbarui: 1 Januari 2026</p>
        </div>

        <div class="scroll-reveal prose prose-gray dark:prose-invert max-w-none space-y-8">
          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Informasi yang Kami Kumpulkan</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Cahyosoft mengumpulkan informasi yang Anda berikan secara langsung, seperti nama, alamat email, nomor telepon, dan informasi bisnis saat Anda mengisi formulir kontak, mendaftar layanan, atau berkomunikasi dengan tim kami. Kami juga mengumpulkan informasi teknis secara otomatis melalui cookies dan teknologi serupa, termasuk alamat IP, jenis browser, halaman yang dikunjungi, dan durasi kunjungan.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">2. Penggunaan Informasi</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Informasi yang kami kumpulkan digunakan untuk: (a) menyediakan dan meningkatkan layanan kami; (b) berkomunikasi dengan Anda tentang layanan, pembaruan, dan penawaran; (c) mempersonalisasi pengalaman Anda; (d) menganalisis penggunaan platform untuk pengembangan produk; dan (e) memenuhi kewajiban hukum yang berlaku.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">3. Perlindungan Data</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Kami menerapkan langkah-langkah keamanan teknis dan organisasional yang sesuai dengan standar industri untuk melindungi data pribadi Anda dari akses tidak sah, perubahan, pengungkapan, atau perusakan. Langkah-langkah ini mencakup enkripsi data, firewall, kontrol akses ketat, dan pemantauan keamanan berkelanjutan.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">4. Berbagi Data dengan Pihak Ketiga</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Kami tidak menjual data pribadi Anda. Kami dapat membagikan data dengan penyedia layanan tepercaya yang membantu operasional bisnis kami (seperti hosting, analitik, dan pemrosesan pembayaran), dengan syarat mereka terikat perjanjian kerahasiaan yang ketat. Kami juga dapat mengungkapkan data jika diwajibkan oleh hukum.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">5. Hak Pengguna</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Anda memiliki hak untuk mengakses, memperbarui, menghapus, atau membatasi pemrosesan data pribadi Anda. Anda juga dapat menarik persetujuan kapan saja. Untuk menggunakan hak-hak ini, silakan hubungi kami melalui email di <a v-if="mailTo('privacy')" :href="mailTo('privacy')" class="text-blue-600 dark:text-blue-400 hover:underline">{{ profile.contact.email.privacy }}</a>.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">6. Cookies</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Situs kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah file kecil yang disimpan di perangkat Anda. Anda dapat mengontrol penggunaan cookies melalui pengaturan browser. Menonaktifkan cookies dapat memengaruhi fungsionalitas tertentu dari situs kami.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">7. Perubahan Kebijakan</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan signifikan akan diberitahukan melalui email atau pemberitahuan di situs web kami. Penggunaan layanan kami setelah perubahan berlaku merupakan persetujuan Anda terhadap kebijakan yang diperbarui.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">8. Hubungi Kami</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di:
            </p>
            <ul class="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
              <li v-if="profile.contact.email.privacy"><i class="fas fa-envelope text-blue-500 mr-2"></i> {{ profile.contact.email.privacy }}</li>
              <li v-if="profile.contact.email.general"><i class="fas fa-globe text-blue-500 mr-2"></i> {{ profile.contact.email.general }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
const { profile, mailTo } = useProfile()
useScrollReveal()
</script>
