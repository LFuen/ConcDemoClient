import React, { Component } from "react";
import back from "../../images/back.png";
import OrderService from "../../services/orderService";
import { Link } from "react-router-dom";
import ProdInfo from "../Production/ProdInfo";
import { ListingSec } from "../Styled";

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: decodeURI(this.props.match.params.phase),
      color: decodeURI(this.props.match.params.color),
      orders: [],
      link: "",
      linkOne: "",
      linkTwo: "",
      first: '',
      second: '',
      bgOne: '',
      bgTwo: ''
    };
  }

  getAllProds = () => {
    OrderService.getOrders().then((orders) => {
      this.setState({
        orders: orders.filter((order) => {
          return (
            order.color === this.state.color &&
            order.phase === this.state.phase &&
            order.amount > 0
          );
        }),
      });
    });
  };

  goBack = () => {
    if (this.state.phase === "In Production") {
      this.setState({
        link: "Inventory/In%20Production",
      });
    } else if (this.state.phase === "Produced") {
      this.setState({
        link: "Inventory/Produced",
      });
    } else if (this.state.phase === "In Stock") {
      this.setState({
        link: "Inventory/In%20Stock",
      });
    }
  };

  phaseLink = () => {
      if (this.state.phase === "In Production") {
        this.setState({
          linkOne: "Inventory/Produced",
          linkTwo: "Inventory/In%20Stock",
          first : 'Produced',
          second : 'In Stock',
          bgOne: '#95BCF8',
          bgTwo: '#6AEAA5'
        });
      } else if (this.state.phase === "Produced") {
        this.setState({
          linkOne: "Inventory/In%20Production",
          linkTwo: "Inventory/In%20Stock",
          first : 'In Production',
          second : 'In Stock',
          bgOne: '#F8B95C',
          bgTwo: '#6AEAA5'
        });
      } else if (this.state.phase === "In Stock") {
        this.setState({
          linkOne: "Inventory/In%20Production",
          linkTwo: "Inventory/Produced",
          first : 'In Production',
          second : 'Produced',
          bgOne: '#F8B95C',
          bgTwo: '#95BCF8'
        });
    };
  }

  componentDidMount() {
    this.getAllProds();
    this.goBack();
    this.phaseLink();
  }

  render() {
    const prodMap = this.state.orders.map((order, index) => {
      return (
        <ProdInfo key={order.order_id} order={order} prods={this.getAllProds} />
      );
    });
    return (
      <ListingSec>
        <div id="backH1">
          <Link to={`/${this.state.link}`} id="back">
            <img src={back} alt="Back" />
          </Link>
          <h1>{this.state.phase}</h1>
        </div>
        <div id="links">
          <Link to={`/${this.state.linkOne}`} className='links' style={{backgroundColor: this.state.bgOne}}>
            {this.state.first}
          </Link>
          <Link to={`/${this.state.linkTwo}`} className='links' style={{backgroundColor: this.state.bgTwo}}>
            {this.state.second}
          </Link>
        </div>
        <br/>
        <h2 id="color">{this.state.color}</h2>

        <section className="products">
          {this.state.orders.length > 0 && prodMap}
        </section>

        <div className="powered">
          <span id="ledjj">Powered by L.E.D.J.J. &copy;</span>
        </div>
      </ListingSec>
    );
  }
}

export default Listing;
