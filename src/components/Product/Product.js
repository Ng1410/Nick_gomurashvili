import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
  addToCart,
  clearProduct
} from "../Actions/cartActions";
import "./Product.css";

class Product extends Component {
  handleClickAdd = (id) => {
    this.props.addToCart(id);
  };
  clearProductlist = (id) => {
    this.props.clearProduct(id);
  };
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
    let showItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <dd className="productProduct-content">
            <div className="productProduct-container">
              <div className="imageProduct-container">
                <img
                  className="aditional-image"
                  src={item.img}
                  alt={item.img}
                />
                <img
                  className="aditional-image"
                  src={item.img}
                  alt={item.img}
                />
                <img
                  className="aditional-image"
                  src={item.img}
                  alt={item.img}
                />
              </div>
              <img
                className="gridProduct-image"
                src={item.img}
                alt={item.img}
              />
            </div>
            <div className="textProduct-container" key={item.id}>
              <p className="productProduct-name">{item.title}</p>
              <p className="productProduct-class">{item.classification}</p>
              <p className="productProduct-title">SIZE:</p>
              <div className="sizeButtonProduct-container">
                <button disabled className="sButtonProduct sizeButtonProduct">
                  XL
                </button>
                <button className="mButtonProduct sizeButtonProduct">S</button>
                <button className="sButtonProduct sizeButtonProduct">M</button>
                <button className="mButtonProduct sizeButtonProduct">L</button>
              </div>
              <p className="productProduct-title">PRICE:</p>
              <p className="productProduct-price">
                {this.props.currencySymbol}
                {(item.price * this.props.productPrice).toFixed(2)}
              </p>
              <button className="buttonProduct buttonAddToCart">
                {" "}
                <Link
                  to="/cart"
                  onClick={() => {
                    this.handleClickAdd(item.id);
                    this.clearProductlist(item.id);
                  }}
                >
                  ADD TO CART
                </Link>
              </button>
              <p className="productProduct-description">{item.description}</p>
            </div>
          </dd>
        );
      })
    ) : (
      <div>There is not products selected</div>
    );
    return <div className="productProduct-wrapper">{showItems}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.showItems,
    productPrice: state.productPrice,
    currencySymbol: state.currencySymbol
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
    clearProduct: (id) => {
      dispatch(clearProduct(id));
    },
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
