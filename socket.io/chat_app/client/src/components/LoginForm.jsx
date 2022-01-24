import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/Context';

const LoginForm = () => {
    const history = useHistory();
    const context = useContext(Context);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email: email,
            password: password
        }
        axios.post('http://localhost:8000/api/login', formData, { withCredentials: true })
            .then(res => {
                // console.log(res.data);
                context.setUserEmail(res.data.userEmail);
                context.setUserName(res.data.userName);
                history.push('/dashboard');
            })
            .catch(err => console.log(err.response))
            setEmail('');
            setPassword('');
    }

    return (
        <div style={{height: 'fit-content'}} 
            className="mx-auto d-flex flex-column align-items-center col-6 border border-success rounded-3 shadow p-3 mt-5">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} 
                className="d-flex flex-column gap-2 mt-3 col-8">
                <input value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    type="text" 
                    placeholder="Email" 
                    className="form-control" />
                <input value={password} 
                    onChange={(e)=>setPassword(e.target.value)} 
                    type="password" 
                    placeholder="Password" 
                    className="form-control mt-3" />
                <input type="submit" 
                    value="Login" 
                    className="btn btn-primary col-6 mx-auto mt-3"/>
            </form>
            <p className="mt-3">Don't have an account? <a href="" onClick={(e)=>history.push('/register')}>Register</a></p>
        </div>
    )
}

export default LoginForm;