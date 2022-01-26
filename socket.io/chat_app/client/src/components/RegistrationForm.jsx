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
    const [ firstNameError, setFirstNameError ] = useState(null);
    const [ lastNameError, setLastNameError ] = useState(null);
    const [ emailError, setEmailError ] = useState(null);
    const [ passwordError, setPasswordError ] = useState(null);
    const [ confirmPasswordError, setConfirmPasswordError ] = useState(null);
    const [ validForm, setValidForm ] = useState(false);

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    const handleChange = (e) => {
        e.target.name==="firstName" && setFirstName(e.target.value)
        e.target.name==="lastName" && setLastName(e.target.value)
        e.target.name==="email" && setEmail(e.target.value)
        e.target.name==="password" && setPassword(e.target.value)
        e.target.name==="confirmPassword" && setConfirmPassword(e.target.value)
        if(e.target.name==="firstName"){
            if(e.target.value.length !== 0 && e.target.value.length < 3){
                setFirstNameError("First name must be at least 3 characters.");
                setValidForm(false);
            }
            else{
                setFirstNameError(null);
                setValidForm(true);
            }
        }
        if(e.target.name==="lastName"){
            if(e.target.value.length !== 0 && e.target.value.length < 3){
                setLastNameError("Last name must be at least 3 characters.");
                setValidForm(false);
            }
            else{
                setLastNameError(null);
                setValidForm(true);
            }
        }
        if(e.target.name==="email"){
            if(/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(e.target.value)){
                setEmailError(null);
                setValidForm(true);
            }
            else{
                setEmailError('Invalid email');
                setValidForm(false);
            }
        }
        if(e.target.name==="password"){
            if(e.target.value.length !== 0 && e.target.value.length < 8){
                setPasswordError("Password must be at least 8 characters.");
                setValidForm(false);
            }
            else{
                setPasswordError(null);
                setValidForm(true);
            }
        }
        if(e.target.name==="confirmPassword"){
            if(e.target.value.length !== 0 && e.target.value != password){
                setConfirmPasswordError("Passwords must match.");
                setValidForm(false);
            }
            else{
                setConfirmPasswordError(null);
                setValidForm(true);
            }
        }
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
        axios.post('http://localhost:8000/api/register', formData, { withCredentials: true })
            .then(res => {
                // console.log(res.data)
                context.setUserEmail(res.data.userEmail);
                context.setUserName(res.data.userName);
                history.push('/dashboard');
            })
            .catch(err => {
                console.log(err.response);
                const errResponse = err.response.data.errors;
                errResponse.firstName && setFirstNameError(errResponse.firstName.message);
                errResponse.lastName && setLastNameError(errResponse.lastName.message);
                errResponse.email && setEmailError(errResponse.email.message);
                errResponse.password && setPasswordError(errResponse.password.message);
                errResponse.confirmPassword && setConfirmPasswordError(errResponse.confirmPassword.message);
                setValidForm(false);
            })
        clearForm();
    }

    return (
        <div style={{height: 'fit-content'}} 
            className="mx-auto d-flex flex-column align-items-center col-6 border border-success rounded-3 shadow p-3 mt-5">
            <h1>Registration</h1>
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 mt-3 col-8">
                <input 
                    name="firstName" 
                    value={firstName} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="First Name" 
                    className="form-control" />
                {firstNameError && <p className="alert alert-danger mb-0">{firstNameError}</p>}
                <input 
                    name="lastName" 
                    value={lastName} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Last Name" 
                    className="form-control mt-3" />
                {lastNameError && <p className="alert alert-danger mb-0">{lastNameError}</p>}
                <input 
                    name="email" 
                    value={email} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Email" 
                    className="form-control mt-3" />
                {emailError && <p className="alert alert-danger mb-0">{emailError}</p>}
                <input 
                    name="password" 
                    value={password} 
                    onChange={handleChange} 
                    type="password" 
                    placeholder="Password" 
                    className="form-control mt-3" />
                {passwordError && <p className="alert alert-danger mb-0">{passwordError}</p>}
                <input 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    onChange={handleChange} 
                    type="password" 
                    placeholder="Retype Password" 
                    className="form-control mt-3" />
                {confirmPasswordError && <p className="alert alert-danger mb-0">{confirmPasswordError}</p>}
                <input 
                    type="submit" 
                    value="Register"
                    disabled={!validForm} 
                    className="btn btn-primary col-6 mx-auto mt-3"/>
            </form>
            <p className="mt-3">Already have an account? <a href="" onClick={(e)=>history.push('/login')}>Login</a></p>
        </div>
    )
}

export default RegistrationForm;