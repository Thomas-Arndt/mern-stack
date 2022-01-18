import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductView = (props) => {
    const { id } = useParams();
    const [ product, setProduct ] = useState('Loading product...');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data)
                setProduct(res.data.product)
            })
    }, []);

    return (
        <div className="d-flex flex-column align-items-center border border-dark rounded-3 shadow p-3 mt-4">
            <h2 className="border-bottom">- {product.title} -</h2>
            <h5>{product.price}</h5>
            <p>{product.description}</p>
            <a href={`/products/new`} className="btn btn-success">Home</a>
        </div>
    )
}

export default ProductView;