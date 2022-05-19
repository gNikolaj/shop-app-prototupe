import React from 'react';
import './ProductInfo.css';

interface ProductInfoProps {
    product: any;
    setProductInfo: any;
}

const ProductInfo = ({product, setProductInfo}:ProductInfoProps) => {
    return (
        <div className='modal-window'>
            <div className='product-info-content'>
                <h1>{product.name}</h1>
                <img src={product.img} alt="img"/>
                <h2>Count: {product.count}</h2>
                <h2>Weight: {product.weight}</h2>
                <button onClick={() => setProductInfo(false)}>Close</button>
            </div>
        </div>
    );
};

export default ProductInfo;
