import config from "./config";
import { getAuthToken } from "./token-service";

const PurchaseApiService = {
  getPurchases() {
    return fetch(`${config.API_ENDPOINT}/purchases/`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postPurchase(username, item, price) {
    return fetch(`${config.API_ENDPOINT}/purchases/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        item,
        price,
        username
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default PurchaseApiService;
