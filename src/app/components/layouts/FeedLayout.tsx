"use client";
import React from "react";
import {
  Container,
  H2,
  Trending,
  Section2,
  ProfileInfo,
  ProfileDiv,
  ReadMore,
  LikedThis,
  HR2,
  TheresaSteward,
  IosDeveloper,
  HR3,
  LikeAndComment,
  Like,
  Comment,
  Share,
  ProfileImg,
  PictureName,
  LikeCommIcon,
  LikeIconAndCount,
  ShareIcon,
  FileIcon,
  GuidelinesForiOS,
  ProfileDiv3,
  BacgroundImige,
  ProfileImiges,
  ProfileName2,
  ProfileInfo2,
  ButtonDiv,
  Button,
  GroupDiv,
  GroupAndList,
  Mygroup,
  EditList,
  HR4,
  UniIcon,
  UniIconAndName,
  UniName,
  SHAWALL,
  FollowedHashtagsDiv,
  FollowedHashtags,
  HR6,
  Skils,
  TrendingDiv,
  TrendingArticles,
  HR7,
  TrendingImg,
  ImgAndInfo,
  HowIMakeCoolDesigns,
  Viewers,
  HR8,
  Share2,
  ShareIcon2,
  TwoParagrap,
} from "@/app/styles/Feed/Feed";
import { MainLayout } from ".";
import { AddPostComponent, FeedsItem, PostCard } from "../_molecules";
import Link from "next/link";

const postData = [
  {
    title: "Ted BellTed Bell, Annette Nguyen and Cody Hawkins liked this",
    userName: "Theresa Steward",
    position: "iOS developer",
    readMore: "READ MORE",
    share: "SHARE",
    like: "42",
    comments: "10",
    content:
      " Quidditch team because he hadn’t practiced  Muggles (not a drop of magical blood in their veins). his homework done? The<br></br> Dursleys were what wizards called all<br></br> summer? What  was it to the Dursleys if Harry went back to school without any of",
  },
  {
    title: "Ted BellTed Bell, Annette Nguyen and Cody Hawkins liked this",
    userName: "Theresa Steward",
    position: "iOS developer",
    share: "SHARE",
    like: "42",
    comments: "10",
    content:
      "What did the Dursleys care if Harry lost his place on the House  his homework done? The Dursleys were what wizards called Quidditch team because he hadn’t practiced  was it to the Dursleys if Harry went back to school without any ofal summer? What",
  },
];
interface Props {
  handleSignOut?: () => void;
}
const FeedLayout = ({ handleSignOut }: Props) => {
  return (
    <MainLayout>
      <Container>
        <div>
          <button onClick={handleSignOut}>logout</button>
          <AddPostComponent />
          <H2>
            SORT BY: <Trending> TRENDING</Trending>
          </H2>
          {postData.map((item) => {
            return (
              <>
                <PostCard
                  profilePic={
                    <ProfileImg
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="profileicon"
                    />
                  }
                  title={item.title}
                  userName={item.userName}
                  position={item.position}
                  readMore={item.readMore}
                  share={item.share}
                  like={item.like}
                  comments={item.comments}
                >
                  {item.content}
                </PostCard>
              </>
            );
          })}
          <ProfileDiv3>
            <LikedThis>High rated post from your feed</LikedThis>
            <HR2></HR2>
            <PictureName>
              <div>
                <ProfileImg
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="profileicon"
                />
              </div>
              <div>
                <TheresaSteward>Brandon Wilson</TheresaSteward>
                <IosDeveloper>Senior UX designer</IosDeveloper>
                <GuidelinesForiOS>
                  There is some new guidelines for iOS
                </GuidelinesForiOS>

                <FeedsItem
                  iconLogo={
                    <FileIcon
                      src="https://cdn-icons-png.flaticon.com/128/2965/2965335.png"
                      alt=""
                    />
                  }
                  title="iOS 11 guidelines for UX/UI designers"
                  content="PDF file, 324 kb"
                />
                <FeedsItem
                  iconLogo={
                    <FileIcon
                      src="https://cdn-icons-png.flaticon.com/128/2965/2965335.png"
                      alt=""
                    />
                  }
                  title="iOS 11 guidelines for UX/UI designers"
                  content="PDF file, 245 kb"
                />
                <HR8></HR8>
                <LikeAndComment>
                  <LikeIconAndCount>
                    <Like>42</Like>
                    <LikeCommIcon
                      src="https://cdn-icons-png.flaticon.com/128/10542/10542980.png"
                      alt=""
                    />
                  </LikeIconAndCount>
                  <LikeIconAndCount>
                    <Comment>9</Comment>
                    <LikeCommIcon
                      src="https://cdn-icons-png.flaticon.com/128/12539/12539579.png"
                      alt=""
                    />
                  </LikeIconAndCount>
                  <LikeIconAndCount>
                    <ShareIcon2
                      src="https://cdn-icons-png.flaticon.com/128/2696/2696314.png"
                      alt=""
                    />
                    <Share2>SHARE</Share2>
                  </LikeIconAndCount>
                </LikeAndComment>
              </div>
            </PictureName>
          </ProfileDiv3>
          <ProfileDiv>
            <LikedThis>First post from Audrey Alexander</LikedThis>
            <HR2></HR2>

            <div>
              <PictureName>
                <div>
                  <ProfileImg
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="profileicon"
                  />
                </div>
                <div>
                  <TheresaSteward>Audrey Alexander</TheresaSteward>
                  <IosDeveloper>Team lead at Google</IosDeveloper>
                </div>
              </PictureName>

              <ProfileInfo>
                The bun runs along the road and meets a wolf. «Little bun,
                little bun, I want to eat you!» says the wolf. «I ran away from
                Grandfather, I ran away from Grandmother, I ran away from the
                hare. And I can run away from you, grey wolf!» says the bun and
                runs away.
              </ProfileInfo>
              <ReadMore>READ MORE</ReadMore>
              <HR3></HR3>
              <LikeAndComment>
                <LikeIconAndCount>
                  <Like>42</Like>
                  <LikeCommIcon
                    src="https://cdn-icons-png.flaticon.com/128/10542/10542980.png"
                    alt=""
                  />
                </LikeIconAndCount>
                <LikeIconAndCount>
                  <Comment>9</Comment>
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
                  <Share>SHARE</Share>
                </LikeIconAndCount>
              </LikeAndComment>
            </div>
          </ProfileDiv>
        </div>
        <Section2>
          <div>
            <div>
              <BacgroundImige>
                <img
                  style={{ width: "100%", height: 125 }}
                  src="https://wallpapercave.com/wp/wp6602988.jpg"
                  alt=""
                />
                <ProfileImiges
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="profileicon2"
                />
              </BacgroundImige>
            </div>
            <div>
              <Link href="/pages/profile">
                <ProfileName2>Dmitry Kargaev</ProfileName2>
              </Link>
              <ProfileInfo2>
                Freelance UX/UI designer, 80+ projects in web design, mobile
                apps (iOS & android) and creative projects. Open to offers.
              </ProfileInfo2>
            </div>
          </div>
          <ButtonDiv>
            <Button>write new article</Button>
          </ButtonDiv>
          <GroupDiv>
            <GroupAndList>
              <Mygroup>MY GROUPS</Mygroup>
              <EditList>EDIT LIST</EditList>
            </GroupAndList>
            <HR4></HR4>
            <UniIconAndName>
              <UniIcon
                src="https://www.edarabia.com/wp-content/uploads/2018/02/moscow-state-linguistic-university-moscow-russia.png"
                alt=""
              />
              <UniName>Moscow State Linguistical University</UniName>
            </UniIconAndName>
            <UniIconAndName>
              <UniIcon
                src="https://www.edarabia.com/wp-content/uploads/2018/02/moscow-state-linguistic-university-moscow-russia.png "
                alt=""
              />
              <UniName>Digital freelancers group</UniName>
            </UniIconAndName>
            <UniIconAndName>
              <UniIcon
                src="https://www.edarabia.com/wp-content/uploads/2018/02/moscow-state-linguistic-university-moscow-russia.png"
                alt=""
              />
              <UniName>Interaction design association</UniName>
            </UniIconAndName>
            <SHAWALL>SHAW ALL(8)</SHAWALL>
          </GroupDiv>
          <FollowedHashtagsDiv>
            <FollowedHashtags>FOLLOED HASHTAGS</FollowedHashtags>
            <HR6></HR6>
            <Skils>#work</Skils>
            <Skils>#business</Skils>
            <Skils>#hr</Skils>
            <Skils>#userinterface</Skils>
            <Skils>#digital</Skils>
            <Skils>#ux</Skils>
            <Skils>#ui</Skils>
            <Skils>#freelance</Skils>
            <div></div>
          </FollowedHashtagsDiv>
          <TrendingDiv>
            <div>
              <TrendingArticles>Trending articles</TrendingArticles>
              <HR7></HR7>
            </div>
            <div>
              <ImgAndInfo>
                <TrendingImg
                  src="https://img.freepik.com/free-photo/creative-light-bulb-abstract-glowing-blue-background-generative-ai_188544-8090.jpg"
                  alt=""
                />
                <TwoParagrap>
                  <HowIMakeCoolDesigns>
                    How I make cool designs?
                  </HowIMakeCoolDesigns>
                  <Viewers>6,340 viewers</Viewers>
                </TwoParagrap>
              </ImgAndInfo>
            </div>
            <div>
              <ImgAndInfo>
                <TrendingImg
                  src="https://img.freepik.com/free-photo/creative-light-bulb-abstract-glowing-blue-background-generative-ai_188544-8090.jpg"
                  alt=""
                />
                <TwoParagrap>
                  <HowIMakeCoolDesigns>
                    Advices for young HR-manage
                  </HowIMakeCoolDesigns>
                  <Viewers>8,123 viewers</Viewers>
                </TwoParagrap>
              </ImgAndInfo>
            </div>
            <div>
              <ImgAndInfo>
                <TrendingImg
                  src="https://img.freepik.com/free-photo/creative-light-bulb-abstract-glowing-blue-background-generative-ai_188544-8090.jpg"
                  alt=""
                />
                <TwoParagrap>
                  <HowIMakeCoolDesigns>
                    A little about usability testing
                  </HowIMakeCoolDesigns>
                  <Viewers>3,912 viewers</Viewers>
                </TwoParagrap>
              </ImgAndInfo>
            </div>
          </TrendingDiv>
        </Section2>
      </Container>
    </MainLayout>
  );
};

export default FeedLayout;
