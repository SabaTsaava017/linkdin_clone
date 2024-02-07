import { styled } from "styled-components";

export const JobsContainer = styled.div`
    display: flex;
    align-items: first baseline;
    background-color: #F4F4F4;
    padding: 15px;
    margin: 0 auto;
    justify-content: center;

    @media (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`
export const LeftContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 100%;

    @media (max-width: 892px) {
        display: flex;
        justify-content: center;
        margin-bottom: 65px;
    }
`
export const SearchInput = styled.input`
    font-size: 18px;
    border: 0;
    color: black;
    width: 100%;

    @media ( max-width: 550px) {
        font-size: 15px;
    }
`
export const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 135px;
    border-radius: 4px;
    background-color: white;
    padding: 25px;

    @media (max-width: 892px) {
        width: 100%;
    }
`
export const SearchHeader = styled.h3`
    font-size: 12px;
`
export const SearchBlock = styled.div`
    display: flex;
    align-items: center;
    `
export const SearchButton = styled.button`
    background: linear-gradient(180deg, #0077B5 0%, #0E6795 100%);
    border: 0;
    border-radius: 4px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
export const FilterIcon = styled.div`
    padding-right: 35px;
    cursor: pointer;
`
export const InputDiv = styled.div`
    display: flex;
    justify-content: space-between;
`
export const OffersContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F4F4F4;
`
export const TittlesDiv = styled.div`
    font-size: 12px;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 50px;

    @media ( max-width: 892px ) {
        width: 100%;
        text-align: center;
    }
`
export const TitleFormat = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 12px;

    @media ( max-width: 550px) {
        font-size: 10px;
    }
`
export const TitleHr = styled.div`
    height: 1px;
    background-color: #E7E7E7;
    width: 350px;

    @media ( max-width: 1100px ) {
        display: none;
    }
`
export const JobsInfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 850px;
    height: 115px;
    border-radius: 4px;
    background-color: white;
    max-height: 200px;
    padding: 15px;
    margin-top: 10px;
    width: 100%;

    @media ( max-width: 1100px ) {
        width: 100%;
    }
    @media ( max-width: 892px ) {
        width: 100%;
        display: flex;
    }
    @media ( max-width: 550px ) {
        display: flex;
        padding: 10px;
        justify-content: space-between;
        gap: 7px;
    }
`
export const CompanyLogo = styled.img`
    width: 100px;
    height: 75px;
    object-fit: contain;
`
export const JobTittle = styled.h3`
    font-size: 14px;
    padding-bottom: 5px;
`
export const CompanyName = styled.p`
    font-size: 10px;
    padding-bottom: 5px;
`
export const JobDescription = styled.p`
    font-size: 10px;
    line-height: 15px;
    max-width: 390px;
    color: black;

    @media ( max-width: 550px ) {
        font-size: 8px;
    }
`
export const LocationInfo = styled.span`
    color: #404040;
`
export const MoreButton = styled.button`
    background: linear-gradient(180deg, #0077B5 0%, #0E6795 100%);
    color: white;
    width: 91px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    border: none;

    @media (max-width: 670px) {
        width: 75px;
        font-size: px;
    }
    @media (max-width: 530px) {
        width: 75px;
        font-size: 10px;
    }

`
export const JobInfoLeftSide = styled.div`
    display: flex;
`
export const RightContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */

    @media (max-width: 1100px) {
        display: flex;
        flex-direction: row;
        align-items: top;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 10px;
        width: 100%;
    }
`
export const PostButtonDiv = styled.div`
    background-color: white;
    padding: 15px;
    color: white;
    border-radius: 4px;
    width: 260px;

    @media (max-width: 1100px) {
        display: none;
       
    }

`
export const PostButton = styled.button`
    background: linear-gradient(180deg, #0077B5 0%, #0E6795 100%);
    color: white;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    width: 230px;
    height: 32px;
`
export const MySearchesDiv = styled.div`
    margin-top: 15px;
    padding: 15px;
    border-radius: 4px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 260px;
`
export const EditDiv = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 40px;
`
export const SearchHistoryDiv = styled.div`
    
`
export const SearchHistoryTittle = styled.p`
    font-size: 12px;
`
export const EditListButton = styled.button`
    border: none;
    background-color: white;
    color: #0275B1;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
`
export const SearchedJobs = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 230px;
    height: 54px;
    top: 291px;
    left: 1050px;
    border-radius: 4px;
    background-color: #E9F0F8;
    padding: 15px;
    margin-bottom: 12px;
`
export const SearchedJobTittle = styled.p`
    font-size: 12px;
`
export const SearchedJobLocation = styled.p`
    font-size: 10px;
`
export const TrackedJobsDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    padding: 15px;
    background-color: white;
`
export const TrackedJobsHeading = styled.h5`
        font-size: 12px;
        padding-bottom: 25px;
`
export const TrackedJobsTittle = styled.span`
    font-size: 12px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    border: 1px solid #F4F4F4;
    margin-bottom: 10px;
    padding: 10px;
`
export const TrackedJobsCompany = styled.span`
    font-size: 10px;
    font-weight: 400;
    line-height: 20px;
`
export const ArticlesDiv = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    flex-direction: column;
    background-color: white;
    border-radius: 4px;
`
export const ArticlesDivTittle = styled.div`
    font-size: 12px;
    font-weight: 600;
    padding-bottom: 25px;
`
export const ArticlesInfo = styled.div`
    display: flex;
    flex-direction: column;
`
export const ArticlesHeading = styled.h6`
    width: 120px;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
`
export const ViewersInfo = styled.span`
    font-size: 10px;
    margin-bottom: 15px;
`
    
