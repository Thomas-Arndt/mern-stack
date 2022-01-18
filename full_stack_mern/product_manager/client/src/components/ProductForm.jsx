import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    const { sendSignal } = props;
    const [ title, setTitle ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ description, setDescription ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            title: title,
            price: price,
            description: description
        })
            .then(res => {
                console.log(res)
                sendSignal(res)
            })
            .catch(err => console.log(err))
        setTitle('');
        setPrice('');
        setDescription('');
    }



    return (
        <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center border border-dark rounded-3 shadow p-3 mt-4'>
            <h2 className="border-bottom mt-4">- Enter Product Info -</h2>
            <input type="text" onChange={e=>setTitle(e.target.value)} value={title} className="form-control mt-3" placeholder="Product Name"/>
            <input type="text" onChange={e=>setPrice(e.target.value)} value={price} className='form-control mt-3' placeholder="Retail Price"/>
            <textarea cols="10" rows="4"  onChange={e=>setDescription(e.target.value)} value={description} className='form-control mt-3' placeholder="Description"></textarea>
            <input type="submit" className='btn btn-success mt-3' value="Add Product"/>
        </form>
    )
}

export default ProductForm