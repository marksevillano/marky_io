<template>
  <div class="container">
    <NavBar/>
    <div class="pure-g home-layout">
      <div class="pure-u-1 pure-u-md-2-24"></div>
      <div class="pure-u-1 pure-u-md-20-24">
        <div class="pure-g">
          <div class="pure-u-1 pure-u-md-20-24">
            <div class="l-box">
              <DescriptionSection :project="project"/>
            </div>
          </div>
          <div class="pure-u-1 pure-u-md-4-24">
            <div class="l-box">
              <ProjectList :projects="projects" @selected="setSelected"/>
              {{ projectListData.selected }}
            </div>
          </div>
        </div>
      </div>
      <div class="pure-u-2-24"></div>
    </div>
    <FooterBar/>
  </div>
</template>

<style scoped>

body {
  margin:0;
  padding:0;
  height:100%;
}
.home-layout{
  padding: 60px 0px;
  min-height: 100%;
}

.l-box{
  padding: 0px 50px;
  /* border: 1rem solid darkgrey;
  background-color: lightcyan;
  font-size: 1rem; */
}
.container {
  min-height:100%;
  position:relative;
}

.container:after {
  content: "";
  display: block;
}
</style>

<script lang="ts">
import { reactive, defineComponent } from 'vue';
import DescriptionSection from '../components/DescriptionSection.vue';
import FooterBar from '../components/FooterBar.vue';
import NavBar from '../components/NavBar.vue';
import ProjectList from '../components/ProjectList.vue';
import { Selected } from '../data/models/Miscellaneous';
import { welcome, projects } from '../data/data.json';

let selectedIdx: number | null;

const selected : Selected = {
  selected: null,
};

export default defineComponent({
  name: 'HomePage',
  components: {
    DescriptionSection,
    FooterBar,
    ProjectList,
    NavBar,
  },
  setup() {
    const projectListData = reactive(selected);
    return { projectListData };
  },
  data() {
    return {
      projects,
      project: welcome,
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
