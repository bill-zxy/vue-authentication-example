import axios from "axios";
import { AUTH_SUCCESS } from "../store/actions/auth";

const mocks = {
  auth: { POST: { token: "This-is-a-mocked-token" } },
  "user/me": { GET: { name: "doggo", title: "sir" } }
};

const apiCall = ({ url, data,method }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url == "auth") {
        try {
          const loginParam = {
            "username": data.username,
            "password": data.password
          };
        axios.post('/users/login',loginParam)
            .then(response => this.$store.commit(AUTH_SUCCESS,response));
/*        resolve(mocks[url][method || "GET"]);
        console.log(`Mocked '${url}' - ${method || "GET"}`);
        console.log("response: ", mocks[url][method || "GET"]);*/
        } catch (err) {
          reject(new Error(err));
          }
      } else if (url =="usr/me") {
      
      }
    }, 1000);
  });

export default apiCall;
