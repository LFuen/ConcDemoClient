import config from "../config";

const AuthApiService = {

  postLogin({ user_department, user_password }) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      //  "Access-Control-Allow-Origin": "https://localhost:8000/*"
      },
      body: JSON.stringify({ user_department, user_password }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

};

export default AuthApiService;
