<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>
  <RouterView />
</template>

<style>
.router-link-active {
  @apply bg-sky-800 text-white hover:text-white hover:bg-sky-800;
}
</style>
