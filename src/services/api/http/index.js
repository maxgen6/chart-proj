import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/${baseURL}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  data: {},
  withCredentials: false,
})

export default instance;