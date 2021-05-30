import React, { Component } from "react";
import { Products, ProdUl, KiloSect } from "../Styled";
import { kiloMake, pigmentKilo} from "./store";

class KiloList extends Component {
  totalProduct = (totalMix, totalPig, kilos) => {
      let kMake = kiloMake(kilos);
      for (let i = 0; i < kMake.length; i++) {
        totalMix[i] += kMake[i];
      }
      return (
        <ProdUl>
        <div className="total">
          <section className="totalMix">
            <ol className="olMix">
              Mix:
              {totalMix.map((mix, i) => {
                return <li key={i}>{mix}</li>;
              })}
            </ol>
          </section>
          <section className="pigment">
            {!!totalPig[0] && (
            <p> <u>{this.props.pigment[0]}</u> : {totalPig[0]}g</p>
            )}
            <br />
            {!!totalPig[1] && (
            <p> <u>{this.props.pigment[1]}</u> : {totalPig[1]}g</p>
            )}
            <br />
            {!!totalPig[2] && (
            <p> <u>{this.props.pigment[2]}</u> : {totalPig[2]}g</p>
            )}
            </section>
        </div>
      </ProdUl>
    );
  };

  render() {
    let totalMix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let totalPig = pigmentKilo(this.props.color, this.props.kilos);

    return (
      <Products>
        <br /> <br />
        <KiloSect>
          <h2>TOTAL</h2>
          {this.totalProduct(totalMix, totalPig, this.props.kilos)}
        </KiloSect>
      </Products>
    );
  }
}

export default KiloList;
