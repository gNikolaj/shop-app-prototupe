import React, {useEffect, useState} from 'react';
import './ProductList.css';
import Product from "../product/Product";
import {getProducts, postProducts} from "../../api";
import {AxiosResponse} from "axios";
import ModalForm from "../modal-form/ModalForm";

const ProductList = () => {
    const [productsList, setList] = useState<object[]>([])
    const [showModal, setShowModal] = useState(false);

    const addProduct = (product: object) => {
        postProducts(product).then((res: AxiosResponse<object>) => {
            setList([...productsList, res.data]);
        })
    }

    useEffect(() => {
        getProducts().then((productsList) => {
            setList(productsList);
        })
    }, [])

    return (
        <div className='products-list'>
            {showModal && <ModalForm addProduct={addProduct} setShowModal={setShowModal}/>}
            <h1>Products List</h1>
            <div className='products-in-list'>
                {productsList.map((item: any) => (
                    <Product product={item} key={item.id}/>
                ))}
            </div>
            <button className='add-product-btn' onClick={() => setShowModal(true)}>
                Add product
            </button>
        </div>
    );
};

export default ProductList;
