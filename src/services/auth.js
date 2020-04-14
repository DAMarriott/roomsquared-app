import config from "./config";
const { saveAuthToken } = require("./token-service");
const tokenService = require("./token-service");

console.log(tokenService);

const AuthApiService = {
  postLogin({ username, password }) {
    return fetch(`${config.API_ENDPOINT}/auth/signin`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((res) => {
        saveAuthToken(res["authToken"]);
        return res;
      });
  },
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  signout() {
    return fetch(`${config.API_ENDPOINT}/signout`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
  },
};

export default AuthApiService;
