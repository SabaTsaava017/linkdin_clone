"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Button from "../_molecules/ForgetPassButton";
import Input from "../_molecules/ForgetPassInput";
import {
  ForgetPassContainer,
  HeaderForgetPassWrap,
  LinkdnLogoWraap,
  ButtonWrap,
  ForgotPassWrap,
  ForgotPassModal,
  ModalTitle,
  ForgetPassInputDiv,
  ModalSpan,
  ModalButtons,
  Footer,
  FooterUl,
  FooterLi,
} from "@/app/styles/ForgetPass-styled/ForgetPass-styled";

const ForgetPassLayout = () => {
  return (
    <ForgetPassContainer>
      <HeaderForgetPassWrap>
        <LinkdnLogoWraap>
          <StyledImage
            src={require("../icons/LI-Logo.png")}
            alt="LinkdlnIcon"
          />
        </LinkdnLogoWraap>
        <ButtonWrap>
          <Button
            width="120px"
            height="30px"
            backgroundColor="blue"
            value="SignIn"
            borderRadius="20px"
            border="none"
            color="white"
          />
          <Button
            width="120px"
            height="30px"
            backgroundColor="white"
            value="Join Now"
            borderRadius="20px"
            border="none"
            color="grey"
          />
        </ButtonWrap>
      </HeaderForgetPassWrap>

      <ForgotPassWrap>
        <ForgotPassModal>
          <ModalTitle>Forgot Password</ModalTitle>
          <ForgetPassInputDiv>
            <Input width="300px" height="50px" />
          </ForgetPassInputDiv>

          <ModalSpan>
            We'll send a verification code to this email or phone number if it
            matches an existing linkedln account.
          </ModalSpan>
          <ModalButtons>
            <Button
              width="300px"
              height="50px"
              backgroundColor="blue"
              borderRadius="20px"
              value="Next"
              border="1px solid blue"
              color="white"
            />
            <Button
              width="300px"
              height="50px"
              backgroundColor="white"
              borderRadius="20px"
              value="Back"
              border="none"
              color="grey"
            />
          </ModalButtons>
        </ForgotPassModal>
      </ForgotPassWrap>
      <Footer>
        <FooterUl>
          <FooterLi>User Agreement </FooterLi>
          <FooterLi>Privacy Policy </FooterLi>
          <FooterLi>Community Guidelines</FooterLi>
          <FooterLi>Cookie Policy</FooterLi>
          <FooterLi>Send Feedback</FooterLi>
          <FooterLi>Language</FooterLi>
        </FooterUl>
      </Footer>
    </ForgetPassContainer>
  );
};

export default ForgetPassLayout;

const StyledImage = styled(Image)`
  width: 100px;
  height: 25px;
`;
