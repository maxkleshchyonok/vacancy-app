import axios from "axios";

const REACT_APP_API_URL = "http://localhost:3000";

const repository = axios.create({
  baseURL: REACT_APP_API_URL,
  //withCredentials: true,
});

export default repository;
