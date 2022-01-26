import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/Context';
import ChatWindow from './ChatWindow';
import InputForm from './InputForm';

const Chat = ({ socket }) => {
    const history = useHistory();
    const context = useContext(Context);
    const [ messages, setMessages ] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authorize', { withCredentials: true })
            .then(res=>{
                // console.log(res);
                socket.on('new_message_from_server', msg => {
                    setMessages(messages => {
                        return [...messages, msg];
                    })
                });
            })
            .catch(err=>history.push('/login'))
        // return () => socket.disconnect(true);
    }, []);

    return (
            <div style={{height: 'fit-content'}} 
                className="mx-auto d-flex flex-column align-items-center col-6 border border-success rounded-3 shadow p-3 mt-5">
                <h2>You are in "{context.room}"</h2>
                <ChatWindow messages={messages} socket={socket}/>
                <InputForm socket={socket}/>
            </div>
    )
}

export default Chat;