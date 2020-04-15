import config from "./config";
import { getAuthToken } from "./token-service";

const PurchaseApiService = {
  getPurchases() {
    return fetch(`${config.API_ENDPOINT}/purchases/`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${getAuthToken()}`,
      },
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((res) => {
        console.log(res);
      });
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
