import React, { useEffect, useState } from "react";
import "../components/ProfileEditPg.css";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../services/helper"


const ProfileEditPg = ({ setActiveEditProfile }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    // navigate('/profile')
    setActiveEditProfile(true);
  };

  const [userInfo, setUserInfo] = useState([]);

  const postUserData = async () => {
    const signInData = {
      email: localStorage.getItem("email"),
    };

    const response = await fetch(
      `${BASE_URL}/api/auth/getProfileInfo`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
      }
    );

    if (response.ok) {
      let gettedData = await response.json();
      console.log(gettedData.msg);
      setUserInfo(gettedData.msg);
    }
  };

  const [inputInfoUpdate, setInputInfoUpdate] = useState({
    name: userInfo.name,
    email: userInfo.email,
    old_email: localStorage.getItem("email"),
  });

  const handleInputData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInputInfoUpdate({
      ...inputInfoUpdate,
      [name]: value,
    });
  };

  const handleSave = async () => {
    setActiveEditProfile(true);
    if (inputInfoUpdate.name == undefined) {
      inputInfoUpdate.name = userInfo.name;
    }
    if (inputInfoUpdate.email == undefined) {
      inputInfoUpdate.email = localStorage.getItem("email");
    }

    localStorage.setItem("email", inputInfoUpdate.email);

    const response = await fetch(
      `${BASE_URL}/api/auth/editProfileInfo`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputInfoUpdate),
      }
    );
    if (response.ok) {
      const response = await fetch(
        `${BASE_URL}/api/auth/getProfileInfo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signInData),
        }
      );

      if (response.ok) {
        let gettedData = await response.json();
        console.log(gettedData.msg);
        setUserInfo(gettedData.msg);
      }
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


// edit card button functionality






  // console.log(inputInfoUpdate);

  useEffect(() => {
    postUserData();
    getCardsData();
  }, []);

  return (
    <>
      <div className="editProfileBody">
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
            <div onClick={handleSave} className="editBtn">
              Save
            </div>
          </div>
          <div className="profileData">
            <div className="name_gender">
              <div className="fname">
                <p>Full Name</p>
                <input
                  type="text"
                  onChange={handleInputData}
                  name="name"
                  placeholder={userInfo.name}
                />
              </div>
              <div className="gender">
                <p>Gender</p>
                <input type="text" value="Male" />
              </div>
            </div>
            <div className="email_country">
              <div className="emailAdd">
                <p>Email Address</p>
                <input
                  type="text"
                  onChange={handleInputData}
                  name="email"
                  placeholder={userInfo.email}
                />
              </div>
              <div className="country">
                <p>Country</p>
                <input value="India" type="text" />
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
                <img src="edit-3.png" alt="" />
              </div>
            ))}

            <div className="addCardBtn">
              <img src="btnImg3.png" alt="" />

              <p>Add New Card</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEditPg;
