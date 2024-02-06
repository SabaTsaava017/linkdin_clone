import {
  DownloadIcon,
  FileDiv,
  FileDivInfo,
  FileDivInfo2,
  InfoDiv,
} from "@/app/styles/Feed/Feed";
import React from "react";

interface PropsType {
  iconLogo: any;
  title: string;
  content: string;
}
const FeedsItem = ({ iconLogo, title, content }: PropsType) => {
  return (
    <FileDiv>
      {iconLogo}
      <InfoDiv>
        <FileDivInfo>{title}</FileDivInfo>
        <FileDivInfo2>{content}</FileDivInfo2>
      </InfoDiv>
      <DownloadIcon
        src="https://cdn-icons-png.flaticon.com/128/4208/4208397.png"
        alt=""
      />
    </FileDiv>
  );
};

export default FeedsItem;
