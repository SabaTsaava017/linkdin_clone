import styled from "styled-components";

const UserListItem = ({ user, onClick }) => {
  return (
    <UserContainer onClick={onClick}>
      <UserInfo>
        <UserImg src={user.imageSrc} alt={`Profile of ${user.username}`} />
        <UserItem>
          <UsernameStyle>{user.username}</UsernameStyle>
          <Description>{user.description}</Description>
        </UserItem>
      </UserInfo>
    </UserContainer>
  );
};

export default UserListItem;

const UserItem = styled.div``;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  position: relative;
  :hover {
    opacity: 0.7;
    border: 1px solid #f4f4f4;
  }
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

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const UserImg = styled.img`
  width: 52px;
  border-radius: 50%;
  height: 52px;
`;

const UsernameStyle = styled.h3`
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #181818;
`;

const Description = styled.p`
  font-family: Gotham Pro;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  background: linear-gradient(
    90deg,
    #ffffff 82.32%,
    rgba(24, 24, 24, 0) 96.96%
  );
`;
