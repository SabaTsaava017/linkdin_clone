import Link from "next/link";
import Image from "next/image";
import "../../styles/header/header.css";
import { ProfileImg } from "@/app/styles/Feed/Feed";

export default function SignIn() {
  const test = false;
  interface Data {
    src: string;
    firstName: string;
    viewers: string;
  }
  const fakeData: Data = {
    src: "",
    firstName: "d.kargaev",
    viewers: "352",
  };

  return (
    <>
      {test ? (
        <div className="global-header-sign-in">
          <div className="global-header-sign-in-content">
            <Link href="*">
              <div className="join-now">
                <p>Join now</p>
              </div>
            </Link>
            <Link href="*">
              <div className="sign-in">
                <p>Sign in</p>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="signed-up">
          <div className="profile">
            <div className="profile-picture">
              <ProfileImg
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="profileicon"
              />
            </div>
            <div className="profile-info">
              <div className="profile-name">
                <p>{fakeData.firstName}</p>
                <span>you</span>
              </div>
              <div className="profile-viewers">
                <p>{fakeData.viewers} views today</p>
              </div>
            </div>
          </div>
          <div className="other">
            <div className="other-content">
              <div className="other-content-circles">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                    stroke="#181818"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                    stroke="#181818"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                    stroke="#181818"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="other-content-text">
                <h3>other</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
