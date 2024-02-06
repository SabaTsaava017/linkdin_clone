import Link from "next/link";
import React from "react";
import "../../styles/fontStyles/font.css";
import FooterLogoSvg from "../icons/FooterIcons/FooterLogoSvg";
import QuestionMarkSvg from "../icons/FooterIcons/QuestionMarkSvg";
import SettingsSvg from "../icons/FooterIcons/SettingsSvg";
import "../../styles/footer/footer.css";

export default function FooterLayout() {
  return (
    <>
      <footer className="global-footer">
        <div className="global-footer-middle-content">
          <div className="global-footer-content">
            <div className="global-footer-logo">
              <Link href="*">
                <div className="global-footer-logo-img">
                  <FooterLogoSvg />
                </div>
                <div className="global-footer-logo-text">
                  <p>
                    Linked<span>in</span>
                  </p>
                </div>
              </Link>
            </div>
            <div className="global-footer-navigation-container">
              <div className="global-footer-navigation-title">
                <h3>Navigation</h3>
              </div>
              <div className="global-footer-navigation">
                <div className="footer-navigation-lists">
                  <ul>
                    <li>
                      <Link href="*">About</Link>
                    </li>
                    <li>
                      <Link href="*">Careers</Link>
                    </li>
                    <li>
                      <Link href="*">Advertising</Link>
                    </li>
                    <li>
                      <Link href="*">Small Business</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-navigation-lists">
                  <ul>
                    <li>
                      <Link href="*">Talent Solutions</Link>
                    </li>
                    <li>
                      <Link href="*">Marketing Solutions</Link>
                    </li>
                    <li>
                      <Link href="*">Sales Solutions</Link>
                    </li>
                    <li>
                      <Link href="*">Safery Center</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-navigation-lists">
                  <ul>
                    <li>
                      <Link href="*">Community Guidelines</Link>
                    </li>
                    <li>
                      <Link href="*">Privacy & Terms</Link>
                    </li>
                    <li>
                      <Link href="*">Mobile App</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="global-footer-q&a">
              <div className="global-footer-navigation-title">
                <h3>Fast access</h3>
              </div>
              <div className="global-footer-user-help">
                <div className="user-help-field">
                  <div className="help-field-text">
                    <p>Questions?</p>
                  </div>
                  <div className="help-field-image">
                    <QuestionMarkSvg />
                  </div>
                </div>
                <div className="user-help-field">
                  <div className="help-field-text">
                    <p>Settings</p>
                  </div>
                  <div className="help-field-image">
                    <SettingsSvg />
                  </div>
                </div>
              </div>
            </div>
            <div className="global-footer-language-change">
              <div className="global-footer-navigation-title">
                <h3>Language</h3>
              </div>
              <div className="global-footer-language-option">
                <select name="language" id="language">
                  <option value="English">English</option>
                  <option value="Georgian">Georgian</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
