<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <!-- Navbar -->
    <nav class="fixed w-full z-50 top-0 start-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <NuxtLink to="/" class="flex items-center">
          <span class="text-2xl font-bold text-blue-600 dark:text-blue-500">{{ profile.company.name }}</span>
        </NuxtLink>

        <!-- Right side: theme toggle + CTA + hamburger -->
        <div class="flex items-center gap-3 md:order-2">
          <button @click="toggleColorMode" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 rounded-lg text-sm p-2.5">
            <i :class="colorMode.value === 'dark' ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>

          <NuxtLink to="#kontak" class="hidden md:inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Mulai Konsultasi
          </NuxtLink>

          <button @click="mobileOpen = !mobileOpen" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Buka menu</span>
            <i :class="mobileOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
          </button>
        </div>

        <!-- Nav links -->
        <div :class="['w-full md:w-auto md:order-1', mobileOpen ? 'block' : 'hidden md:block']" id="navbar-sticky">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <NuxtLink to="#beranda" class="block py-2 px-3 rounded md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500" @click="mobileOpen = false">Beranda</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#layanan" class="block py-2 px-3 rounded md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500" @click="mobileOpen = false">Layanan</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#teknologi" class="block py-2 px-3 rounded md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500" @click="mobileOpen = false">Teknologi</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#erp" class="block py-2 px-3 rounded md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500" @click="mobileOpen = false">Solusi ERP</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#workflow" class="block py-2 px-3 rounded md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500" @click="mobileOpen = false">Workflow</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#dokumentasi" class="block py-2 px-3 rounded md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500" @click="mobileOpen = false">Dokumentasi</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#tentang" class="block py-2 px-3 rounded md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500" @click="mobileOpen = false">Tentang</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#kontak" class="block py-2 px-3 rounded md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500" @click="mobileOpen = false">Kontak</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div class="mx-auto w-full max-w-7xl px-4 py-12">
        <div class="md:flex md:justify-between gap-8">
          <div class="mb-8 md:mb-0 md:max-w-sm">
            <NuxtLink to="/" class="flex items-center">
              <span class="text-2xl font-bold text-blue-600 dark:text-blue-500">{{ profile.company.name }}</span>
            </NuxtLink>
            <p class="mt-4 text-gray-500 dark:text-gray-400">
              {{ profile.company.tagline }}
            </p>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Navigasi</h3>
              <ul class="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                <li><NuxtLink to="/#beranda" class="hover:underline">Beranda</NuxtLink></li>
                <li><NuxtLink to="/#layanan" class="hover:underline">Layanan</NuxtLink></li>
                <li><NuxtLink to="/#teknologi" class="hover:underline">Teknologi</NuxtLink></li>
                <li><NuxtLink to="/#tentang" class="hover:underline">Tentang Kami</NuxtLink></li>
              </ul>
            </div>
            <div>
              <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Layanan</h3>
              <ul class="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                <li><NuxtLink to="/#layanan" class="hover:underline">Konsultasi Web</NuxtLink></li>
                <li><NuxtLink to="/#layanan" class="hover:underline">Custom Web Dev</NuxtLink></li>
                <li><NuxtLink to="/#erp" class="hover:underline">Solusi ERP</NuxtLink></li>
                <li><NuxtLink to="/#workflow" class="hover:underline">Workflow & Progress</NuxtLink></li>
                <li><NuxtLink to="/#dokumentasi" class="hover:underline">Dokumentasi</NuxtLink></li>
                <li><NuxtLink to="/#kontak" class="hover:underline">Konsultasi Gratis</NuxtLink></li>
              </ul>
            </div>
            <div>
              <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Ikuti Kami</h3>
              <ul class="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                <li v-if="profile.socialMedia.facebook.trim()">
                  <a :href="profile.socialMedia.facebook" class="hover:underline" target="_blank">Facebook</a>
                </li>
                <li v-if="profile.socialMedia.instagram.trim()">
                  <a :href="profile.socialMedia.instagram" class="hover:underline" target="_blank">Instagram</a>
                </li>
                <li v-if="profile.socialMedia.linkedin.trim()">
                  <a :href="profile.socialMedia.linkedin" class="hover:underline" target="_blank">LinkedIn</a>
                </li>
                <li v-if="profile.socialMedia.github.trim()">
                  <a :href="profile.socialMedia.github" class="hover:underline" target="_blank">GitHub</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h3>
              <ul class="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                <li><NuxtLink to="/#tentang" class="hover:underline">Tentang Kami</NuxtLink></li>
                <li><NuxtLink to="/kebijakan-privasi" class="hover:underline">Kebijakan Privasi</NuxtLink></li>
                <li><NuxtLink to="/syarat-ketentuan" class="hover:underline">Syarat & Ketentuan</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-8 border-gray-200 dark:border-gray-700">
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 dark:text-gray-400">&copy; {{ profile.copyright.year }} <a href="/" class="hover:underline">{{ profile.company.name }}</a>. {{ profile.copyright.text }}</span>
          <div v-if="socialLinks.length" class="flex mt-4 space-x-5 sm:mt-0">
            <a v-for="s in socialLinks" :key="s.key" :href="s.url" target="_blank" class="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
              <i :class="s.icon + ' text-lg'"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const { profile } = useProfile()

const colorMode = useColorMode()
const mobileOpen = ref(false)

// Social media with data from profile — empty string = hidden
const socialLinks = computed(() => [
  { key: 'facebook', icon: 'fab fa-facebook', url: profile.socialMedia.facebook },
  { key: 'instagram', icon: 'fab fa-instagram', url: profile.socialMedia.instagram },
  { key: 'linkedin', icon: 'fab fa-linkedin', url: profile.socialMedia.linkedin },
  { key: 'github', icon: 'fab fa-github', url: profile.socialMedia.github },
  { key: 'twitter', icon: 'fab fa-twitter', url: profile.socialMedia.twitter },
].filter(s => s.url?.trim()))

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// Initialize scroll reveal animations
useScrollReveal()

watch(() => mobileOpen.value, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>
