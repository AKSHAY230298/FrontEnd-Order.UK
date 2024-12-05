import React, { useEffect, useState } from "react";
import "../pages/Profile.css";
import NavbarTop from "../components/NavbarTop";
import NavbarBtm1 from "../components/NavbarBtm1";
import Respo_Navbar1 from "../ResponsivComponents/Respo_Navbar1";
import Footer from "../components/Footer";
import ProfileEditPg from "../components/ProfileEditPg";
import { useNavigate } from "react-router-dom";
import EditCardInfo from "../components/EditCardInfo";
import {BASE_URL} from "../services/helper"


const Profile = () => {
  const [activeEditProfile, setActiveEditProfile] = useState(true);

  const [userInfo, setUserInfo] = useState([]);

  const handleEditBtn = () => {
    setActiveEditProfile(false);
    // console.log("active");
  };

  const getProfileInfo = async () => {
    const info = {
      email: localStorage.getItem("email"),
    };

    const response = await fetch(
      `${BASE_URL}/api/auth/getProfileInfo`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      }
    );

    if (response.ok) {
      let data = await response.json();
      console.log(data.msg);
      setUserInfo(data.msg);
    }
  };

  const [getedCardData, setGetedCardData] = useState([]);

  const getCardsData = async () => {
    const response = await fetch(
      `${BASE_URL}/api/auth/getCardsData`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const getedCardInfo = await response.json();
      setGetedCardData(getedCardInfo.msg);
      console.log("cardDetails:", getedCardData);
    }
  };

  const [activeCardEditPg, setActiveCardEditPg] = useState(false);

  const handleEditCardInfo = ()=>{
    setActiveCardEditPg(true);
  }

    

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  // console.log("uuuuuuuuuu",userInfo)

  useEffect(() => {
    getProfileInfo();
    getCardsData();
  }, []);

  return (
    <>
      <div className="profileMainContainer">
        <Respo_Navbar1 />
        <div className="profileNavbar">
          <div className="profileNavbar1">
            <NavbarTop />
          </div>
          <div className="profileNavbar2">
            <NavbarBtm1 />
          </div>
        </div>

        {activeEditProfile ? (
          <div className="profileBody">
            <p className="bodyHead">
              <img onClick={handleBack} src="arrow-left.png" alt="" />
              <img onClick={handleBack} src="backIcon.png" alt="" />
              My Profile
            </p>
            <div className="body_profile">
              <div className="profileHead">
                <div>
                  <img src="profilePic.png" alt="" />
                  <p>{userInfo.name}</p>
                </div>
                <div onClick={handleEditBtn} className="editBtn">
                  Edit
                </div>
              </div>
              <div className="profileData">
                <div className="name_gender">
                  <div className="fname">
                    <p>Full Name</p>
                    <p>{userInfo.name}</p>
                  </div>
                  <div className="gender">
                    <p>Gender</p>
                    <p>Male</p>
                  </div>
                </div>
                <div className="email_country">
                  <div className="emailAdd">
                    <p>Email Address</p>
                    <p>{userInfo.email}</p>
                  </div>
                  <div className="country">
                    <p>Country</p>
                    <p>India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="paymentMethod">
              <p>Saved Payment Methods</p>
              <div className="PaymentCards">
                {getedCardData.map((data) => (
                  <div className="paymentCard">
                    <img src="cardPic.png" alt="" />
                    <div className="cardDetails">
                      <p>{data.number}</p>
                      <p>{data.name}</p>
                    </div>
                    <img
                      onClick={() => handleEditCardInfo(data)}
                      src="edit-3.png"
                      alt=""
                    />
                  </div>
                ))}

                <div className="addCardBtn">
                  <img src="btnImg3.png" alt="" />

                  <p>Add New Card</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="profileEdit">
            <ProfileEditPg setActiveEditProfile={setActiveEditProfile} />
          </div>
        )}

        <div className="PaymetFooter">
          <Footer />
        </div>
      </div>

      {
      activeCardEditPg ? 
      <div className="editcardsdata">
          <EditCardInfo setActiveCardEditPg={setActiveCardEditPg} getedCardData={getedCardData}/>
      </div> : null
      }
    </>
  );
};

export default Profile;
