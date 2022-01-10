import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length <= 0){
            setFirstNameError("")
        }
        else if(e.target.value.length < 2){
            setFirstNameError("First name must be at least 2 characters.");
        }
        else{
            setFirstNameError("");
        }
    }

    const handleLastNameError = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length <= 0){
            setLastNameError("")
        }
        else if(e.target.value.length < 2){
            setLastNameError("Last name must be at least 2 characters.");
        }
        else{
            setLastNameError("");
        }
    }

    const handleEmailError = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length <= 0){
            setEmailError("")
        }
        else if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters.");
        }
        else{
            setEmailError("");
        }
    }

    const handlePasswordError = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length <= 0){
            setPasswordError("")
        }
        else if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters.");
        }
        else{
            setPasswordError("");
        }
    }

    const handlePasswordConfirmError = (e) => {
        setPasswordConfirm(e.target.value);
        if(e.target.value.length <= 0){
            setPasswordConfirmError("")
        }
        else if(e.target.value != password){
            setPasswordConfirmError("Passwords do not match.")
        }
        else{
            setPasswordConfirmError("");
        }
    }

    return(
        <div>
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirstName}></input>
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{firstNameError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLastNameError}></input>
                    {
                        lastNameError ?
                        <p style={{color:'red'}}>{lastNameError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={handleEmailError}></input>
                    {
                        emailError ?
                        <p style={{color:'red'}}>{emailError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={handlePasswordError}></input>
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{passwordError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={handlePasswordConfirmError}></input>
                    {
                        passwordConfirmError ?
                        <p style={{color:'red'}}>{passwordConfirmError}</p> :
                        ''
                    }
                </div>
            </form>
            <h4>Your Form Data</h4>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {passwordConfirm}</p>
        </div>
    );
};

export default UserForm;