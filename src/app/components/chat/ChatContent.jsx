import React from "react";
import {
  ChatContentDiv,
  Message,
  OwnerMessage,
  UserIcon,
} from "@/app/styles/chat-styled/styled";

const ChatContent = ({ messages }) => {
  return (
    <ChatContentDiv>
      {messages.map((message, index) => (
        <>
          {message.owner ? (
            <Message key={index} owner={message.owner}>
              <p>{message.text}</p>
              <UserIcon
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="userIcon"
              />
            </Message>
          ) : (
            <OwnerMessage key={index} owner={message.owner}>
              <p>{message.text}</p>
            </OwnerMessage>
          )}
        </>
      ))}
    </ChatContentDiv>
  );
};

export default ChatContent;
