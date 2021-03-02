import React from "react";
import { Link } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <input
          type="text"
          id="searchProduct"
          name="search product"
          maxLength="20"
          className="input-group__search"
        />
        <a href="/cart" className="icon-button">
          Alaha
          <svg>aria-label="Cart" height="22" width="22" fill="gray"</svg>
        </a>
        <button className="button button__logout" onClick={startLogout}>
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
