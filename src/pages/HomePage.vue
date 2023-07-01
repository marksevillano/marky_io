<template>
  <div class="pure-g">
    <div class="pure-u-2-24"></div>
    <div class="pure-u-20-24">
      <div class="pure-g">
        <div class="pure-u-4-24">
          <ProjectList :projects="projects" @selected="setSelected"/>
         
          {{ projectListData.selected }}
        </div>
        <div class="pure-u-20-24">
          <DescriptionSection :project="project"/>
          {{ project }}
        </div>
      </div>
    </div>
    <div class="pure-u-2-24"></div>
  </div>
</template>

<style>

</style>

<script>
import { reactive } from 'vue';
import data from '../data/data.json';
import ProjectList from '../components/ProjectList'
import DescriptionSection from '../components/DescriptionSection'

let selectedIdx;

export default {
  name: 'HomePage',
  components: {
    ProjectList,
    DescriptionSection
  },
  setup() {
    const projectListData = reactive({
      selected: null,
    });
    return { projectListData };
  },
  data() {
    return {
      projects: data.projects,
      project: data.welcome,
      selected: selectedIdx
    }
  },
  methods: {
    setSelected(x) {
      this.projectListData.selected = x;
      this.project = this.projects[x];
    },
    updateProject(idx) {
      this.project = this.projects[idx];
    }
  }
}
</script>