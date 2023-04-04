import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import './Orders.css'

const Orders = () => {
    const savedCart = useLoaderData();
   const [cart, setCart] = useState([savedCart])

   const handleRemoveFromCart = (id) => {
    //get all the item and set one out
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
}

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    savedCart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={savedCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;