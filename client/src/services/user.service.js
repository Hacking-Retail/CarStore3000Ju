import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://127.0.0.1:5000/api/'

const getPublicContent = () => {
  return axios.get(API_URL + "public", { headers: authHeader() });
};

const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard
};

export default  UserService;