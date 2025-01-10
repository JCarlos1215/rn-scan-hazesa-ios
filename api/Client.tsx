import axios from "axios";
import Constants from 'expo-constants';

const { BASE_URL, API_USERNAME, API_PASSWORD } = Constants.expoConfig?.extra || {};

// console.log('BASE_URL:', BASE_URL); // Verifica que esto no sea undefined
// console.log('API_USERNAME:', API_USERNAME);
// console.log('API_PASSWORD:', API_PASSWORD);

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 4000,
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    username: API_USERNAME,
    password: API_PASSWORD,
  },
});

client.interceptors.response.use(
  response => response,
  error => {
    console.error('Error en la solicitud:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default client;