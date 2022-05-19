import axios from "axios";

export const getProducts = async () => {
    const {data: products} = await axios.get('http://localhost:8000/products');
    return products;
}

export const postProducts = (product: any) => {
    return axios.post('http://localhost:8000/products', product)
}