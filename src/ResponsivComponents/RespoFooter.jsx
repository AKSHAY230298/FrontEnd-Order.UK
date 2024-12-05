import React from "react";
import "../ResponsivComponents/RespoFooter.css";
import logo2 from "../assets/LOGO2.png";
import logo3 from "../assets/app-store-badges-en 1.png";
import instagram from "../assets/Instagram.png";
import facebook from "../assets/Facebook.png";
import tiktok from "../assets/TikTok.png";
import snapchat from "../assets/Snapchat.png";

const RespoFooter = () => {
  return (
    <>
      <div className="MobFooter1">
        <div className="MobFooterT">
          <div className="MobFooterLeft">
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <p>
              Company # 490039-445, Registered with <br /> House of companies.
            </p>
          </div>
          <div className="MobFooterRight">
            <div className="MobSlot1">
              <p className="MobDeals">Get Exclusive MobDeals in your Inbox</p>
              <div className="Mob_Inp_btn">
                <input type="text" placeholder="youremail@gmail.com" />
                <button>Subscribe</button>
              </div>
              <p className="MobPolicy">we wont spam, read our email policy</p>
              <div className="MobSocialMedia">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={tiktok} alt="" />
                <img src={snapchat} alt="" />
              </div>
            </div>
            <div className="MobSlot2">
              <li className="MobLP">Legal Pages</li>
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
            <div className="MobSlot3">
              <li className="MobIL">Important Links</li>
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
        <d  iv className="MobFooterB">
          <div className="MobSlotLeft">
            Order.uk Copyright 2024, All Rights Reserved.
          </div>
         
        </d>
      </div>
    </>
  );
};

export default RespoFooter;
