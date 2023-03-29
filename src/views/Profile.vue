<template>
  <div v-for="item in data" :key="item.id">
    <h1>{{ item.name }}</h1>
    <h4>{{ item.role }}</h4>
    <img :src="item.avatar" alt="" />
    <p>{{ item.email }}</p>
  </div>
  <button @click="logOut">Log out</button>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const data = ref([]);
const url = import.meta.env.VITE_BASE_URL;
if (!localStorage.getItem("token")) router.push("/");
if (localStorage.getItem("token")) {
  axios
    .get(`${url}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      data.value = res;
    });
}

const logOut = () => {
  localStorage.removeItem("token");
  router.push("/");
};
</script>
