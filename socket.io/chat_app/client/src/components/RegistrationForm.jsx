import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/Context';

const RegistrationForm = () => {
    const history = useHistory();
    const context = useContext(Context);
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        console.log(formData);
        axios.post('http://localhost:8000/api/register', formData)
            .then(res => {
                // console.log(res.data)
                context.setUserEmail(res.data.userEmail)
                context.setUserName(res.data.userName)
                history.push('/dashboard');
            })
            .catch(err => console.log(err.response.data.errors))
        clearForm();
    }

    return (
        <div style={{height: 'fit-content'}} 
            className="mx-auto d-flex flex-column align-items-center col-6 border border-success rounded-3 shadow p-3 mt-5">
            <h1>Registration</h1>
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 mt-3 col-8">
                <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="First Name" className="form-control" />
                <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="Last Name" className="form-control mt-3" />
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" className="form-control mt-3" />
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="form-control mt-3" />
                <input value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="Retype Password" className="form-control mt-3" />
                <input type="submit" value="Register" className="btn btn-primary col-6 mx-auto mt-3"/>
            </form>
            <p className="mt-3">Already have an account? <a href="" onClick={(e)=>history.push('/login')}>Login</a></p>
        </div>
    )
}

export default RegistrationForm;