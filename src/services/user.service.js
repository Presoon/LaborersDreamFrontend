import axios from "axios";

import authHeader from "./auth-header";

const API_URL = "http://62.171.190.232:5000/";

class UserService {
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

  // getAdminBoard() {
  //   return axios.get(API_URL + "admin", { headers: authHeader() });
  // }

  getQRCodeInfo(serialnb) {
    return axios.get(API_URL + "resources/qrdata/" + serialnb, {});
  }
}

export default new UserService();
