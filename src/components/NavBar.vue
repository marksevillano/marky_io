<template>
  <header class="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
    <nav class="container mx-auto px-4 py-6 flex items-center justify-between">
      <div class="flex items-center">
        <router-link to="/" class="font-bold text-lg">My Portfolio</router-link> 
      </div>
      <ul class="sm:flex space-x-4"
      :class="{ 
        'block': isMobileMenuOpen, 'hidden' : !isMobileMenuOpen,
        'absolute top-full left-0 w-full bg-white shadow-md rounded-md p-4': isMobileView && isMobileMenuOpen
        }" 
      > 
        <li>
          <router-link 
            to="/" 
            class="block py-2 px-4 text-gray-800 hover:text-blue-500"
            :class="{ 'font-bold': activeSection === 'introduction' }"
            @click="scrollToSection('introduction'); toggleMobileMenu();" 
          >
            Introduction
          </router-link>
        </li>
        <li>
          <router-link 
            to="/experience" 
            class="block py-2 px-4 text-gray-800 hover:text-blue-500"
            :class="{ 'font-bold': activeSection === 'experience' }"
            @click="scrollToSection('experience'); toggleMobileMenu();" 
          >
            Experience
          </router-link>
        </li>
        <li>
          <router-link 
            to="/portfolio" 
            class="block py-2 px-4 text-gray-800 hover:text-blue-500"
            :class="{ 'font-bold': activeSection === 'portfolio' }"
            @click="scrollToSection('portfolio'); toggleMobileMenu();" 
          >
            Portfolio
          </router-link>
        </li>
        <li>
          <router-link 
            to="/contact" 
            class="block py-2 px-4 text-gray-800 hover:text-blue-500"
            :class="{ 'font-bold': activeSection === 'contact' }"
            @click="scrollToSection('contact'); toggleMobileMenu();" 
          >
            Contact Me
          </router-link>
        </li>
      </ul>
      <button 
      @click="toggleIsMobileView()" 
        class="block sm:hidden" 
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    activeSection: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isMobileMenuOpen: false,
      isMobileView: false
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    toggleIsMobileView() {
      this.isMobileView = true;
      this.toggleMobileMenu();
    }
  },
};
</script>