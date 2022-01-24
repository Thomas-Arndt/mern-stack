import React, { useState, useContext, useEffect } from 'react';
import io from 'socket.io-client';
import Context from '../context/Context';

const InputForm = () => {
    const context = useContext(Context);
    const [ userInput, setUserInput ] = useState('');

    const [ socket ] = useState(() => io(':8000'));

    useEffect(()=> {
        const newChatUser = {
            userEmail: context.userEmail,
            userName: "newUser",
            message: `${context.userName} has joined the chat.`
        }
        socket.emit('new_message_from_client', newChatUser);
        return () => socket.disconnect(true);
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
        socket.emit('new_message_from_client', msgData);
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