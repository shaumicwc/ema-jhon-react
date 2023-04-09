import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
                // get ID
        for (const id in storedCart) {
                // get the product by using ID
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                // get quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // add the added product to saved cart
                savedCart.push(addedProduct)
            }
        }
                // set cart
        setCart(savedCart);

    }, [products])

    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find( pd => pd.id === product.id)
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
        } else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, product];
        }
        setCart(newCart);
        addToDb(product.id)
    }

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)


                }

            </div>

            <div className="cart-container">
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                >
                    <Link to = '/orders' className='proceed-link'>
                        <button className='btn-proceed'>Review Order</button>
                    </Link>
                </Cart>

            </div>

        </div>
    );
};

export default Shop;