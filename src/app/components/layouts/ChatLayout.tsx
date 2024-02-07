"use client";
import {
  ChatText,
  Container,
  LeftContent,
  UsersDiv,
  ChatDiv,
} from "@/app/styles/chat-styled/styled";
import UserListItem from "../chat/UserListItem";
import ChatTopContent from "../chat/ChatTopContent";
import ChatContent from "../chat/ChatContent";
import WriteMessage from "../chat/WriteMessage";
import userData from "../chat/FakeData.json";
import { StartChatButton } from "../_molecules/Button";
import { styled } from "styled-components";
import { MainLayout } from ".";
import { useState } from "react";

const initialMessages = [
  {
    text: "So, it’s up to you!",
    owner: true,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    text: "It’ll be great! I need this job, but...",
    owner: true,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    text: "Wow! I can invite you in my new project. We need a product designer right now!",
    owner: false,
  },
  {
    text: "Nope, they kicked me out of the office!",
    owner: true,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  { text: "Nice", owner: false },
  { text: "So, it’s up to you!", owner: false },
];

const ChatLayout = () => {
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState<any>([]);
  const [inputText, setInputText] = useState("");
  const [secondUser, setSecondUser] = useState(true);
  const handleShowChat = () => {
    setShow(true);
  };

  const handleSendMessage = () => {
    const newMessage = { text: inputText, owner: secondUser };
    setMessages((prev:any) => [...prev, newMessage]);
    setInputText("");
    console.log("შესრულდა");
  };

  const handleBackToFirstPage = () => {
    setShow(false);
    setMessages(initialMessages);
    setInputText("");
  };

  return (
    <MainLayout>
      <Container>
        <LeftContent>
          <UsersDiv>
            <ChatText>
              <Heading>Chats</Heading>
              <button onClick={() => setSecondUser(!secondUser)}>
                {secondUser ? "current_user" : "second_user"}
              </button>
            </ChatText>
            {userData.map((user, index) => (
              <UserListItem onClick={handleShowChat} key={index} user={user} />
            ))}
          </UsersDiv>
          <StartChatButton />
        </LeftContent>
        {show && (
          <ChatDiv>
            <ChatTopContent username="BRANDON WILSON" lastActive="4" />
            <ChatContent messages={messages} />
            <WriteMessage
              setInputText={setInputText}
              inputText={inputText}
              onSendMessage={handleSendMessage}
            />
          </ChatDiv>
        )}
        <button onClick={handleBackToFirstPage}>Go Back to First Page</button>
      </Container>
    </MainLayout>
  );
};

export default ChatLayout;

const Heading = styled.h3``;
