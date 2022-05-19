import React, {useState} from 'react';
import './ModalForm.css';

interface ModalProps {
    addProduct: any;
    setShowModal: any;
}

const ModalForm = ({addProduct, setShowModal}: ModalProps) => {
    const [productName, setName] = useState('');
    const [productNumber, setNumber] = useState('0');
    const [productWeight, setWeight] = useState('');

    const confirmForm = (e: any) => {
        e.preventDefault();
        const updateValue = {
            name: productName,
            count: productNumber,
            weight: productWeight,
            img: 'https://www.nicepng.com/png/full/6-63005_candy-png-file-candy-png.png'
        }
        if (productNumber !== '0' && productName !== '' && productWeight !== '') {
            addProduct(updateValue);
            setShowModal(false);
        }
    }

    return (
        <div className='modal-window'>
            <div className='modal-window-content'>
                <form>
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
        </div>
    );
};

export default ModalForm;
