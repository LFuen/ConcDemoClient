import React, { Component } from "react";
import TokenService from "../../services/tokenService";
import back from "../../images/back.png";
import { Link } from "react-router-dom";
import Kilos from "./Kilos";
import KiloList from "./KiloList";
import { KiloForm, ProdChoose } from "../Styled";

class KiloCalculate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "Color1",
      kilos: 0,
    };
  }

  handleLogout = () => {
    TokenService.clearAuthToken();
    this.props.setUserId(null);
  };

  totalAmount = (event) => {
    event.preventDefault();
    this.setState({
      kilos: this.state.kilos,
    });
  };

  colChange = (event) => {
    this.setState({
      color: event.target.value,
    });
  };

  kilos = (event) => {
    this.setState({ kilos: +event.target.value });
  };

  render() {
    // console.log(this.state);

    return (
      <KiloForm>
        <div className="logStatus">
          <button className="logout" onClick={this.handleLogout}>
            Logout
          </button>
        </div>
        <div id="backH1">
          <Link to="/Calculate" id="back">
            <img src={back} alt="Back" />
          </Link>
          <h1>KILO CALCULATOR</h1>
        </div>
        <Link to="/Calculate" >
          <button id="kilo">Back to Product Calculator</button>
        </Link>

        <ProdChoose>
          <Kilos kilos={this.kilos} colChange={this.colChange} />
        </ProdChoose>

        <KiloList color={this.state.color} kilos={this.state.kilos} />

        <span id="ledjj">Powered by L.E.D.J.J. &copy;</span>
      </KiloForm>
    );
  }
}

export default KiloCalculate;
