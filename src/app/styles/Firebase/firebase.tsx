import styled from "styled-components";

export const ButtonAuth = styled.button`
  color: white;
  background-color: #4c8bf5;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 7px;
  font-weight: bolder;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    font-size: 13px;
  }
`;

export const DivAuth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 10vh;
  transform: translate(50%, 100%);
  gap: 50px;
`;

export const DivSignIn = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
