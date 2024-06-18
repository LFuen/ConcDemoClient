import React from "react";
import { useHistory } from "react-router-dom";
import { Login } from "../Components/Styled";

const LoginScreen = (props) => {
  const history = useHistory();

  const handleDemoClick = (e) => {
    e.preventDefault();
    const { location } = props;
    const destination = (location.state || {}).from || "/AppSelect";
    history.push(destination);
  };

  return (
    <Login className="main">
      <article>
        <h1>Demo</h1>

        <button id='login' onClick={handleDemoClick}>
            Launch Demo
        </button>
        
        <span id="ledjj">Powered by L.E.D.J.J. &copy;</span>
      </article>
    </Login>
  );
};

Login.defaultProps = {
    location: {},
  };

export default LoginScreen;
