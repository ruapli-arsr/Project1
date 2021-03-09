import React from "react";
import { Link } from "react-router-dom";


// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/shopReducer/shop-action";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    
  <div class="col">
    <div class="card">
  <img src={product.image} className="card-img-top" alt={product.title}/>
  <div className="card-body text-strech">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <p class="card-text">{product.price}</p>
    <a href="#" className="btn btn-primary"  onClick={() => loadCurrentItem(product)}>View Item</a>
    <a href="#" className="btn btn-primary "  onClick={() => addToCart(product.id)}>Add Item</a>
  </div>
</div>
</div>

  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
