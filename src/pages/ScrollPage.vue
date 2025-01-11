<template>
  <div class="min-h-screen flex flex-col">
    <NavBar :activeSection="activeSection" />

    <main class="flex-1 overflow-y-scroll">
      <Introduction />
      <Experience />
      <Portfolio />
      <Contact />
    </main>

    <FooterComp/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Introduction from '../components/Introduction.vue';
import Experience from '../components/Experience.vue';
import Portfolio from '../components/Portfolio.vue';
import Contact from '../components/Contact.vue';
import FooterComp from '../components/FooterComp.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Introduction,
    Experience,
    Portfolio,
    Contact,
    FooterComp,
  },
  data() {
    return {
      activeSection: 'introduction', 
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;
        const scrollPosition = window.scrollY;
        console.log(sectionTop);
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          this.activeSection = section.id; 
          this.$router.push({ name: this.activeSection.charAt(0).toUpperCase() + this.activeSection.slice(1) }); 
        }
      });
    },
  },
};
</script>