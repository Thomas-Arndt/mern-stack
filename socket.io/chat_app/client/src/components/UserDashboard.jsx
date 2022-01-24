import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';

const UserDashboard = () => {
    const history = useHistory();
    const context = useContext(Context);

    return (
        <div style={{height: 'fit-content'}} 
            className="mx-auto d-flex flex-column align-items-center col-6 border border-success rounded-3 shadow p-3 mt-5">
            <h2>Welcome, {context.userName}</h2>
            <button onClick={(e)=>history.push('/chat')} className="btn btn-success mt-4">Join Chat</button>
        </div>
    )
}

export default UserDashboard;