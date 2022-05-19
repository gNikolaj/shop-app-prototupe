import React from 'react';
import './Product.css';

interface ProductProps{
    product:any;
}

const Product = ({product}:ProductProps) => {
    return (
        <div className='product'>
            <h2>{product.name}</h2>
            <div>{product.img}</div>
        </div>
    );
};

export default Product;
