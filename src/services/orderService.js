import config from "../config";

const OrderService = {

  getOrderById(id) {
    return fetch(`${config.API_ENDPOINT}/orders/${id}`)
    .then((res) =>
    !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
);
  },

  addToOrder(orderId, amount) {
    return fetch(`${config.API_ENDPOINT}/orders/new/${orderId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(amount),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postOrder(order) {
    return fetch(`${config.API_ENDPOINT}/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getOrders() {
    return fetch(`${config.API_ENDPOINT}/orders`)
        .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  deleteOrder(id) {
      return fetch(`${config.API_ENDPOINT}/orders/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ amount: 0 })
      })
      .then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  );
  },

  deleteSingle(id, amount) {
    return fetch(`${config.API_ENDPOINT}/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(amount)
    }).then((res) =>
    !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  );
  },

  patchOrder(id, order) {
    return fetch(`${config.API_ENDPOINT}/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getOrderByFkey(id) {
    return fetch(`${config.API_ENDPOINT}/orders/fkey/${id}`)
        .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  }
  ,
  getOrderByColorProd(color, product) {
    return fetch(`${config.API_ENDPOINT}/orders/colorprod/${color}/${product}`)
        .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  patchLevel(nxt, order) {
    return fetch(`${config.API_ENDPOINT}/orders/levels/${nxt}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

};

export default OrderService;