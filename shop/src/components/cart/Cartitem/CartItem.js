import React, { useState } from "react";


import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/shopReducer/shop-action";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div class="col">
    <div class="card">
  <img src={item.image} className="card-img-top" alt={item.title}/>
  <div className="card-body text-strech">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
    <p class="card-text">$ {item.price}</p>
    <div style={{width:5}}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>

        <a href="#" className="btn btn-primary mt-2"  onClick={() => removeFromCart(item.id)}> Item</a>
       
  </div>
</div>
</div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);