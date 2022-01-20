import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const DeleteButton = (props) => {
    const { removeFromDOM, authorid } = props;
    const history = useHistory();


    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/authors/delete/${authorid}`)
            .then(res=> {
                // console.log(res.data);
                removeFromDOM(authorid)
                history.push('/');
            })
            .catch(err=>console.log(err))
    }

    return (
        <button onClick={handleDelete} className="btn-sm btn-danger">Delete</button>
    )
}

export default DeleteButton;