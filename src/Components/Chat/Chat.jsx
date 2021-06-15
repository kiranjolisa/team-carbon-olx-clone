import React, { useState, useEffect } from "react";
import queryString from "query-string"
import io from "socket.io-client"
import { ChatContainer } from "./ChatElements"
import InfoBar from "./InfoBar";
import Input from "./Input";
import Messages from "./Messages"
let socket;

export const Chat = () => {
   const [ name, setName ] = useState("");
   const [ room, setRoom ] = useState("");
   const [ message, setMessage ] = useState("");
   const [ messages, setMessages ] = useState([]);
   const ENDPOINT = 'localhost:5000'

   useEffect(() => {
      const { name, room } = queryString.parse(window.location.search)
      console.log(name, room)
      socket = io(ENDPOINT);

      setName(name);
      setRoom(room);
      console.log(socket)

      socket.emit('join', { name, room },() => {
      })

      return () => {
         socket.emit('disconnect')
         socket.off()
      }
   }, [ENDPOINT, window.location.search])
   useEffect(() => {
      socket.on('message', (message) => {
         setMessages([...messages,message]);
      })
   })

   //function for sending messages
   const sendMessage = (e) => {
      e.preventDefault()
      if(message){
         socket.emit('sendMessage', message,() => setMessage(''))
      }
   }
   console.log(message, messages);
   return (
         <ChatContainer>
            <InfoBar 
            room = {room}/>
            <Messages 
            messages = {messages} 
            name = {name}/>

            <Input 
            message = {message} 
            setMessage = {setMessage}
            sendMessage = {sendMessage}
            />
            {/* <input 
            value = {message} 
            onChange= {(e) =>setMessage(e.target.value)}
            onKeyPress = {e => e.key === 'Enter'? sendMessage(e):null}
            /> */}
         </ChatContainer>
   )
}