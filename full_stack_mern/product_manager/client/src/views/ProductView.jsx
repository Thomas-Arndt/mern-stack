import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/Context'
import DeleteButton from '../components/DeleteButton';

const ProductView = () => {
    const context = useContext(Context);
    const { id } = useParams();
    const  history = useHistory();
    const axiosController = new AbortController();
    const [ product, setProduct ] = useState('Loading product...');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`, {signal: axiosController.signal})
            .then(res => {
                setProduct(res.data.product)
            })
            .catch(err=> console.log(err));
            return () => axiosController.abort();
    }, [context.signal]);

    const homeButtonHandler = () => {
        context.setSignal('home');
        history.push('/')
    }

    const editButtonhandler = () => {
        context.setMode('update'); 
        context.setSignal('update');
        history.push(`/products/update/${id}`)
    }

    return (
        <div className="d-flex flex-column align-items-center border border-dark rounded-3 shadow p-3 mt-4">
            <h2 className="border-bottom">- {product.title} -</h2>
            <h5>${product.price}</h5>
            <p>{product.description}</p>
            <div className="d-flex justify-content-center gap-3">
                <button onClick={homeButtonHandler} className="btn-sm btn-success text-decoration-none">Home</button>
                {context.mode==="view" && <button onClick={editButtonhandler} className="btn-sm btn-primary">Edit</button>}
                {context.mode==="view" && <DeleteButton productid={product._id}/>}
                {context.mode==='update' && <button onClick={()=>{context.setMode('view'); history.goBack();}} className="btn-sm btn-primary">Back</button>}
            </div>
        </div>
    )
}

export default ProductView;