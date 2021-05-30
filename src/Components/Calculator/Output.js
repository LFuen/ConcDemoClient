import React, { Component } from "react";
import { Link } from "react-router-dom";
import { OutputSec } from "../Styled";

class Output extends Component {
  render() {
    return (
      <OutputSec className="main">
        <article>
          <h1>Total Product</h1>
          <h2 id="product">Product</h2>
          <h2 id="color">Color</h2>
          <h2 id="amount">material 1</h2>
          <Link to="/Calculate">
            <button type="submit" id="new">
              New
            </button>
          </Link>
          <br />
          <br />
          <span id="ledjj">Powered by L.E.D.J.J. &copy;</span>
        </article>
      </OutputSec>
    );
  }
}

export default Output;
