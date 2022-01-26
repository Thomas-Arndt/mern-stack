import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import RoomSelect from './RoomSelect';

const UserDashboard = ({ socket }) => {
    const history = useHistory();
    const context = useContext(Context);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/authorize', { withCredentials: true })
            .then(res=>console.log(res))
            .catch(err=>history.push('/login'))
    }, []);

    const joinChatRoom = () => {
        if(context.room !== ""){
            socket.emit('room_change', context.room);
        }
        else{
            socket.emit('room_change', "Room 1");
        }
        history.push('/chat');
    }

    return (
        <div style={{height: 'fit-content'}} 
            className="mx-auto d-flex flex-column align-items-center col-6 border border-success rounded-3 shadow p-3 mt-5">
            <h2>Welcome, {context.userName}</h2>
            <RoomSelect socket={socket}/>
            <button onClick={joinChatRoom} className="btn btn-success mt-4">Join Chat</button>
        </div>
    )
}

export default UserDashboard;