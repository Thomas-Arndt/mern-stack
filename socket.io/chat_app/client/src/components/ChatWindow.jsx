import React, { useState, useEffect } from 'react';
import ChatBubble from './ChatBubble';


const ChatWindow = (props) => {
    const { messages } = props;
    const [ rMessages, setRMessages ] = useState([]);


    useEffect(() => {
        let revMsgs = [...messages];
        setRMessages(revMsgs.reverse());
    }, [messages])
        
    return (
        <div 
            style={{height: '550px'}}
            className="col-12 d-flex flex-column-reverse justify-content-start overflow-auto gap-2 border p-3">
            {rMessages.map((msg, i) => (
                <ChatBubble key={i} msg={msg}/>
            ))}
        </div>
    )
}

export default ChatWindow;