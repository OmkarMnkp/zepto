import React, { useContext } from 'react';
import './Cart.css';
import CartContext from '../../context/CartContext';
import del from '../../assets/delete.png';
import { useNavigate } from 'react-router-dom';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, dispatch } = useContext(CartContext);

  const navigate = useNavigate();

  const HandleCheckout =()=>{
    navigate('/checkout')
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const increaseQty = (id) => {
    dispatch({ type: 'INC_QTY', payload: id });
  };

  const decreaseQty = (id) => {
    dispatch({ type: 'DEC_QTY', payload: id });
  };

  const TotalPrice = cartItems.reduce((curr, nxt) => curr + nxt.price * nxt.qty, 0);
  const TotalItems = cartItems.length;

  

  return (
    <div className={`cart-container ${isOpen ? 'open' : ''}`}>
      <div className="cart-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Your Cart</h2>
        <hr />

        <div className=''>
          <div className='green d-flex' style={{ marginBottom: '10px', backgroundColor: "rgb(137, 243, 137)", border: 'green', borderRadius: '10px', padding: '6px' }}>
            <p>Saved $1181 including $25 through free delivery!</p>
          </div>

          <div className='yellow d-flex' style={{ backgroundColor: "rgb(255, 162, 24)", color: 'black', borderRadius: '10px', padding: '6px' }}>
            <p>Saved $75 more <span>code:STEAL75</span> </p>
            <button style={{ height: '30px', marginTop: '20px', border: 'none' }} >Apply</button>
          </div>

          <div  style={{ marginTop: '10px', backgroundColor: "rgb(140, 196, 248)", color: 'black', borderRadius: '10px', padding: '6px' }}>
            <h4>Total Items: {TotalItems}</h4>
            <h4>Total Price: ₹{TotalPrice}</h4>
          </div>

          <p>Delivery in 10 mins</p>
        </div>

        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul className="list-group">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item">
                <h5 >{item.name}</h5>
                <div className='d-flex gap-3'>

                  <p>Quantity: {item.qty}</p>

                  {/* <RiDeleteBin6Fill style={{height:'40px'}} onClick={() => removeItem(item.id)} /> */}
                  <img src={del} style={{height:'30px',marginLeft:'70px'}} onClick={() => removeItem(item.id)} /> 

                </div>

                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>
                  <img src={item.image} alt={item.name} style={{ height: '50px' }} />
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>

              </li>
            ))}
          </ul>
        )}

        {/* Checkout Button */}
        {cartItems.length > 0 && (
          <div className="checkout-section" style={{ marginTop: '20px', textAlign: 'center' }}>
            <button
              className='btn btn-danger'
              style={{ width: '100%', padding: '10px', fontSize: '18px' }}
              onClick={HandleCheckout}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
