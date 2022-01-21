import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Context from '../context/Context';

const PlayerStatus = () => {
    const context = useContext(Context);
    const [ playerList, setPlayerList ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res=> {
                // console.log(res.data);
                setPlayerList(res.data.players);
            })
            .catch(err=> console.log(err))
    }, [context.signal]);

    const handleStatusChange = (status, playerId) => {
        axios.put(`http://localhost:8000/api/players/update/${playerId}`, {"status":status})
            .then(res=>context.setSignal(res.data))
            .catch(err=>console.log(err))
    }

    return (
        <div className="d-flex flex-column align-items-center bg-white border border-dark rounded-3 shadow col-8 gap-3 p-3">
            <h2>- Player Status -</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th className="text-center">Current Status</th>
                    </tr>
                </thead>
                <tbody>
                    {playerList.map((player, i) => (
                        <tr key={i}>
                            <td>{player.name}</td>
                            <td>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    {player.status==="P"?
                                    <button onClick={()=>handleStatusChange("P", player._id)} className="btn btn-success border border-dark col-3">Playing</button> :
                                    <button onClick={()=>handleStatusChange("P", player._id)} className="btn btn-white border col-3">Playing</button>
                                    }    
                                    {player.status==="NP"?
                                    <button onClick={()=>handleStatusChange("NP", player._id)} className="btn btn-danger border border-dark text-nowrap col-3">Not Playing</button> :
                                    <button onClick={()=>handleStatusChange("NP", player._id)} className="btn btn-white border text-nowrap col-3">Not Playing</button>
                                    }    
                                    {player.status==="U"?
                                    <button onClick={()=>handleStatusChange("U", player._id)} className="btn btn-warning border border-dark col-3">Undecided</button> :
                                    <button onClick={()=>handleStatusChange("U", player._id)} className="btn btn-white border col-3">Undecided</button>
                                    }    
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PlayerStatus;