import React, { Component } from "react";
import trash from "../../images/delete2.png";
import OrderService from "../../services/orderService";
import ReactTooltip from "react-tooltip";
import { ProdSec } from "../Styled";

class ProdInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "",
      back: "",
      button: "",
      toolPrev: "",
      toolNext: "",
      noTip: "",
      order: this.props.order,
    };
  }

  important = (order) => {
    if (order.prty_lvl === 1) {
      this.setState({ status: "6px solid #FFD447" });
    } else if (order.prty_lvl === 2) {
      this.setState({ status: "6px solid #B0413E" });
    } else if (order.prty_lvl === 0) {
      this.setState({ status: "" });
    }
  };

  artBg = (back) => {
    let name = this.state.order.phase;
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

  tool = (toolPrev) => {
    let name = this.state.order.phase;
    let id = document.querySelector("article").getAttribute("id");
    if (toolPrev === "" && name === "In Production" && name === id) {
      this.setState({
        toolPrev: "",
        noTip: "none",
        toolNext: "Produced",
      });
    } else if (name === "Produced" && name === id) {
      this.setState({
        toolPrev: "In Production",
        toolNext: "In Stock",
      });
    } else if (name === "In Stock" && name === id) {
      this.setState({
        toolPrev: "Produced",
      });
    }
  };

  priority = (e) => {
    OrderService.patchOrder(this.state.order.order_id, {
      prty_lvl: (this.state.order.prty_lvl + 1) % 3,
    }).then((order) => {
      this.important(order);
      this.setState({
        order,
      });
    });
  };

  deleteOrder = (e) => {
    let r = window.confirm(
      "Are you sure you would like to delete the ENTIRE order?"
    );
    if (r) {
      OrderService.deleteOrder(this.state.order.order_id).then((order) => {
        this.setState({
          order,
        });
        this.props.prods();
      });
    }
  };

  deleteSingleOrder = (e) => {
    let r = window.confirm(
      "Are you sure you want to delete ONE product from this order?"
    );
    if (r && this.state.order.amount > 1) {
      OrderService.deleteSingle(this.state.order.order_id, {
        amount: this.state.order.amount - 1,
      }).then((order) => {
        // console.log(order, "THIS IS THE ORDER");
        this.setState({
          order,
        });
        this.props.prods();
      });
    } else {
      this.deleteOrder(e);
    }
  };

  move = async (back) => {
    const order = await OrderService.patchOrder(this.state.order.order_id, {
      amount: this.state.order.amount - 1,
    });
    const nextOrder = await OrderService.getOrderById(
      this.state.order.order_id + 1 + 2 * -+back
    );
    await OrderService.patchOrder(nextOrder.order_id, {
      amount: nextOrder.amount + 1,
    });
    this.setState({ order });
  };

  componentDidMount() {
    this.important(this.state.order);
    this.artBg(this.state.back);
    this.tool(this.state.toolPrev);
  }

  render = () => {
    const prev = this.state.toolPrev;
    const next = this.state.toolNext;

    if (this.state.order === undefined) {
      return null;
    }

    return (
      <ProdSec className="stock">
        <article
          className="product"
          style={{ border: this.state.status, background: this.state.back }}
          id={this.state.order.phase}
        >
          <div>
            <button
              className="orderDelete"
              onClick={this.deleteOrder}
              data-tip="Delete Full Order"
            >
              <img src={trash} alt="Delete" />
            </button>
          </div>
          <div className="prodInfo">
            <span>{this.state.order.product}</span>
            <br />
          </div>
          <h2>{this.state.order.amount}</h2>
          <div className="buttons" style={{ background: this.state.button }}>
            <ReactTooltip />
            {this.state.order.phase !== "In Production" && (
              <button
                id="move"
                onClick={() => this.move(true)}
                style={{ display: this.state.noTip }}
                data-tip={prev}
              >
                &laquo;
              </button>
            )}
            <button
              id="status"
              onClick={this.priority}
              data-tip="Priority Level"
            >
              {" "}
              !{" "}
            </button>
            <button
              id="trash"
              onClick={this.deleteSingleOrder}
              data-tip="Delete 1 Item"
            >
              &ndash;
            </button>
            {this.state.order.phase !== "In Stock" && (
              <button
                id="move"
                onClick={() => this.move(false)}
                data-tip={next}
              >
                &raquo;
              </button>
            )}
          </div>
        </article>
      </ProdSec>
    );
  };
}

export default ProdInfo;

// moveBack = async () => {
//   let order;
//   const prevOrder = await OrderService.getOrderByFkey(
//     this.state.order.order_id
//   );
//   if (prevOrder.length === 0) {
//     let newPhase;
//     if (this.state.order.phase === "In Production") {
//       newPhase = "Produced";
//     }

//     if (this.state.order.phase === "Produced") {
//       newPhase = "In Stock";
//     }
//     const { color, product, prty_level } = this.state.order;
//     const orderToInsert = { color, product, prty_level };
//     await OrderService.postOrder({
//       ...orderToInsert,
//       amount: 1,
//       phase: newPhase,
//     });
//   } else {
//     await OrderService.patchOrder({
//       amount: prevOrder[0].amount + 1
//     })
//   }

//   if (this.state.order.amount === 1) {
//     OrderService.deleteOrder(this.state.order.order_id).then(() => {
//       this.setState({
//         order: {},
//       });
//       this.props.prods();
//     });
//   } else {
//     order = await OrderService.patchOrder(this.state.order.order_id, {
//       amount: this.state.order.amount - 1,
//     });
//     this.setState({
//       order
//     })
//   }
// };

// moving = async () => {
//   let order;
//   let newPhase;
//   if (this.state.order.phase === "In Production") {
//     newPhase = "Produced";
//   }

//   if (this.state.order.phase === "Produced") {
//     newPhase = "In Stock";
//   }

//   const { color, product, prty_level } = this.state.order;
//   const orderToInsert = { color, product, prty_level };
//   if (!this.state.order.next_order) {
//     const nextOrder = await OrderService.postOrder({
//       ...orderToInsert,
//       amount: 1,
//       phase: newPhase,
//     });
//     if (this.state.order.amount === 1) {
//       OrderService.deleteOrder(this.state.order.order_id).then(() => {
//         this.setState({
//           order: {},
//         });
//         this.props.prods();
//       });
//     } else {
//       order = await OrderService.patchOrder(this.state.order.order_id, {
//         next_order: nextOrder.order_id,
//         amount: this.state.order.amount - 1,
//       });
//     }
//   } else {
//     await OrderService.patchLevel(
//       this.state.order.next_order,
//       this.state.order
//     );
//     if (this.state.order.amount === 1) {
//       OrderService.deleteOrder(this.state.order.order_id).then(() => {
//         this.setState({
//           order: {},
//         });
//         this.props.prods();
//       });
//     } else {
//       order = await OrderService.patchOrder(this.state.order.order_id, {
//         amount: this.state.order.amount - 1,
//       });
//     }
//   }
//   this.setState({
//     order,
//   });
// };
