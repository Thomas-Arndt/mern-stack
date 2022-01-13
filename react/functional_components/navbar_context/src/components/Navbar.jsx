import React, { useContext } from 'react';
import UserContext from './../context/UserContext';

const Navbar = () => {
    const context = useContext(UserContext);

    return(
        <div className="bg-primary p-3">
            {context.formName ? 
            <p className="w-100 m-0 text-end text-white">Hi, {context.formName}!</p> : 
            <p className="w-100 m-0 text-end text-white">Enter your name!</p>}
        </div>
    )
}
export default Navbar;