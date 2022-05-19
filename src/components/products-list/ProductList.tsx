import React, {useEffect, useState} from 'react';
import './ProductList.css';
import Product from "../product/Product";
import {getProducts} from "../../api";
import axios from "axios";
import Modal from "../modal/Modal";

const ProductList = () => {
    const [productsList, setList] = useState([]);
    const [idCounter, setIdCounter] = useState(0);
    const [enteredProduct, setEnteredProduct] = useState({});
    const [showModal, setShowModal] = useState(false);


    const addProduct = () => {
        axios.post('http://localhost:8000/products', enteredProduct)
            .then(() => {
                getProducts().then((productsList) => {
                    setList(productsList);
                    setIdCounter(productsList[productsList.length - 1].id++);
                })
        })
    }

    const openModalWindow = () => {
        setShowModal(true);
    }

    useEffect(() => {
        getProducts().then((productsList) => {
            setList(productsList);
            setIdCounter(productsList[productsList.length - 1].id);
        })
    }, [])

    return (
        <div className='products-list'>
            <div>Products List</div>
            <Modal addProduct={addProduct} showModal={showModal} setShowModal={setShowModal}
                   setEnteredProduct={setEnteredProduct} idCounter={idCounter}/>
            <div className='products-in-list'>
                {productsList.map((item:any) => (
                    <Product product={item} key={item.id}/>
                ))}
            </div>
            <button onClick={openModalWindow}>
                Add product
            </button>
        </div>
    );
};

export default ProductList;
