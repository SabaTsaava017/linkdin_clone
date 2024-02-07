"use client"
import React from "react";
import FeedLayout from "./FeedLayout";
import { MainLayout } from ".";

const HomeLayout = () => {
  return (
    <MainLayout>
      <FeedLayout />
    </MainLayout>
  );
};

export default HomeLayout;

