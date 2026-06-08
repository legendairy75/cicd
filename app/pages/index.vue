<script lang="ts" setup>
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>This prject demonstrates a complete CI/CD pipeline,
      using Github Actions, Docker, Github Container Registry (GHCR), and AWS EC2.
    </p>
    <ol>
    <li><NuxtLink to="/overview">Overview</NuxtLink></li>
    <li><NuxtLink to="/technologies">Tech Stack</NuxtLink></li>
    </ol>
  </div>
</template>

<style>

</style>