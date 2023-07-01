<template>
  <div class="pure-menu custom-restricted-width">
    <span class="pure-menu-heading">Projects</span>
    <ul class="pure-menu-list">
        <li class="pure-menu-item" :class="{ 'pure-menu-selected': (idx === selectedMenu) }" v-for="(project, idx) in projects" :key="idx">
            <a href="#" class="pure-menu-link" @click="selectedMenu = idx">{{ project.name }}</a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  components: {
  },
  emits: ["selected"],
  props: ["projects"],
  data () {
    return {
      selectedMenu: null
    }
  },
  watch: {
    selectedMenu: function (newValue) {
      //console.log(newValue)
      this.$emit('selected', newValue);
    }
  }
};
</script>