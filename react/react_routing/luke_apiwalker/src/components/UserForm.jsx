import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const UserForm = () => {
    const [resource, setResource] = useState('');
    const [id, setId] = useState(0);
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/${resource}/${id}`);
    }

    return (
        <form onSubmit={submitHandler} className='w-100 d-flex justify-content-between mt-3'>
            <div className="d-flex align-items-center gap-2">
                <h4 className='text-nowrap m-0'>Search for: </h4>
                <select onChange={(e) => setResource(e.target.value)} className='form-control'>
                    <option value="">---</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
            </div>
            <div className='d-flex align-items-center gap-2'>
                <h4 className='m-0'>ID: </h4>
                <input type="number" onChange={(e) => setId(e.target.value)} className='form-control'/>
            </div>
            <input type="submit" value="Search" className='btn btn-primary'/>
        </form>
    )
}
export default UserForm;