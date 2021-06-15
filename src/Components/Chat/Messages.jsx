import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

import EmptyChat from "../../Assets/emptyChat.png"

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
  <ScrollToBottom style = {{padding: "5% 0",
    overflow: "auto",
    flex: "auto"}}>
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
  </>
);

export default Messages;