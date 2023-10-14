<template>
  <div>
      <section class="description">
          <header class="description-header">
              <h2 class="description-title">{{ projectData?.name }}</h2>
          </header>
          <div class="description-long">
              <span v-html="projectData?.description">
              </span>
          </div>
      </section>
  </div>
</template>

<style scoped>
.aws-badge {
  width: 150px;
  height: 150px;
}
</style>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Project } from '../data/models/Project';

export default defineComponent({
  name: 'DescriptionSection',
  components: {
  },
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
  computed: {
    projectData(): Project {
      const { project } = this;
      return project;
    },
    myImage(): string {
      return './assets/images/aws-certified-developer-associate.png';
    },
  },
});
</script>
