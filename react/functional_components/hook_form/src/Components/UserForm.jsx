import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    return(
        <div>
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value)}></input>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value)}></input>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setPasswordConfirm(e.target.value)}></input>
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