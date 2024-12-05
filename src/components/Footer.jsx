import React from "react";
import "./Footer.css";
import logo2 from "../assets/LOGO2.png";
import logo3 from "../assets/app-store-badges-en 1.png";
import instagram from "../assets/Instagram.png";
import facebook from "../assets/Facebook.png";
import tiktok from "../assets/TikTok.png";
import snapchat from "../assets/Snapchat.png";

const Footer = () => {
  return (
    <>
      <div className="footer1">
        <div className="footerT">
          <div className="footerLeft">
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <p>
              Company # 490039-445, Registered with <br /> House of companies.
            </p>
          </div>
          <div className="footerRight">
            <div className="slot1">
              <p className="deals">Get Exclusive Deals in your Inbox</p>
              <div className="inp_btn">
                <input type="text" placeholder="youremail@gmail.com" />
                <button>Subscribe</button>
              </div>
              <p className="policy">we wont spam, read our email policy</p>
              <div className="socialMedia">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={tiktok} alt="" />
                <img src={snapchat} alt="" />
              </div>
            </div>
            <div className="slot2">
              <li className="LP">Legal Pages</li>
              <li>
                <u>Terms and conditions</u>
              </li>
              <li>
                <u>Privacy</u>
              </li>
              <li>
                <u>Cookies</u>
              </li>
              <li>
                <u>Modern Slavery Statement</u>
              </li>
            </div>
            <div className="slot3">
              <li className="IL">Important Links</li>
              <li>
                <u>Add your restaurant</u>
              </li>
              <li>
                <u>Sign up to deliver</u>
              </li>
              <li>
                <u>Cookies</u>
              </li>
              <li>
                <u>Create a business account</u>
              </li>
            </div>
          </div>
        </div>
        <div className="footerB">
          <div className="slotLeft">
            Order.uk Copyright 2024, All Rights Reserved.
          </div>
          <div className="slotRight">
            <div>Privacy Policy</div>
            <div>Terms</div>
            <div>Pricing</div>
            <div> Do not sell or share my personal information</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
