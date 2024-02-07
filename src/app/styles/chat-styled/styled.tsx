import { styled } from "styled-components";

export const ChatText = styled.div`
  display: flex;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    margin-left: -20px;
    width: calc(100% + 40px);
    height: 1px;
    background: #f4f4f4;
  }
`;

export const NewChatButton = styled.button`
  width: 230px;
  height: 32px;
  border-radius: 4px;
  background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
  border: none;
  color: white;
  cursor: pointer;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 0 auto;
  justify-content: space-around;
  padding: 20px 150px 50px 150px;
  background-color: #e0e0e0b8;
`;

export const UsersDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  padding: 20px;
  height: 560px;
  background: #fcfdfd;
  border-radius: 5px;
  cursor: pointer;
`;

export const ChatDiv = styled.div`
  width: 850px;
  height: 655px;
  display: flex;
  background-color: #fcfdfd;
  border-width: 0px, 0px, 0px, 0px;
  border-style: solid;
  border-radius: 5px;
  position: relative;
  border-color: #f4f4f4;
  overflow-y: auto;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fcfdfd;
  align-items: center;
  width: 290px;
  height: 75px;
  border-radius: 5px;
  padding: 21.5px 30px 21.5px 30px;
`;
export const Cliper = styled.img`
  width: 24px;
  height: 24px;
`;
export const MessageInput = styled.input`
  border: none;
  width: 90%;
  font-size: 18px;
  &&:focus {
    outline: none;
  }
`;

export const SendIcons = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const MessageIconsDiv = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const WriteMessageDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0px;
  ::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #f4f4f4;
  }
`;
export const ChatTopContentText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-left: 20px;
`;
export const ChatWith = styled.p`
  font-family: Gotham Pro;
  line-height: 11px;
  display: flex;
  gap: 2px;
  letter-spacing: 1px;
  flex-direction: row;
  letter-spacing: 0em;
  text-align: left;
  color: #181818;
`;
export const Username = styled.p`
  font-family: Gotham Pro;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;
  color: #0275b1;
`;
export const LastActivite = styled.p`
  font-family: Gotham Pro;
  font-size: 12px;
  line-height: 11px;
  letter-spacing: 0em;
  display: flex;
  gap: 3px;
  flex-direction: row;
  text-align: center;
  opacity: 0.6;
`;
export const Hours = styled.p`
  font-family: Gotham Pro;
  font-size: 12px;
  line-height: 11px;
  letter-spacing: 0em;
  text-align: center;
`;
export const ChatTopContends = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 32px 40px 20px 20px;
  ::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #f4f4f4;
  }
`;
export const UserIcon = styled.img`
  width: 46px;
  height: 46px;
  margin-right: 8px;
  position: absolute;
  right: -5px;
  border-radius: 50%;
`;

export const ChatContentDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  height: 78%;
  gap: 10px;
  padding: 20px 56px 0px 20px;
  width: 100%;
`;

export const Message = styled.div`
  background: ${({ owner }: any) => (owner ? "#E9F0F8" : "#0275B1")};
  color: ${({ owner }: any) => (owner ? "#181818" : "white")};
  text-align: ${({ owner }: any) => (owner ? "start" : "end")};
  padding: 10px;
  display: flex;
  justify-content: center;
  font-family: Gotham Pro;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  align-items: center;
  border-radius: 5px;
  align-self: ${({ owner }: any) => (owner ? "flex-end" : "flex-start")};
  width: auto;
  height: auto;
`;

export const OwnerMessage = styled.div`
  background: ${({ owner }: any) => (!owner ? "#E9F0F8" : "#0275B1")};
  color: ${({ owner }: any) => (!owner ? "#181818" : "white")};
  padding: 10px;
  display: flex;
  justify-content: start;
  font-size: 14px;
  line-height: 21px;
  border-radius: 5px;
  align-self: ${({ owner }: any) => (owner ? "flex-end" : "flex-start")};
  width: auto;
  height: auto;
`;
