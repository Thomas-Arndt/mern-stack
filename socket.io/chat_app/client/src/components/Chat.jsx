import React, { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import Context from '../context/Context';
import ChatWindow from './ChatWindow';

const Chat = () => {
    const context = useContext(Context);
    const [ messages, setMessages ] = useState([]);
    const [ userInput, setUserInput ] = useState('');

    const [ socket ] = useState(() => io(':8000'));

    useEffect(() => {
        socket.on('new_message_from_server', msg => 
            setMessages(messages => {
                return [...messages, msg];
            })
        );
        return () => socket.disconnect(true);
    }, []);

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const msgData = {
            uuid: context.uuid,
            userName: context.uuid,
            message: userInput
        }
        socket.emit('new_message_from_client', msgData);
        setUserInput('');
    }

    return (
            <div style={{height: 'fit-content'}} 
                className="mx-auto d-flex flex-column align-items-center col-6 border border-success rounded-3 shadow p-3 mt-5">
                <h1>Chatter Box</h1>
                <ChatWindow messages={messages}/>
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
            </div>
    )
}

export default Chat;