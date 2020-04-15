const config = require("./config");

module.exports = {
  saveAuthToken: (token) => {
    console.log(config, token);
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken: () => {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken: () => {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken: () => {
    return !!this.getAuthToken();
  },
  makeBasicAuthToken: (username, password) => {
    return window.btoa(`${username}:${password}`);
  },
};
