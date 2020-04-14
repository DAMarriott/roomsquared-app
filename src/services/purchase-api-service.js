import config from "./config";
import { getAuthToken } from "./token-service";

const PurchaseApiService = {
  getPurchases(username, groupId) {
    return fetch(`${config.API_ENDPOINT}/purchases/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
      body: JSON.stringify({ username, groupId }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postPurchase({ item, price }) {
    return fetch(`${config.API_ENDPOINT}/purchases/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        item,
        price,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default PurchaseApiService;
