import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <div>
                    <h6 className='product-name'>{name}</h6>
                    <p className='product-price'>Price: ${price}</p>
                </div>
                <div>
                    <p className='manufacturer'>Manufacturer: {seller}</p>
                    <p className='ratings'>Rating: {ratings} Stars</p>
                </div>
            </div>
            
                <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                   <span className='btn-text'>Add to Cart</span> 
                    <FontAwesomeIcon icon={faShoppingCart} />

                </button>
            </div>

        
    );
};

export default Product;