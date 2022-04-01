import React, { Component } from "react";
import { connect } from "react-redux";
import { showProduct, addToCart } from "../Actions/cartActions";
import { Link } from "react-router-dom";
import "./Women.css";

class Women extends Component {
  handleClickShowProduct = (id) => {
    this.props.showProduct(id);
  };
  handleClickClearProduct = (id) => {
    this.props.clearProduct(id);
  };
  handleClickAdd = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="box-women">
          <Link to="/product" className="ees" />
          <div className="image-women">
            {item.stock > 0 ? (
              <div>
                <Link to="/product">
                  <img
                    className="ees"
                    onClick={() => {
                      this.handleClickShowProduct(item.id);
                    }}
                    src={item.img}
                    alt={item.title}
                  />
                </Link>
                <div className="icons">
                  <img
                    className="icon"
                    onClick={() => {
                      this.handleClickAdd(item.id);
                    }}
                    src="icon/cart.svg"
                    alt="cart SVG"
                  />
                </div>
              </div>
            ) : (
              <div class="parent">
                <img className="disabled " src={item.img} alt={item.title} />
                <div className="child ">
                  <span>OUT OF STOCK</span>
                </div>
              </div>
            )}
          </div>

          <div className="info-women">
            <div className="title-women">
              {item.title} {item.classification}
            </div>
            <div className="subInfo-women">
              <div className="price-women">
                <b>
                  Price: {this.props.currencySymbol}
                  {(item.price * this.props.productPrice).toFixed(2)}
                </b>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="wrapper-women">
        <div className="content-women">
          <div className="heading">Category name</div>
          <div className="content-women">{itemList}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    stock: state.stock,
    productPrice: state.productPrice,
    currencySymbol: state.currencySymbol
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showProduct: (id) => {
      dispatch(showProduct(id));
    },
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Women);
