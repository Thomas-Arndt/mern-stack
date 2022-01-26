import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/Context';

const NavBar = ({socket}) => {
    const history = useHistory();
    const context = useContext(Context);

    const handleLogout = () => {
        axios.get('http://localhost:8000/logout', { withCredentials: true })
            .then(res=>{
                // console.log(res.data);
                context.setUserEmail('');
                context.setUserName('');
                socket.disconnect(true);
                history.push('/');
            })
    }

    return (
        <div className="w-100 d-flex justify-content-between border-bottom border-dark p-3">
            <button onClick={()=>history.push('/dashboard')} className="btn btn-primary">Dashboard</button>
            <h1>Chatter Box</h1>
            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
        </div>
    )
}

export default NavBar;