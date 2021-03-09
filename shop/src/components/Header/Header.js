import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return(
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <h2>GoShop</h2>
        </a>
        <a>
          <Link to="/cart">
          <div style={{color:"white"}}><img src="https://image.flaticon.com/icons/svg/102/102276.svg" alt="" width="30" height="24"/>   {cartCount}</div>
          </Link>
        
        </a>
      </div>
    </nav>
  )
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);

