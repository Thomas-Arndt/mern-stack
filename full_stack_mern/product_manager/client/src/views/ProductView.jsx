import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const ProductView = (props) => {
    const { signal, mode } = props;
    const { id } = useParams();
    const  history = useHistory();
    const [ product, setProduct ] = useState('Loading product...');

    const cursorPointer = {"cursor": "pointer"};

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data)
                setProduct(res.data.product)
            })
    }, [signal]);

    const handleDelete = (e) => {
        console.log(e.target);
        let id = e.target.getAttribute('productid');
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res=> {
                console.log(`delete: ${res.data}`);
                history.push('/')
            })
    }

    return (
        <div className="d-flex flex-column align-items-center border border-dark rounded-3 shadow p-3 mt-4">
            <h2 className="border-bottom">- {product.title} -</h2>
            <h5>{product.price}</h5>
            <p>{product.description}</p>
            <div className="d-flex justify-content-center gap-3">
                <a href={`/`} className="btn-sm btn-success text-decoration-none">Home</a>
                {mode==="view" && <a href={`/products/update/${id}`} className="btn-sm btn-primary text-decoration-none">Edit</a>}
                {mode==="view" && <a onClick={handleDelete} productid={product._id} style={cursorPointer} className="btn-sm btn-danger text-decoration-none">Delete</a>}
            </div>
        </div>
    )
}

export default ProductView;