import axios from "axios";
import authHeader from "./auth-header";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
const API_URL = "http://62.171.190.232:5000/";

class API {
  createNewTicket(ticket) {
    return axios.post(API_URL + "failures/add/", ticket, {
      headers: authHeader(),
    });
  }

  getQRCodeInfo(serialnb) {
    return axios.get(API_URL + "resources/qrdata/" + serialnb, {});
  }

  getAllResources() {
    return axios.get(API_URL + "resources/all", { headers: authHeader() });
  }
}

export default new API();
