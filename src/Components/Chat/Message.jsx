import React from 'react';
import ReactEmoji from 'react-emoji';

import { 
    MessageBoxBlueBackground,
    MessageBoxLightBackground,
    MessageContainerJustifyEnd, 
    MessageContainerJustifyStart, 
    SentTextPaddingLeft,
    SentTextPaddingRight,
    MessageTextDark,
    MessageTextWhite
} from "./MessageElements"

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <MessageContainerJustifyEnd>
          <SentTextPaddingLeft>{trimmedName}</SentTextPaddingLeft>
          <MessageBoxBlueBackground>
            <MessageTextWhite>{ReactEmoji.emojify(text)}</MessageTextWhite>
          </MessageBoxBlueBackground>
        </MessageContainerJustifyEnd>
        )
        : (
          <MessageContainerJustifyStart>
            <MessageBoxLightBackground>
              <MessageTextDark>{ReactEmoji.emojify(text)}</MessageTextDark>
            </MessageBoxLightBackground>
            <SentTextPaddingRight>{user}</SentTextPaddingRight>
          </MessageContainerJustifyStart>
        )
  );
}

export default Message;