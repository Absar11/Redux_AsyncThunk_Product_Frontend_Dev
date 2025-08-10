import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    clearCart,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
} from '../features/cartSlice';
import { toast } from 'react-hot-toast';

const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeProduct(id));
        toast.success('Product removed from cart');
    };

    const handleClearCart = () => {
        dispatch(clearCart());
        toast.success('Cart cleared');
    };

    return (
        <div className="cart-container">
            <style>{`
        .cart-container {
          padding: 2rem;
          background-color: #f9f9f9;
        }

        .cart-item {
          background-color: #fff;
          padding: 1rem;
          margin-bottom: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .cart-item h1 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .cart-item p {
          color: #555;
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .quantity-btn {
          background-color: #008cba;
          color: white;
          border: none;
          padding: 0.3rem 0.6rem;
          margin: 0 0.5rem;
          font-size: 1rem;
          border-radius: 4px;
          cursor: pointer;
        }

        .quantity-btn:hover {
          background-color: #005f73;
        }

        .cart-item button,
        .clear-cart-btn {
          background-color: #ff4d4d;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .cart-item button:hover,
        .clear-cart-btn:hover {
          background-color: #cc0000;
        }

        .clear-cart-btn {
          margin-top: 1.5rem;
        }

        .empty-cart-message {
          font-size: 1rem;
          color: #777;
          text-align: center;
        }
      `}</style>

            <div>
                {cartItems && cartItems.length > 0 ? (
                    cartItems.map((cartItem) => (
                        <div key={cartItem.id} className="cart-item">
                            <h1>{cartItem.title}</h1>
                            <p>{cartItem.description}</p>

                            <div className="quantity-controls">
                                <button
                                    className="quantity-btn"
                                    onClick={() => dispatch(decreaseQuantity(cartItem.id))}
                                >
                                    −
                                </button>
                                <span>Quantity: {cartItem.quantity}</span>
                                <button
                                    className="quantity-btn"
                                    onClick={() => dispatch(increaseQuantity(cartItem.id))}
                                >
                                    +
                                </button>
                            </div>

                            <button onClick={() => handleRemove(cartItem.id)}>
                                Remove Product
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="empty-cart-message">No products in cart, please add some.</p>
                )}
            </div>

            {cartItems.length > 0 && (
                <button className="clear-cart-btn" onClick={handleClearCart}>
                    Clear Cart
                </button>
            )}
        </div>
    );
};

export default Cart;
