import React from 'react';
import { ChatTopContends , ChatTopContentText , Username , Hours , ChatWith , LastActivite } from '@/app/styles/chat-styled/styled';

const ChatTopContent = ({ username, lastActive }) => {
  return (
    <ChatTopContends>
          <ChatTopContentText>
          <ChatWith> CHAT WITH <Username>{username}</Username> </ChatWith>
          <LastActivite>LAST ONLINE <Hours> {lastActive} HOURS AGO </Hours></LastActivite>
        </ChatTopContentText>
    </ChatTopContends>
  );
};


export default ChatTopContent;
