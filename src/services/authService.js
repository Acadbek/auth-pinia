import axios from "./axios";

const AuthService = {
  createUser(data) {
    return axios.post("/users/", data);
  },
  loginUser(data) {
    return axios.post("/auth/login", data);
  },
};

export default AuthService;
