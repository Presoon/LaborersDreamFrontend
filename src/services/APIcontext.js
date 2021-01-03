import axios from "axios";

import authHeader from "./auth-header";

const API_URL = "http://62.171.190.232:5000/";

class API {
  //2981A03F-EE30-45DD-BEA6-4A1A8E1A7559

  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  // getModeratorBoard() {
  //   return axios.get(API_URL + "mod", { headers: authHeader() });
  // }

  createNewTicket() {
    return axios.post(API_URL + "resources/add/", { headers: authHeader() });
  }

  getQRCodeInfo(serialnb) {
    return axios.get(API_URL + "resources/qrdata/" + serialnb, {});
  }

  getAllResources() {
    return axios.get(API_URL + "resources/all", { headers: authHeader() });
  }
}

export default new API();
