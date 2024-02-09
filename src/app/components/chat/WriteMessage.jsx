import React from "react";
import {
  Cliper,
  SendIcons,
  MessageIconsDiv,
  WriteMessageDiv,
  MessageInput,
} from "@/app/styles/chat-styled/styled";

const WriteMessage = ({ onSendMessage, setInputText, inputText }) => {
  return (
    <WriteMessageDiv>
      <MessageInput
        type="text"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        placeholder="Write your message"
      />
      <MessageIconsDiv>
        <Cliper
          src="https://cdn-icons-png.flaticon.com/128/8138/8138518.png"
          alt="clipper"
        />
        <SendIcons
          src="https://cdn-icons-png.flaticon.com/128/5946/5946575.png"
          alt="sendicon"
          onClick={onSendMessage}
        />
      </MessageIconsDiv>
    </WriteMessageDiv>
  );
};

export default WriteMessage;
