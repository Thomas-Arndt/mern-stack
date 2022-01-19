import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/Context';
import DeleteButton from './DeleteButton';

const ProductList = () => {
    const context = useContext(Context);
    const history = useHistory();
    const axiosController = new AbortController();
    const [ allProducts, setAllProducts ] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products', {signal: axiosController.signal})
            .then(res => {
                setAllProducts(res.data.products)
            })
            .catch(err => console.log(err));
        return () => axiosController.abort();
    }, [context.signal]);

    const viewButtonHandler = (productId) => {
        context.setMode('view'); 
        context.setSignal('view');
        history.push(`/products/${productId}`);
    }

    return (
        <div className="d-flex flex-column align-items-center border border-dark rounded-3 shadow p-3 mt-5 gap-2">
            <h2 className="border-bottom">- Available Products -</h2>
            {allProducts && allProducts.map((product, i) => 
                <div key={i} className="w-100 d-flex justify-content-between align-items-center">
                    <h4 className='m-0'>{product.title}</h4>
                    <div className="d-flex gap-2">
                        <button onClick={()=>viewButtonHandler(product._id)} className='btn-sm btn-success'>View</button>
                        <DeleteButton productid={product._id}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductList;