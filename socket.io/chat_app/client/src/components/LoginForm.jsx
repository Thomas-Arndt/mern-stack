import React from 'react';

const LoginForm = () => {
    return (
        <div style={{height: 'fit-content'}} 
            className="mx-auto d-flex flex-column align-items-center col-6 border border-success rounded-3 shadow p-3 mt-5">
            <h1>Login</h1>
            <form className="d-flex flex-column gap-2 mt-3 col-8">
                <input type="text" placeholder="Email" className="form-control" />
                <input type="text" placeholder="Password" className="form-control mt-3" />
                <input type="submit" value="Login" className="btn btn-primary col-6 mx-auto mt-3"/>
            </form>
        </div>
    )
}

export default LoginForm;