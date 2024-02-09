import {
  CompanyLogo,
  CompanyName,
  JobDescription,
  JobInfoLeftSide,
  JobTittle,
  JobsInfoDiv,
  LocationInfo,
  MoreButton,
} from "@/app/styles/jobs-styled/styled";

const JobsOffersItem = ({ imgUrl, title, company, location, description }: any) => {
  return (
    <JobsInfoDiv>
      <JobInfoLeftSide>
        <CompanyLogo src={imgUrl} alt="Company logo" />
        <div>
          <JobTittle>{title}</JobTittle>
          <CompanyName>
            {company} <LocationInfo>{location}</LocationInfo>
          </CompanyName>
          <JobDescription>{description}</JobDescription>
        </div>
      </JobInfoLeftSide>
      <MoreButton>MORE</MoreButton>
    </JobsInfoDiv>
  );
};

export default JobsOffersItem;
