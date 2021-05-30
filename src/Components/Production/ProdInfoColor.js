import React, { Component } from "react";
import { LinkSec, GroupLink } from "../Styled";

export default class ProdInfoColor extends Component {
  state = {
    back: "",
    button: "",
  };

  artBg = (back) => {
    let name = this.props.phase;
    let id = document.querySelector("article").getAttribute("id");
    if (back === "" && name === "In Production" && name === id) {
      this.setState({
        back: "linear-gradient(180deg, #F8B95C 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        button: "#F8B95C",
      });
    } else if (name === "Produced" && name === id) {
      this.setState({
        back: "linear-gradient(180deg, #95BCF8 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        button: "#95BCF8",
      });
    } else if (name === "In Stock" && name === id) {
      this.setState({
        back: "linear-gradient(180deg, #6AEAA5 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        button: "#6AEAA5",
      });
    }
  };

  componentDidMount() {
    this.artBg(this.state.back);
  }

  render() {
    return (
      <GroupLink
        to={`/Listing/${encodeURI(this.props.color)}/${encodeURI(
          this.props.phase
        )}`}
      >
        <LinkSec className="stock">
          <article
            className="product"
            style={{ background: this.state.back }}
            id={this.props.phase}
          >
            <div className="prodInfo">
              <span>{this.props.color}</span>
            </div>
            <h2>
              {this.props.orders
                .filter((order) => order.color === this.props.color)
                .reduce((total, order) => total + order.amount, 0)}
            </h2>
          </article>
        </LinkSec>
      </GroupLink>
    );
  }
}
