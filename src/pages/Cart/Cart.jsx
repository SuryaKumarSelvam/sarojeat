import React, { useState } from "react";
import "./Cart.css"; 
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addCart,removeCart } from "../../slices/cartSlice";
import { Link } from "react-router-dom";



const Cart = () => {

    const cartItems = useSelector((state) => state.cartData.cartItems || []);

    const dispatch = useDispatch();
   


  const handleQuantityChange = (id, delta) => {
  dispatch(addCart({ id, quantity: delta }));

  };

  const removeItem = (id) => {
    dispatch(removeCart({id}))
  };

  return (
    
    <div className="cart-container">
      <h2 className="cart-title">Your cart</h2>
      
    { cartItems.length > 0 ? (
      cartItems.map((item) => (
        <>
        <div className="cart">
        <div className="cart-item" key={item.id}>
          <div className="cart-item-content">
            <img src={item.img} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4 className="item-title">{item.name}</h4>
              <p className="vendor">Vendor: {item.vendor}</p>
              <p className="box-size">Box Size: {item.boxSize}</p>
            </div>
          </div>

          <div className="cart-item-price">₹ {item.price}.00</div>
          <div className="cart-item-quantity">
            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
          </div>
          <div className="cart-item-total">₹ {item.price * item.quantity}.00</div>

          <IoCloseOutline className="cart-item-remove" onClick={() => removeItem(item.id)}/>
      
        </div>
        </div>
        <div className="cart-mobile">
          <div className="cart-item-content">
            <img src={item.img} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4 className="item-title">{item.name}</h4>
              <p className="vendor">Vendor: {item.vendor}</p>
              <p className="box-size">Box Size: {item.boxSize}</p>
            </div>
            <div className="single-price">
              <p>₹ {item.price}.00</p>
            </div>
          </div>
          <div className="cart-mobile-qty">
            <div className="cart-item-quantity">
            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
          </div>
          <div className="cart-item-total">
            <p>₹ {item.price * item.quantity}.00</p>
            </div>
            <div className="mobile-close">
           <IoCloseOutline className="cart-item-remove" onClick={() => removeItem(item.id)}/>
            </div>
          </div>
        </div>
        </>
      ))
      
    ) :(
        <div className="cart-empty-container">
          <p className="cart-empty">Your Cart is empty</p>
          <Link className="continue-shopping" to="/">
            Continue Shopping
          </Link>
        </div>

      )
      }
       { cartItems.length > 0 ? ( <div className="cart-delivery-section">
        <div className="delivery-header">Delivery</div>
        <p className="delivery-info">
          Please enter your PIN code to check if we deliver to your address
        </p>
        <div className="pincode-input">
          <input type="text" placeholder="Enter PIN code here" />
          <button>Search</button>
        </div>
        <div className="checkout">
          <Link to="/checkout" className="checkout-btn">Check Out</Link>
        </div>
      </div>  ) : (
        <></>
      )
    }
      
    </div>
  );
};

export default Cart;
