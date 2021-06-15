import React from 'react';
import { FormDiv, InputField, SendButton } from "./InputElements";

const Input = ({ setMessage, sendMessage, message }) => (
  <FormDiv>
    <InputField
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <SendButton className="sendButton" onClick={e => sendMessage(e)}>Send</SendButton>
  </FormDiv>
)

export default Input;