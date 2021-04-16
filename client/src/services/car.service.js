import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://127.0.0.1:5000/api/cars'

const getCars = () => {
  return axios.get(API_URL + "", { headers: authHeader() });
};

const tinderAct = (car_id, value) => {
  return axios.post(API_URL + "/tinder_action", {
      car_id,
      value
  }, {headers: authHeader()});
};

const CarService = {
    getCars,
    tinderAct,
}

export default CarService;