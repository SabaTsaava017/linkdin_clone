import {
    Answer,
  Comment,
  HR2,
  HR3,
  IosDeveloper,
  Like,
  LikeAndComment,
  LikeCommIcon,
  LikeIconAndCount,
  LikedThis,
  PictureName,
  ProfileDiv,
  ProfileInfo,
  ReadMore,
  ShareIcon,
  TheresaSteward,
} from "@/app/styles/Feed/Feed";
import React from "react";

interface PropsPostCard {
  title: string;
  userName: string;
  position: string;
  children: React.ReactNode;
  readMore?: string;
  share: string;
  like: string;
  comments: string;
  profilePic: any;
  answer?: string;
}
const PostCard = ({
  title,
  userName,
  position,
  children,
  readMore,
  share,
  like,
  comments,
  profilePic,
  answer
}: PropsPostCard) => {
  return (
    <div>
      <ProfileDiv>
        <LikedThis>{title}</LikedThis>
        <HR2></HR2>
        <div>
          <PictureName>
            <div>
                {profilePic}
            </div>
            <div>
              <TheresaSteward>{userName}</TheresaSteward>
              <IosDeveloper>{position}</IosDeveloper>
            </div>
          </PictureName>
          <Answer>{answer}</Answer>
          <ProfileInfo>{children}</ProfileInfo>
          <ReadMore>{readMore}</ReadMore>
          <HR3></HR3>
          <LikeAndComment>
            <LikeIconAndCount>
              <Like>{like}</Like>
              <LikeCommIcon
                src="https://cdn-icons-png.flaticon.com/128/10542/10542980.png"
                alt=""
              />
            </LikeIconAndCount>
            <LikeIconAndCount>
              <Comment>{comments}</Comment>
              <LikeCommIcon
                src="https://cdn-icons-png.flaticon.com/128/12539/12539579.png"
                alt=""
              />
            </LikeIconAndCount>
            <LikeIconAndCount>
              <ShareIcon
                src="https://cdn-icons-png.flaticon.com/128/2696/2696314.png"
                alt=""
              />
              <p>{share}</p>
            </LikeIconAndCount>
          </LikeAndComment>
        </div>
      </ProfileDiv>
    </div>
  );
};

export default PostCard;
