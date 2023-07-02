// eslint-disable-next-line
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import React from "react";
// import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./nav.css";

const Nav = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          Logo
          {/* <CrwnLogo className="logo" /> */}
        </Link>
        <div className="link-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
          <Link className="nav-link" to="/shop">
            ABOUT
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
