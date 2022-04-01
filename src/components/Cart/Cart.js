import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../Actions/cartActions";
import "./Cart.css";

class Cart extends Component {
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <div className="cart-content">
            <div className="cart-line" />
            <div class="cart-container">
              <div className="textCart-container" key={item.id}>
                <img className="gridCart-image" src={item.img} alt={item.img} />
                <div className="productButtonCart-container">
                  {item.stock == 0 ? (
                    <button disabled
                      className="productButtonCart"
                      onClick={() => {
                        this.handleAddQuantity(item.id);
                      }}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      className="productButtonCart"
                      onClick={() => {
                        this.handleAddQuantity(item.id);
                      }}
                    >
                      +
                    </button>
                  )}
                  <p className="productCounterCart">{item.quantity}</p>
                  <button
                    className="productButtonCart"
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  >
                    -
                  </button>
                </div>
                <p className="productCart-name">{item.title}</p>
                <p className="productCart-class">{item.classification}</p>
                <p className="productCart-price">
                  {this.props.currencySymbol}
                  {(item.price * this.props.productPrice).toFixed(2)}
                </p>
                <div className="sizeButtonCart-container">
                  <button className="buttonCart sButtonCart">S</button>
                  <button className="buttonCart mButtonCart">M</button>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="heading">YOUR CART IS EMPTY</div>
    );
    return (
      <div className="cart-wrapper">
        <div className="cart-header">Cart</div>
        {addedItems}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    quantity: state.quantity,
    stock: state.stock,
    productPrice: state.productPrice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
