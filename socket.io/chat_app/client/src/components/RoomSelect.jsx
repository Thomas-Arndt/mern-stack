import React, { useState } from 'react';
import io from 'socket.io-client';

const RoomSelect = ({ onRoomChange }) => {

    const [ socket ] = useState(() => io(':8000'));

    const handleChange = (e) => {
        onRoomChange(e.target.value);
        socket.emit('change_room', e.target.value);
    }

    return (
            <select onChange={handleChange} className="form-control mt-3">
                <option value="room1">Room 1</option>
                <option value="room2">Room 2</option>
                <option value="room3">Room 3</option>
            </select>
    )
}

export default RoomSelect;