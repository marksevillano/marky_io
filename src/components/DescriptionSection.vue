<template>
  <div>
    <div class="posts">
        <!-- A single blog post -->
        <section class="post">
            <header class="post-header">
                <h2 class="post-title">{{ projectData.name }}</h2>
            </header>
            <div class="post-description">
                <p>
                    {{ projectData.description }}
                </p>
            </div>
        </section>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DescriptionSection',
  components: {
  },
  props: ["project"],
  computed: {
    projectData: function() {
        return this.project;
    }
  }
}
</script>