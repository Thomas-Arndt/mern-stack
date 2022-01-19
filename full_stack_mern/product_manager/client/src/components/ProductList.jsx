import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = (props) => {

    const [ signal, setSignal ] = useState(props.signal);
    const [ allProducts, setAllProducts ] = useState([]);
    
    const cursorPointer = {"cursor": "pointer"};

    useEffect(() => {
        console.log(`signal: ${signal}`);
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                // console.log(res.data)
                setAllProducts(res.data.products)
            })
            .catch(err => console.log(err))
    }, [signal, props.signal]);

    const handleDelete = (e) => {
        console.log(e.target);
        let id = e.target.getAttribute('productid');
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res=> {
                console.log(`delete: ${res.data}`);
                setSignal(res.data);
            })
    }

    return (
        <div className="d-flex flex-column align-items-center border border-dark rounded-3 shadow p-3 mt-5 gap-2">
            <h2 className="border-bottom">- Available Products -</h2>
            {allProducts && allProducts.map((product, i) => 
                <div key={i} className="w-100 d-flex justify-content-between align-items-center">
                    <h4 className='m-0'>{product.title}</h4>
                    <div className="d-flex gap-2">
                        <a href={`/products/${product._id}`} className="btn-sm btn-success text-decoration-none">View</a>
                        <a productid={product._id} onClick={handleDelete} style={cursorPointer} className="btn-sm btn-danger text-decoration-none">Delete</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductList;