"use client"
import ChatSvg from "@/app/components/icons/HeaderIcons/ChatSvg";
import JobsSvg from "@/app/components/icons/HeaderIcons/JobsSvg";
import NetworkSvg from "@/app/components/icons/HeaderIcons/NetworkSvg";
import NoticesSvg from "@/app/components/icons/HeaderIcons/NoticesSvg";
import SearchSvg from "@/app/components/icons/HeaderIcons/SearchSvg";
import FeedSvg from "@/app/components/icons/HeaderIcons/feedsvg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "../../styles/header/header.css";
import { SigninCard } from ".";
import { Icon } from "../_atoms";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

export default function Header() {  

  const formik = useFormik({
    initialValues: {
      firstName: '',
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().max(12, 'max 12 characters required'),
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  const { values, errors, handleChange, handleSubmit, touched } = formik;

  const [BurgerMenu, setBurgerMenu] = useState<boolean>(false);

  const handleEventClicker = () => {
    setBurgerMenu(!BurgerMenu);
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className="global-header-left-side">
      <div className="global-header-nav-container">
        <nav className="global-header-nav">
          <ul className="global-header-nav-ul">
            <Link href="/">
              <Icon iconName="facebookLogo" width={40} height={40} />
            </Link>
            <li className="header-navigation-list">
              <Link href="/">
                <div className="navigation-list-image">
                  <FeedSvg />
                </div>
                <div className="navigation-list-text">
                  <p>feed</p>
                </div>
              </Link>
            </li>
            <li className="header-navigation-list">
              <Link href="/">
                <div className="navigation-list-image">
                  <NetworkSvg />
                </div>
                <div className="navigation-list-text">
                  <p>network</p>
                </div>
              </Link>
            </li>
            <li className="header-navigation-list">
              <Link href="/pages/jobs">
                <div className="navigation-list-image">
                  <JobsSvg />
                </div>
                <div className="navigation-list-text">
                  <p>jobs</p>
                </div>
              </Link>
            </li>
            <li className="header-navigation-list">
              <Link href="/pages/chat">
                <div className="navigation-list-image">
                  <ChatSvg />
                </div>
                <div className="navigation-list-text">
                  <p>chat</p>
                </div>
              </Link>
            </li>
            <li className="header-navigation-list">
              <Link href="/">
                <div className="navigation-list-image">
                  <NoticesSvg />
                </div>
                <div className="navigation-list-text">
                  <p>notices</p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="global-header-search">
          <div className="global-header-search-content">
            <div className="global-header-search-img">
              <SearchSvg />
            </div>
            <div className="global-header-search-input">
            <input
        type="text"
        name="firstName"
        placeholder="Whats on"
        value={values.firstName}
        onChange={handleChange}
        style={{
          border: touched.firstName && errors.firstName ? '1px solid red' : '4px solid #ccc',
         
        }}
       
      />
      {errors.firstName && touched.firstName ? (
        <div style={{ color: 'red' }}>{errors.firstName}</div>
      ) : null}
      <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div className="global-header-right-side">
        <SigninCard />
      </div>
      <div className="global-header-responsive">
        <div className="header-responsive-bars">
          <div className="burger-bars" onClick={handleEventClicker}>
            <span
              className={BurgerMenu ? "burger-bar active" : "burger-bar"}
            ></span>
            <span
              className={BurgerMenu ? "burger-bar active" : "burger-bar"}
            ></span>
            <span
              className={BurgerMenu ? "burger-bar active" : "burger-bar"}
            ></span>
          </div>
        </div>
      </div>
      <div
        className={
          BurgerMenu
            ? "global-header-responsive-menu active"
            : "global-header-responsive-menu"
        }
      >
        <div className="responsive-menu-content">
          <SigninCard />
          <div className="responsive-search">
            <input type="text" placeholder="Search" />
          </div>
          <div className="responsive-list">
            <ul>
              <li>
                <Link href="*" className="link-box">
                  <div className="link-box-img">
                    <FeedSvg />
                  </div>
                  <div className="link-box-text">
                    <h3>Feed</h3>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="*" className="link-box">
                  <div className="link-box-img">
                    <NetworkSvg />
                  </div>
                  <div className="link-box-text">
                    <h3>Network</h3>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="*" className="link-box">
                  <div className="link-box-img">
                    <JobsSvg />
                  </div>
                  <div className="link-box-text">
                    <h3>Jobs</h3>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="*" className="link-box">
                  <div className="link-box-img">
                    <ChatSvg />
                  </div>
                  <div className="link-box-text">
                    <h3>Chat</h3>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="*" className="link-box">
                  <div className="link-box-img">
                    <NoticesSvg />
                  </div>
                  <div className="link-box-text">
                    <h3>Notices</h3>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
      }

