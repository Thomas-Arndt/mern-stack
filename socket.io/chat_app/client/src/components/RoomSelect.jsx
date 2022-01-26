import React, { useState, useEffect, useContext } from 'react';
import Context from '../context/Context';

const RoomSelect = ({ socket }) => {
    const context = useContext(Context);

    useEffect(() => {
        context.setRoom("Room 1");
        socket.emit('room_change', "Room 1");
    }, []);

    const handleChange = (e) => {
        // console.log(e.target.value);
        context.setRoom(e.target.value);
    }

    return (
            <div>
                <h6 className="text-center mt-3">Choose a public room:</h6>
                <select
                    onChange={handleChange}
                    defaultValue="Room 1"
                    className="form-control mt-3">
                    <option value="Public Room 1">Public Room 1</option>
                    <option value="Public Room 2">Public Room 2</option>
                    <option value="Public Room 3">Public Room 3</option>
                </select>
                <h6 className="text-center mt-3">Or create a private room:</h6>
                <input 
                    type="text" 
                    // value={context.room} 
                    onChange={(e)=>context.setRoom(e.target.value)}
                    className="form-control"/>
            </div>
    )
}

export default RoomSelect;