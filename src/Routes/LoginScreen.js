import React, { useState } from "react";
import jwt from "jsonwebtoken";
import { Login } from "../Components/Styled";
import TokenService from "../services/tokenService";
import authApiService from "../services/authApiService";

const LoginScreen = (props) => {
  const [error, setError] = useState(null);

  const handleLoginSuccess = () => {
    const { location, history } = props;
    const destination = (location.state || {}).from || "/AppSelect";
    props.setUserId(jwt.decode(TokenService.getAuthToken()).userId);
    props.setUsername(jwt.decode(TokenService.getAuthToken()).user_department);
    history.push(destination);
  };

  const handleSubmitJwtAuth = (e) => {
    e.preventDefault();
    setError(null);
    const { user_department, user_password } = e.target;
    authApiService
      .postLogin({
        user_department: user_department.value,
        user_password: user_password.value,
      })
      .then((res) => {
        if (!res.status === 200) {
          return res.json().then((error) => Promise.reject(error));
        }
        user_department.value = "";
        user_password.value = "";
        TokenService.saveAuthToken(res.authToken);
        handleLoginSuccess();
      })
      .catch((res) => {
        setError({ error: res.error });
      });
  };

  return (
    <Login className="main">
      <article>
        <h1>Phalanx</h1>
        <form onSubmit={handleSubmitJwtAuth}>
            {error && <div>{error.error}</div>}
        <br />
        <label htmlFor="user_department" className="log-input">
          Employee ID
        </label>
        <br />
        <br/>
        <input type="text" id="user_department"></input>
        <br />
        <br />
        <label htmlFor="user_password" className="log-input">
          Password
        </label>
        <br />
        <br/>
        <input type="password" id="user_password"></input>
        <br />

        <button type="submit" id="login">
          Login
        </button>
        </form>
        <span id="ledjj">Powered by L.E.D.J.J. &copy;</span>
      </article>
    </Login>
  );
};

Login.defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

export default LoginScreen;
