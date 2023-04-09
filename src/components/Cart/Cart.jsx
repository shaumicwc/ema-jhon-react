import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'



const Cart = ({ cart, clearCart, children }) => {

    // let totalPrice = 0;
    // let totalShipping = 0;
    // let quantity = 0;
    // console.log(quantity)
    // for (const product of cart) {
    //     // product.quantity = product.quantity || 1;
    //     totalPrice = totalPrice + product.price * product.quantity;
    //     totalShipping = totalShipping + product.shipping;
    //     quantity = quantity + product.quantity;
    // }
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;


    return (
        <div className='cart'>
            <div>
                <h4 className='order-summary'>Order Summary</h4>
                <p>Selected Items:{quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6 className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</h6>
                <button onClick={clearCart} className='btn-clear-cart'>
                    <span>Clear Cart </span>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Cart;