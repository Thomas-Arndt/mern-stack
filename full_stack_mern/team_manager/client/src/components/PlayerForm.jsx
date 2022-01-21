import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const PlayerForm = () => {
    const history = useHistory();
    const [ name, setName ] = useState('');
    const [ nameError, setNameError ] = useState('');
    const [ position, setPosition ] = useState('');
    const [ validForm, setValidForm ] = useState(false);

    const handleChange = (e) => {
        e.target.name==="name" && setName(e.target.value);
        e.target.name==="position" && setPosition(e.target.value);
        if(e.target.name==="name" && e.target.value.length === 0){
            setNameError("");
            setValidForm(false);
        }
        else if(e.target.name==="name" && e.target.value.length < 3){
            setNameError("Name must be more than 3 letters.");
            setValidForm(false);
        }
        else{
            setNameError('');
            setValidForm(true);
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: name,
            position: position,
            status: "U"
        };
        axios.post('http://localhost:8000/api/players/new', formData)
            .then(res=>history.push('/players/list'))
            .catch(err=>setNameError(err.response.data.errors.name.message))
    }



    return (
        <div className="d-flex flex-column align-items-center bg-white border border-dark rounded-3 shadow col-8 gap-3 p-3">
            <h2>- Add Player -</h2>
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                <input type="text" name="name" value={name} onChange={handleChange} placeholder="Player Name (required)" className="form-control"/>
                {nameError && <p className="alert alert-danger m-0 p-2">{nameError}</p>}
                <input type="text" name="position" value={position} onChange={handleChange} placeholder="Preferred Position" className="form-control mt-3"/>
                <div className="d-flex justify-content-center gap-3 mt-3">
                    <button className="btn btn-primary" onClick={()=>history.push('/players/list')}>Back</button>
                    <input type="submit" disabled={!validForm} value="Add Player" className="btn btn-success"/>
                </div>
            </form>
        </div>
    )
}

export default PlayerForm;