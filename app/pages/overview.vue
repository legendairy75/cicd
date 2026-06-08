<template>
  <div>
    <h1>Overview</h1>

    <p>When code is pushed to the repository or there is a pr,
      GitHub Actions automatically:</p>

    <ol>
      <li> Installs project dependencies </li>
      <li> Runs unit tests with Vitest </li>
      <li> Builds a Docker image </li>
      <li> Pushes the image to GitHub Container Registry (GHCR) </li>
      <li> Connects to an AWS EC2 instance over SSH </li>
      <li> Pulls the latest image from GHCR </li>
      <li> replaces the running container with a new version </li>
    </ol>

    <p>This process allows code changes to be automatically tested, packaged,
      and deployed without manual intervention. </p>

    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>