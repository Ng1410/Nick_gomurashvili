import React, { Component } from "react";
import { connect } from "react-redux";
import "./Recipe.css";

class RecipeQuantity extends Component {
  render() {
    return (
      <p className="quantity-primary">
        My Bag
        <span className="quantity-secondary">,{this.props.quantity} items</span>
      </p>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
    quantity: state.quantity
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeQuantity);
