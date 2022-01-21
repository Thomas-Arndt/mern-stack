import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/Context';
import DeleteButton from './DeleteButton';

const PlayerList = () => {
    const context = useContext(Context);
    const history = useHistory();
    const [ playerList, setPlayerList ] = useState([]);

    useEffect(() => {
        context.setLockout(false);
        axios.get('http://localhost:8000/api/players')
            .then(res=> {
                // console.log(res.data);
                setPlayerList(res.data.players);
            })
            .catch(err=> console.log(err))
    }, [context.signal]);

    return (
        <div className="d-flex flex-column align-items-center bg-white border border-dark rounded-3 shadow col-8 gap-3 p-3">
            <h2>- Player Roster -</h2>
            <table className="table table-striped">
                <thead>
                    <tr className="d-flex">
                        <th className="col-3">Player Name</th>
                        <th className="col-3 text-nowrap">Preferred Position</th>
                        <th className="col-6 text-end"></th>
                    </tr>
                </thead>
                <tbody>
                    {playerList.map((player, i)=>(
                        <tr key={i} className="d-flex">
                            <td className="col-3">{player.name}</td>
                            <td className="col-3">{player.position}</td>
                            <td className="col-6 d-flex justify-content-end"><DeleteButton playerid={player._id}/></td>
                        </tr>
                    ))}
                    <tr className="d-flex">
                        <td className="col-3"><button onClick={()=>history.push('/players/addplayer')} className="btn btn-success rounded-circle font-weight-bold border border-dark offset-2">+</button></td>
                        <td className="col-3"></td>
                        <td className="col-6"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList;