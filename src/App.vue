<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
import Profile from "./views/Profile.vue";
const token = ref(localStorage.getItem("token"));
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/">About</RouterLink>
  </nav>
  <RouterView />
</template>
