import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "../services/axios";
import AuthService from "../services/authService";

const useAuthStore = defineStore("auth", () => {
  const data = ref(null);
  const userData = ref([]);

  const createUser = async (data) => {
    await AuthService.createUser(data).then((response) => {
      data.value = response.data;
    });
  };

  const loginUser = async (data) => {
    await AuthService.loginUser(data).then((response) => {
      userData.value = response.data;
      window.localStorage.setItem("token", response.data.access_token);
    });
  };

  return { createUser, data, userData, loginUser };
});

export default useAuthStore;
