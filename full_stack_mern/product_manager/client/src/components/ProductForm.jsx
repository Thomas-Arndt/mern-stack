import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/Context';

const ProductForm = (props) => {
    const context = useContext(Context);
    const { mode } = props;
    const { id } = useParams();
    const [ title, setTitle ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ description, setDescription ] = useState('');

    useEffect(() => {
        if(id){
            axios.get(`http://localhost:8000/api/products/${id}`)
                .then(res => {
                    setTitle(res.data.product.title)
                    setPrice(res.data.product.price)
                    setDescription(res.data.product.description)
                })
        }
        if(context.signal==='home'){
            clearFormData();
            context.setMode('new');
        }
    }, [context.signal]);

    const axiosPostPut = () => {
        const formData = {
            title: title,
            price: price,
            description: description
        };

        let endpoint = 'http://localhost:8000/api/products';
        if(context.mode==='new'){
            endpoint += '/new';
            axios.post(endpoint, formData)
                .then(res => context.setSignal(res.data))
                .catch(err => console.log(err))
        }
        else if(context.mode==='update'){
            endpoint+=`/update/${id}`;
            axios.put(endpoint, formData)
                .then(res => context.setSignal(res.data))
                .catch(err => console.log(err))
        }
        
    }

    const clearFormData = () => {
        setTitle('');
        setPrice('');
        setDescription('');
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosPostPut();
        clearFormData();
    }



    return (
        <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center border border-dark rounded-3 shadow p-3 mt-4'>
            <h2 className="border-bottom mt-4">- Enter Product Info -</h2>
            <input type="text" onChange={e=>setTitle(e.target.value)} value={title} className="form-control mt-3" placeholder="Product Name"/>
            <input type="text" onChange={e=>setPrice(e.target.value)} value={price} className='form-control mt-3' placeholder="Retail Price"/>
            <textarea cols="10" rows="4"  onChange={e=>setDescription(e.target.value)} value={description} className='form-control mt-3' placeholder="Description"></textarea>
            {mode==="new" && <input type="submit" className='btn btn-success mt-3' value="Add Product"/>}
            {mode==="update" && <input type="submit" className='btn btn-success mt-3' value="Update Product"/>}
        </form>
    )
}

export default ProductForm