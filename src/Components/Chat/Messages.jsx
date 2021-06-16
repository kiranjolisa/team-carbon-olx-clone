import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

import EmptyChat from "../../Assets/emptyChat.png"

import './Messages.css'

const Messages = ({ messages, name }) => (
  <>
  <div style = {{
    display:"flex",
    justifyContent : "center"
  }}>{messages.length === 0?<img 
  height = "200px" 
  width = "200px" 
  src = {EmptyChat} 
  alt = "empty_conversation"/>:null}</div>
  <ScrollToBottom className = "messages">
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
  </>
);

export default Messages;
