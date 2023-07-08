<template>
  <div>
    <div class="posts">
        <!-- A single blog post -->
        <section class="post">
            <header class="post-header">
                <h2 class="post-title">{{ projectData?.name }}</h2>
            </header>
            <div class="post-description">
                <p>
                    {{ projectData?.description }}
                </p>
            </div>
        </section>
    </div>
  </div>
</template>

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
  },
});
</script>
