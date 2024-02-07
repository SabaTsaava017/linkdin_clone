"use client";
import {
  JobsContainer,
  LeftContentDiv,
  OffersContainer,
  TittlesDiv,
  JobsInfoDiv,
  CompanyLogo,
  CompanyName,
  JobTittle,
  JobDescription,
  LocationInfo,
  MoreButton,
  JobInfoLeftSide,
  RightContentDiv,
  PostButton,
  PostButtonDiv,
  MySearchesDiv,
  EditDiv,
  SearchHistoryDiv,
  SearchHistoryTittle,
  EditListButton,
  SearchedJobs,
  SearchedJobTittle,
  SearchedJobLocation,
  TrackedJobsDiv,
  TrackedJobsTittle,
  TrackedJobsHeading,
  TrackedJobsCompany,
  ArticlesDiv,
  ArticlesDivTittle,
  ArticlesInfo,
  ArticlesHeading,
  ViewersInfo,
  TitleFormat,
  TitleHr,
} from "@/app/styles/jobs-styled/styled";
import JobsData from "../_molecules/Jobs/JobsData.json";
import SearchData from "../_molecules/Jobs/SearchData.json";
import SearchContent from "../_molecules/Jobs/SearchComponent";
import JobsOffersItem from "../_molecules/Jobs/JobsOffersItem";
import { MainLayout } from ".";

const JobsLayout = () => {
  return (
    <MainLayout>
      <JobsContainer>
        <LeftContentDiv>
          <SearchContent />
          <TittlesDiv>
            <TitleFormat>
              <TitleHr></TitleHr>
              <h3>JOBS FOR YOU</h3>
              <TitleHr></TitleHr>
            </TitleFormat>
          </TittlesDiv>
          <OffersContainer>
            {JobsData.map((item: any) => (
              <JobsOffersItem
                imgUrl={item.logoSrc}
                title={item.tittle}
                company={item.company}
                location={item.location}
                description={item.description}
              />
            ))}
            <TittlesDiv>
              <TitleFormat>
                <TitleHr></TitleHr>
                <h3>NEW JOBS</h3>
                <TitleHr></TitleHr>
              </TitleFormat>
            </TittlesDiv>
            {JobsData.slice(4, 6).map((item: any) => (
              <JobsInfoDiv key={item.id}>
                <JobInfoLeftSide>
                  <CompanyLogo src={item.logoSrc} alt="Company logo" />
                  <div>
                    <JobTittle>{item.tittle}</JobTittle>
                    <CompanyName>
                      {item.company}
                      <LocationInfo>{item.location}</LocationInfo>
                    </CompanyName>
                    <JobDescription>{item.description}</JobDescription>
                  </div>
                </JobInfoLeftSide>
                <MoreButton>MORE</MoreButton>
              </JobsInfoDiv>
            ))}
          </OffersContainer>
        </LeftContentDiv>
        <RightContentDiv>
          <PostButtonDiv>
            <PostButton>POST A JOB</PostButton>
          </PostButtonDiv>
          <MySearchesDiv>
            <EditDiv>
              <SearchHistoryTittle>MY SEARCHES</SearchHistoryTittle>
              <EditListButton>EDIT LIST</EditListButton>
            </EditDiv>
            <SearchHistoryDiv>
              {SearchData.map((item: any) => (
                <SearchedJobs key={item.id}>
                  <div>
                    <SearchedJobTittle>{item.tittle}</SearchedJobTittle>
                    <SearchedJobLocation>{item.location}</SearchedJobLocation>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5.33334C12 4.27248 11.5786 3.25506 10.8284 2.50492C10.0783 1.75477 9.06087 1.33334 8 1.33334C6.93913 1.33334 5.92172 1.75477 5.17157 2.50492C4.42143 3.25506 4 4.27248 4 5.33334C4 10 2 11.3333 2 11.3333H14C14 11.3333 12 10 12 5.33334Z"
                      stroke="#0275B1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.15335 14C9.03614 14.2021 8.86791 14.3698 8.6655 14.4864C8.46309 14.6029 8.2336 14.6643 8.00001 14.6643C7.76643 14.6643 7.53694 14.6029 7.33453 14.4864C7.13212 14.3698 6.96389 14.2021 6.84668 14"
                      stroke="#0275B1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </SearchedJobs>
              ))}
            </SearchHistoryDiv>
          </MySearchesDiv>
          <TrackedJobsDiv>
            <TrackedJobsHeading>TRACKED JOBS</TrackedJobsHeading>
            {JobsData.slice(0, 2).map((item: any) => (
              <TrackedJobsTittle key={item.id}>
                {item.tittle}
                <TrackedJobsCompany>{item.company}</TrackedJobsCompany>
              </TrackedJobsTittle>
            ))}
          </TrackedJobsDiv>
          <ArticlesDiv>
            <ArticlesDivTittle>ARTICLES FOR YOU</ArticlesDivTittle>
            <ArticlesInfo>
              <ArticlesHeading>
                The guide. <br /> Apply for a job
              </ArticlesHeading>
              <ViewersInfo>12,932 viewers</ViewersInfo>
              <ArticlesHeading>
                Your dream job and how you can...
              </ArticlesHeading>
              <ViewersInfo>9,112 viewers</ViewersInfo>
              <ArticlesHeading>
                Now you know it. 15 steps to find job
              </ArticlesHeading>
              <ViewersInfo>7,221 viewers</ViewersInfo>
            </ArticlesInfo>
          </ArticlesDiv>
        </RightContentDiv>
      </JobsContainer>
    </MainLayout>
  );
};

export default JobsLayout;
