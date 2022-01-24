import React, { useState, useEffect, useContext } from 'react';
import Context from '../context/Context';

const ChatBubble = (props) => {
    const context = useContext(Context);
    const { msg } = props;
    const [ bubbleAlign, setBubbleAlign ] = useState('')
    const [ bubbleStyle, setBubbleStyle ] = useState('')

    useEffect(() => {
        if(msg.userName != "newUser"){
            msg.userEmail == context.userEmail ? 
            setBubbleAlign('d-flex justify-content-end') : 
            setBubbleAlign('d-flex justify-content-start');
            msg.userEmail == context.userEmail ?
            setBubbleStyle('border rounded-3 bg-success p-2') :
            setBubbleStyle('d-flex flex-column border rounded-3 bg-info gap-1 p-2');
        }
        else{
            setBubbleAlign('d-flex justify-content-center')
            setBubbleStyle('')
        }
    }, [msg]);


    return (
        <div className={bubbleAlign}>
            <p 
                style={{maxWidth: '80%', overflowWrap: 'break-word'}} 
                className={bubbleStyle}>
                {(msg.userEmail != context.userEmail && msg.userName != 'newUser') && 
                    <span style={{fontWeight: 'bold'}}>{msg.userName} said...</span>}
                {msg.message}
            </p>
        </div>
    )
}

export default ChatBubble;