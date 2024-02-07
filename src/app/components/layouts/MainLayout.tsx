"use client"
import React from "react";
import { FooterComponent, HeaderComponent } from "../_molecules";
interface PropsLayout {
  children: React.ReactNode;
}
const MainLayout = ({ children }: PropsLayout) => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <HeaderComponent />
      <div style={{ width: "100%", height: "100vh" }}>{children}</div>
      <FooterComponent />
    </div>
  );
};

export default MainLayout;
