import axios from "axios";
export default {
  client: (data) => {
    return axios.post("/api/clients", data);
  },
  employee: (data) => {
    return axios.post("https://localhost:3001/api/employees", data);
  },
};
