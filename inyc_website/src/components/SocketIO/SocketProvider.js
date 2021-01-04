import React from "react";
import io from "socket.io-client";
const SOCKET_URL = 'http://localhost:3001'

export const socket = io(SOCKET_URL);
export const SocketContext = React.createContext(socket);

socket.on("connect", data => {
    console.log("[SocketProvider] on connect:", socket.id);
});

socket.on("disconnect", data => {
    console.log("[SocketIO] on disconnect:", socket.id);
});

socket.on("event-receipt", data => {
    console.log("[SocketProvider] on event-receipt:", data);
})