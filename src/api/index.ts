import axios from "axios";

export const getProducts = async () => {
    const {data: products} = await axios.get('http://localhost:8000/products');
    return products;
}