import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://api.seev.pro:5000/";

class API {
  createNewTicket(ticket) {
    return axios.post(API_URL + "failures/add", ticket, {
      headers: authHeader(),
    });
  }

  getAllTickets() {
    return axios.get(API_URL + "failures/all", { headers: authHeader() });
  }
  getQRCodeInfo(serialnb) {
    return axios.get(API_URL + "resources/qrdata/" + serialnb, {});
  }

  getAllResources() {
    return axios.get(API_URL + "resources/all", { headers: authHeader() });
  }
}

export default new API();
