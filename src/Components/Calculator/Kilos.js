import React, { Component } from "react";
import { colors } from "./store";

class Kilos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "Color 1",
      kilo: 0,
    };
  }

  render() {
    return (
      <div className="choose">
        <section>
          <label htmlFor="color">Color</label>
          <select
            onChange={this.props.colChange}
            type="text"
            id="color"
            required
          >
            {Object.keys(colors).map((col) => (
              <option value={col} key={col}>
                {col}
              </option>
            ))}
          </select>
        </section>

        <section>
          <label htmlFor="kiloAmount">Kilos</label>
          <input
            onChange={this.props.kilos}
            id="kiloAmount"
            type="number"
            defaultValue={this.state.kilo}
            required
          />
        </section>
      </div>
    );
  }
}

export default Kilos;
