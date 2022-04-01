import React, { Component } from "react";
import { connect } from "react-redux";
import "./Recipe.css";

class RecipeQuantityNumber extends Component {
  render() {
    return (
      <div className="quantityNumber-container">
        <span className="quantityNumber-primary">{this.props.quantity}</span>
      </div>
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
)(RecipeQuantityNumber);
