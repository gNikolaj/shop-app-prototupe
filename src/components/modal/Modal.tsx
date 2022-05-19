import React, {useState} from 'react';
import './Modal.css';

interface ModalProps {
    addProduct: any;
    showModal: boolean;
    setShowModal: any;
    setEnteredProduct: any;
    idCounter:number;
}

const Modal = ({addProduct, showModal, setShowModal, setEnteredProduct, idCounter}:ModalProps) => {
    const [productName, setName] = useState('');
    const [productNumber, setNumber] = useState('');
    const [productWeight, setWeight] = useState('');


    if (!showModal) return null;

    const confirmForm = (e:any) => {
        e.preventDefault();
        setEnteredProduct((prevState:any) => {
            prevState.id = idCounter;
            prevState.name = productName;
            prevState.count = productNumber;
            prevState.weight = productWeight;
            return prevState;
        })
        console.log(productName, productNumber, productWeight);
        addProduct();
        setShowModal(false);
    }

    return (
        <div className='modal-window'>
            <form >
                <label>Product name</label>
                <input
                    type="text"
                    required
                    value={productName}
                    onChange={e => setName(e.target.value)}
                />
                <label>Number of products</label>
                <input
                    type="text"
                    required
                    value={productNumber}
                    onChange={e => setNumber(e.target.value)}
                />
                <label>Product weight</label>
                <input
                    type="text"
                    required
                    value={productWeight}
                    onChange={e => setWeight(e.target.value)}
                />
                <button onClick={e => confirmForm(e)}>Confirm</button>
                <button onClick={() => {setShowModal(false)}}>Cancel</button>
            </form>
        </div>
    );
};

export default Modal;
