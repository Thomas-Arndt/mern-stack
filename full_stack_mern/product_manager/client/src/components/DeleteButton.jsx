import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/Context';

const DeleteButton = (props) => {

    const { productid } = props;
    const context = useContext(Context);
    const history = useHistory();

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/delete/${productid}`)
            .then(res=> {
                context.setSignal(res.data);
                context.mode=='view' && history.push('/');
                context.setMode('new')
            })
    }

    return (
        <button onClick={handleDelete} className="btn-sm btn-danger">Delete</button>
    )
}

export default DeleteButton