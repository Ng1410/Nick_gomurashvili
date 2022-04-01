import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Bag from "../Bag/Bag";
import RecipeQuantityNumber from "../Recipes/RecipeQuantityNumber";
import RecipeSwitchCurrence from "../Recipes/RecipeSwitchCurrence";
import "./NavBar.css";

class NavBar extends Component {
  clearProductlist = (id) => {
    this.props.clearProduct(id);
  };
  state = {
    open: false,
  };

  closeMenu = (open) => {
    this.setState({
      open,
    });
  };
  render() {
    const { open } = this.state;
    return (
      <nav className="navigation-wrapper">
        <div className="navigation-container">
          <ul className={open ? "navigation-content" : "nav-links"}>
            <li className="navigation-label">
              <NavLink 
                to="/"
                className="nav-link"
                onClick={(this.closeMenu, this.clearProductlist)}
              >
                WOMEN
              </NavLink>
            </li>
            <li className="navigation-label">
              <NavLink 
                to="/men"
                className="nav-link"
                onClick={(this.closeMenu, this.clearProductlist)}
              >
                MEN
              </NavLink>
            </li>
            <li className="navigation-label">
              <NavLink 
                to="/kids"
                className="nav-link"
                onClick={(this.closeMenu, this.clearProductlist)}
              >
                KIDS
              </NavLink>
            </li>
            <li className="navigation-label">
              <NavLink
                to="/product"
                className="nav-link"
                onClick={this.closeMenu}
              />
            </li>
          </ul>
          <div className="logoNavBar-container">
            <img className="logoNavBar" src="icon/logo.svg" alt="logo SVG" />
          </div>
          <div className="currency-symbol">{this.props.currencySymbol}</div>
          <div className="dropdown-currency">
            <RecipeSwitchCurrence />
            <img className="iconArrow" src="icon/arrow.svg" alt="arrow SVG" />
          </div>

          <div className="dropdown-bag">
            <NavLink to="/cart">
              <img
                className="navbar-cart"
                src="icon/cart-icon.svg"
                alt="cart SVG"
              />
            </NavLink>
            <div className="bag-content">
              <div className="cart-bag">
                <Bag />
              </div>
              <NavLink to="/cart">
                <button className=" button buttonViewBag">VIEW BAG</button>
              </NavLink>
              <button className=" button buttonCheckout">CHECK OUT</button>
            </div>
          </div>
          <div className="quantity-counter">
            <RecipeQuantityNumber />
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currencySymbol: state.currencySymbol,
  };
};
export default connect(mapStateToProps)(NavBar);
