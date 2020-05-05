import axios from "axios";

export default axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  proxy: {
    host: "http://localhost",
    port: 3000,
  }
});