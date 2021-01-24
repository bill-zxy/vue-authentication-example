import axios from "axios";

const mocks = {
  auth: { POST: { token: "This-is-a-mocked-token" } },
  "user/me": { GET: { name: "doggo", title: "sir" } }
};

const apiCall = ({ url, data,method }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const loginParam = {
          "username": data.username,
          "password": data.password
        };
        axios.post('users/login',loginParam)
            .then(response => resolve(response));
/*        resolve(mocks[url][method || "GET"]);
        console.log(`Mocked '${url}' - ${method || "GET"}`);
        console.log("response: ", mocks[url][method || "GET"]);*/
      } catch (err) {
        reject(new Error(err));
      }
    }, 1000);
  });

export default apiCall;
