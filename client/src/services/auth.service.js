import axios from "axios"

const API_URL = 'http://127.0.0.1:5000/api/auth/'

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    });
};

const login =  async (username, password) => {
    const response = await axios.post(API_URL + "login", {
        username,
        password,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
};

const logout = () => {
    localStorage.removeItem("user");
};

const AppService = {
    register,
    login,
    logout,
};

export default  AppService;