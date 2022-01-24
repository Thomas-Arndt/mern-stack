import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ChatWindow from './ChatWindow';
import InputForm from './InputForm';

const Chat = () => {
    const [ messages, setMessages ] = useState([]);

    const [ socket ] = useState(() => io(':8000'));

    useEffect(() => {
        socket.on('new_message_from_server', msg => 
            setMessages(messages => {
                return [...messages, msg];
            })
        );
        return () => socket.disconnect(true);
    }, []);

    return (
            <div style={{height: 'fit-content'}} 
                className="mx-auto d-flex flex-column align-items-center col-6 border border-success rounded-3 shadow p-3 mt-4">
                <ChatWindow messages={messages}/>
                <InputForm />
            </div>
    )
}

export default Chat;