import React, { useState, useContext, useEffect } from 'react';
import Context from '../context/Context';

const InputForm = ({ socket }) => {
    const context = useContext(Context);
    const [ userInput, setUserInput ] = useState('');

    useEffect(()=> {
        const newChatUser = {
            userEmail: context.userEmail,
            userName: "newUser",
            message: `${context.userName} has joined the chat.`
        }
        socket.emit('new_message_from_client', {msgData: newChatUser, room: context.room});
    }, []);

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const msgData = {
            userEmail: context.userEmail,
            userName: context.userName,
            message: userInput
        }
        socket.emit('new_message_from_client', {msgData: msgData, room:context.room});
        setUserInput('');
    }

    return (
        <form 
                    onSubmit={handleSubmit} 
                    className="d-flex gap-2 mt-3 col-12">
                    <textarea 
                        value={userInput} 
                        onChange={handleChange} 
                        cols="30" rows="4" 
                        placeholder="Type a message..." 
                        style={{resize: 'none'}} 
                        className="form-control">
                    </textarea>
                    <input 
                        type="submit" 
                        value="Send" 
                        className="btn btn-success"/>
                </form>
    )
}

export default InputForm;