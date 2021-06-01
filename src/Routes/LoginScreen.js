import React from "react";
import jwt from "jsonwebtoken";
import { Login } from "../Components/Styled";
import TokenService from "../services/tokenService";
import authApiService from "../services/authApiService";

const LoginScreen = (props) => {

  const handleLoginSuccess = () => {
    const { location, history } = props;
    const destination = (location.state || {}).from || "/AppSelect";
    props.setUserId(jwt.decode(TokenService.getAuthToken()).userId);
    props.setUsername(jwt.decode(TokenService.getAuthToken()).user_department);
    history.push(destination);
  };

  const handleDemoClick = (e) => {
    e.preventDefault();
    authApiService
      .postLogin({
        user_department: "admin",
        user_password: "Admin2021",
      })
      .then((res) => {
        if (!res.status === 200) {
          return res.json().then((err) => Promise.reject(err));
        }
        TokenService.saveAuthToken(res.authToken);
        handleLoginSuccess();
      })
      .catch((res) => {});
  };

  return (
    <Login className="main">
      <article>
        <h1>Demo</h1>

        <button onClick={handleDemoClick}>
            Launch Demo
        </button>
        
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
