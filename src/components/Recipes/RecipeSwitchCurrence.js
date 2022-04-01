import React, { Component } from "react";
import { connect } from "react-redux";
import "./Recipe.css";
import {
  switchCurrencyUSD,
  switchCurrencyEUR,
  switchCurrencyYEN,
} from "../Actions/cartActions";

class RecipeSwitchCurrence extends Component {
  handleCurrencyUSD = (id) => {
    this.props.switchCurrencyUSD(id);
  };
  handleCurrencyEUR = (id) => {
    this.props.switchCurrencyEUR(id);
  };

  handleCurrencyYEN = (id) => {
    this.props.switchCurrencyYEN(id);
  };

  render() {
    return (
      <div className="currency-content">
        <ul className="money">
          <li className="currency-label" onClick={this.handleCurrencyUSD}>
            $ USF
          </li>
          <li className="currency-label" onClick={this.handleCurrencyEUR}>
            € EUR
          </li>
          <li className="currency-label" onClick={this.handleCurrencyYEN}>
            ¥ JPY
          </li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productPrice: state.productPrice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    switchCurrencyUSD: (id) => {
      dispatch(switchCurrencyUSD(id));
    },
    switchCurrencyEUR: (id) => {
      dispatch(switchCurrencyEUR(id));
    },
    switchCurrencyYEN: (id) => {
      dispatch(switchCurrencyYEN(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeSwitchCurrence);
