import React, { Component } from "react";
import { connect } from "react-redux";
import "./Recipe.css";

class RecipeTotal extends Component {
  render() {
    return (
      <div className="total-container">
        <p>
          Total:{" "}
          <span className="total-primary">
            {this.props.currencySymbol}
            {(this.props.total * this.props.productPrice).toFixed(2)}
          </span>
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
    quantity: state.quantity,
    productPrice: state.productPrice,
    currencySymbol: state.currencySymbol
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
)(RecipeTotal);
