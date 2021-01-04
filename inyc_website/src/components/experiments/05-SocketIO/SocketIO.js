import React, {useContext, useEffect} from 'react';
import {SocketContext} from '../../SocketIO/SocketProvider';

const SocketIO = (props) => {
    console.log('[SocketIO] constructor', props);    
    const socket = useContext(SocketContext)

    useEffect(() => {
        console.log('[SocketIO] useEffect', props);
        
        socket.on("event-receipt", receiveEvent)

        return(() => {
            socket.off("event-receipt", receiveEvent)
        })
        

    }, [props, socket]);

    const handleClick = (event) => {
        console.log("[SocketIO] handleClick", event.target);
        socket.emit("test-event", "pass value")
    }    

    const receiveEvent = (data) => {
        console.log("on event-receipt:", data);
    }

    return ( 
        <div>
            <div>Do some work here</div>
            <button onClick={handleClick}>Send Test Event!</button>
        </div>
     );
}
 
export default SocketIO;