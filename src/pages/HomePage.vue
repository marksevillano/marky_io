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

<script lang="ts">
import { reactive, defineComponent } from 'vue';
import ProjectList from '../components/ProjectList.vue';
import DescriptionSection from '../components/DescriptionSection.vue';
import data from '../data/data.json';
import { Selected } from '../data/models/Miscellaneous';

let selectedIdx: number | null;

const selected : Selected = {
  selected: null,
};

export default defineComponent({
  name: 'HomePage',
  components: {
    ProjectList,
    DescriptionSection,
  },
  setup() {
    const projectListData = reactive(selected);
    return { projectListData };
  },
  data() {
    return {
      projects: data.projects,
      project: data.welcome,
      selected: selectedIdx,
    };
  },
  methods: {
    setSelected(x: number): void {
      this.projectListData.selected = x;
      this.project = this.projects[x];
    },
    updateProject(idx: number): void {
      this.project = this.projects[idx];
    },
  },
});
</script>
