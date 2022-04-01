import React, { Component } from "react";
import { connect } from "react-redux";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "../Actions/cartActions";
import RecipeQuantity from "../Recipes/RecipeQuantity";
import RecipeTotal from "../Recipes/RecipeTotal";
import "./Bag.css";

class Bag extends Component {
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
          <div className="bag-container" key={item.id}>
            <img className="grid-image" src={item.img} alt={item.img} />
            <div className="productButton-container">
            {item.stock == 0 ? (
               <button disabled
               className="productButton"
               onClick={() => {
                 this.handleAddQuantity(item.id);
               }}
             >
               +
             </button>
              ) : (
                <button
                className="productButton"
                onClick={() => {
                  this.handleAddQuantity(item.id);
                }}
              >
                +  
              </button>
              )}
              <p className="productCounter">{item.quantity}</p>
              
              <button
                className="productButton"
                onClick={() => {
                  this.handleSubtractQuantity(item.id);
                }}
              >
                -
              </button>
            </div>
            <p className="productBag-name text">{item.title}</p>
            <p className="productBag-class text">{item.classification}</p>
            <p className="productBag-price">
              <b>
                {this.props.currencySymbol}
                {(item.price * this.props.productPrice).toFixed(2)}
              </b>
            </p>
            <div className="sizeButton-container">
              <button className="sButton sizebuttonBag">S</button>
              <button disabled className="mButton sizebuttonBag">
                M
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <div>YOUR CART IS EMPTY</div>
    );
    return (
      <div className="bag-wrapper">
        <div className="bag-container">
        <RecipeQuantity />
          {addedItems}
          <RecipeTotal />
        </div>
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
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bag);
