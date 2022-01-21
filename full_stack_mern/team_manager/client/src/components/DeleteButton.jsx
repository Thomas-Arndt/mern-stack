import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/Context';

const DeleteButton = (props) => {
    const { playerid } = props;
    const context = useContext(Context);
    const history = useHistory();
    const [ popup, setPopup ] = useState(false);

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/players/delete/${playerid}`)
            .then(res=> {
                context.setSignal(res.data);
                history.push('/players/list');
            })
    }

    const handlePopup = () => {
        context.setLockout(!context.lockout);
        setPopup(!popup);
    }

    return (
        <div className="d-flex flex-column align-items-center">
            {popup && <p>Remove this player from roster?</p>}
            <div className="d-flex gap-3">
                {popup && <button onClick={handlePopup} className="btn-sm btn-primary">Cancel</button>}
                {popup && <button onClick={handleDelete} className="btn-sm btn-danger">Delete</button>}
                {!popup && <button disabled={context.lockout} onClick={handlePopup} className="btn-sm btn-danger">Delete</button>}
            </div>
        </div>
    )
}

export default DeleteButton