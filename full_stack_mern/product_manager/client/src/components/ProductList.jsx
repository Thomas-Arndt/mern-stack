import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = (props) => {

    const { signal } = props;
    const [ allProducts, setAllProducts ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                // console.log(res.data)
                setAllProducts(res.data.products)
            })
            .catch(err => console.log(err))
    }, [signal]);


    return (
        <div className="d-flex flex-column align-items-center border border-dark rounded-3 shadow p-3 mt-5">
            <h2 className="border-bottom">- Available Products -</h2>
            {allProducts && allProducts.map((product, i) => 
                <h4 key={i}><a href={`/products/${product._id}`} className="text-decoration-none">{product.title}</a></h4>
            )}
        </div>
    )
}

export default ProductList;