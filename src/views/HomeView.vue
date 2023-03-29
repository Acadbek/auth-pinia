<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
const authStore = useAuthStore();
import useAuthStore from "../store/auth";

const userInfo = reactive({
  name: "",
  password: "",
  email: "",
  avatar: "",
});

const loginData = reactive({
  password: "",
  email: "",
});

const router = useRouter();
const isRegister = ref("");

const registerUser = () => {
  authStore.createUser(userInfo).then(() => {
    console.log(authStore.userData);
    isRegister.value = "Successfully logged in";
  });
};

const loginUser = () => {
  authStore.loginUser(loginData).then(() => {
    if (window.localStorage.getItem("token")) {
      router.push("/profile");
    }
  });
};

if (window.localStorage.getItem("token")) {
  router.push("/profile");
}
</script>

<template>
  <h1>Register</h1>
  <h2>{{ isRegister }}</h2>
  <form @submit.prevent="registerUser">
    <input type="text" placeholder="Name" v-model="userInfo.name" />
    <input type="email" placeholder="Email" v-model="userInfo.email" />
    <input type="password" placeholder="Password" v-model="userInfo.password" />
    <input type="url" placeholder="Avatar" v-model="userInfo.avatar" />
    <input type="submit" />
  </form>
  <h1>Login</h1>
  <form @submit.prevent="loginUser">
    <input type="email" placeholder="Email" v-model="loginData.email" />
    <input
      type="password"
      placeholder="Password"
      v-model="loginData.password"
    />
    <input type="submit" />
  </form>
</template>
