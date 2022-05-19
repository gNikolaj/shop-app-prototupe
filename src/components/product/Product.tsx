import React, {useState} from 'react';
import './Product.css';
import ProductInfo from "../product-info/ProductInfo";

interface ProductProps {
    product: any;
}

const Product = ({product}: ProductProps) => {
    const [productInfo, setProductInfo] = useState(false);

    return (
        <div className='product'>
            {productInfo && <ProductInfo product={product} setProductInfo={setProductInfo}/>}
            <button onClick={() => setProductInfo(true)}>
                <h2>{product.name}</h2>
                <img
                    src={product.img}
                    alt="candy"/>
            </button>
        </div>

    );
};

export default Product;
