<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <!-- Navbar -->
    <nav class="fixed w-full z-50 top-0 start-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-bold whitespace-nowrap text-blue-600 dark:text-blue-500">Cahyosoft</span>
        </NuxtLink>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          <!-- Theme Toggle -->
          <button @click="toggleColorMode" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-2">
            <i :class="colorMode.value === 'dark' ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
          
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hidden md:block">
            Mulai Konsultasi
          </button>
          
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Buka menu</span>
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li><NuxtLink to="#beranda" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Beranda</NuxtLink></li>
            <li><NuxtLink to="#layanan" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Layanan</NuxtLink></li>
            <li><NuxtLink to="#erp" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Solusi ERP</NuxtLink></li>
            <li><NuxtLink to="#kontak" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Kontak</NuxtLink></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-20">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <NuxtLink to="/" class="flex items-center">
              <span class="self-center text-2xl font-bold whitespace-nowrap text-blue-600 dark:text-blue-500">Cahyosoft</span>
            </NuxtLink>
            <p class="mt-4 text-gray-500 dark:text-gray-400 max-w-sm">
              Solusi pengembangan web dan ERP terpercaya untuk mengakselerasi transformasi digital bisnis Anda.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Layanan</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4"><a href="#" class="hover:underline">Konsultasi Web</a></li>
                <li class="mb-4"><a href="#" class="hover:underline">Custom Web Dev</a></li>
                <li><a href="#" class="hover:underline">Solusi ERP</a></li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Ikuti Kami</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4"><a href="#" class="hover:underline ">LinkedIn</a></li>
                <li><a href="#" class="hover:underline">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4"><a href="#" class="hover:underline">Kebijakan Privasi</a></li>
                <li><a href="#" class="hover:underline">Syarat & Ketentuan</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" class="hover:underline">Cahyosoft™</a>. Hak Cipta Dilindungi.
          </span>
          <div class="flex mt-4 space-x-5 rtl:space-x-reverse sm:justify-center sm:mt-0">
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white"><i class="fab fa-facebook"></i></a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white"><i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

onMounted(() => {
  // Initialize flowbite components
  import('flowbite').then((flowbite) => {
    flowbite.initFlowbite()
  })
})
</script>
