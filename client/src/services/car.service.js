import axios from "axios";

const API_URL = 'http://127.0.0.1:5000/api/cars'

const getCars = () => {
  return axios.get(API_URL + "");
};

const CarService = {
    getCars,
}

export default CarService;