import React, { useEffect, useState } from "react";
// import Navbar from '../components/NavbarTop.jsx'
import NavbarTop from "../components/NavbarTop.jsx";
import "../pages/HomePg.css";
import NavbarBtm from "../components/NavbarBtm.jsx";
import PopularResto from "../components/PopularResto.jsx";
import Footer from "../components/Footer.jsx";
// import homePageBanner from "../assets/homepagepic1.jpg"

import Respo_Navbar1 from "../ResponsivComponents/Respo_Navbar1.jsx";
import Respo_Navbar2 from "../ResponsivComponents/Respo_Navbar2.jsx";
import HomePg_Searching from "../ResponsivComponents/HomePg_Searching.jsx";
import RestoRespoDeal from "../ResponsivComponents/RestoRespoDeal.jsx";
import RespoOrderCategory from "../ResponsivComponents/RespoOrderCategory.jsx";
import RespoPopuResto from "../ResponsivComponents/RespoPopuResto.jsx";
import RespoFooter from "../ResponsivComponents/RespoFooter.jsx";
// import { useNavigate } from 'react-router-dom'


const HomePg = () => {




  const responsiveScreen = () => {
    return {
      width: window.innerWidth,
    };
  };

  const [responsiveWidth, setResponsiveWidth] = useState(responsiveScreen());

  useEffect(() => {
    const screenWidth = () => {
      setResponsiveWidth(responsiveScreen());
    };
    window.addEventListener("resize", screenWidth);
  }, []);

  return (
    <>
      {responsiveWidth.width > 768 ? (
        <>
          <div className="mainContainer">
            <div className="navContainer">
              <div className="nav1">
                <NavbarTop />
              </div>
              <div className="nav2">
                <NavbarBtm />
              </div>
            </div>
            <div className="bodyImg">
              <img className="homeBanner" src="homeBanner.jpg" alt="" />
            </div>
            <div className="dealResto">
              <div className="dealBar">
                <p>Up to -40% 🎊 Order.uk exclusive deals</p>
                <div className="foodType">
                  <div>Vegan</div>
                  <div>Sushi</div>
                  <div className="PFF">Pizza & Fast Food</div>
                  <div>Other</div>
                </div>
              </div>
              <div className="resto">
                <img src="cbl.png" alt="" />
                <img src="gcl.png" alt="" />
                <img src="bcl.png" alt="" />
              </div>
            </div>
            <div className="odrCategories">
              <div className="odrHead">Order.uk Popular Categories 🤩</div>
              <div className="odrMenu">
                <div className="rec13">
                  <img className="Rectangles" src="Rectangle 13.png" alt="" />
                  <p className="itemType">Burgers & Fast food</p>
                  <p>21 Restaurants</p>
                </div>
                <div className="rec15">
                  <img className="Rectangles" src="Rectangle 15.png" alt="" />
                  <p className="itemType">Salads</p>
                  <p>32 Restaurants</p>
                </div>
                <div className="rec17">
                  <img className="Rectangles" src="Rectangle 17.png" alt="" />
                  <p className="itemType">Pasta & Casuals</p>
                  <p>4 Restaurants</p>
                </div>
                <div className="rec19">
                  <img className="Rectangles" src="Rectangle 19.png" alt="" />
                  <p className="itemType">Pizza</p>
                  <p>32 Restaurants</p>
                </div>
                <div className="rec21">
                  <img className="Rectangles" src="Rectangle 21.png" alt="" />
                  <p className="itemType">Breakfast</p>
                  <p>4 Restaurants</p>
                </div>
                <div className="rec23">
                  <img className="Rectangles" src="Rectangle 23.png" alt="" />
                  <p className="itemType">Soups</p>
                  <p>32 Restaurants</p>
                </div>
              </div>
            </div>
            <div className="popuResto">
              <PopularResto/>
            </div>
            <div className="Order_bannerImg">
              <img src="OrderingBanner.png" alt="" />
            </div>
            <div className="SignUpOpt">
              <img src="businessSignUpImg.png" alt="" />
              <img src="riderSignUpImg.png" alt="" />
            </div>
            <div className="knowMoreCmpnt">
              <div className="upperPart">
                <p>Know more about us!</p>
                <div className="RightOpt">
                  <div className="FQ">Frequent Questions</div>
                  <div>Who we are?</div>
                  <div>Partner Program </div>
                  <div>Help & Support</div>
                </div>
              </div>
              <div className="LowerPart">
                <div className="lowerLeft">
                  <div>How does Order.UK work?</div>
                  <p>What payment methods are accepted?</p>
                  <p>Can I track my order in real-time?</p>
                  <p className="para2">
                    Are there any special discounts or promotions available?
                  </p>
                  <p>Is Order.UK available in my area?</p>
                </div>
                <div className="lowerRight">
                  <div className="cards">
                    <div className="LR1">
                      <p className="lrP">Place an Order!</p>
                      <img className="lrImg" src="order-food1.png" alt="" />
                      <p>Place order through our website or Mobile app</p>
                    </div>
                    <div className="LR2">
                      <p className="lrP">Track Your Order!</p>
                      <img className="lrImg" src="food1.png" alt="" />
                      <p>Track order status in real-time</p>
                    </div>
                    <div className="LR3">
                      <p className="lrP">Receive Your Order!</p>
                      <img className="lrImg" src="order-food1.png" alt="" />
                      <p>Receive at lightning-fast speed</p>
                    </div>
                  </div>
                  <div className="para">
                    Order.UK simplifies the food ordering process. Browse through
                    our diverse menu, select your favorite dishes, and proceed to
                    checkout. Your delicious meal will be on its way to your
                    doorstep in no time!
                  </div>
                </div>
              </div>
            </div>
            <div className="NumData">
              <div className="NumDataP">
                <p>546+</p>
                <p>Registered Riders</p>
              </div>
              <div className="NumDataP">
                <p>789,900+</p>
                <p>Orders Delivered</p>
              </div>
              <div className="NumDataP">
                <p>690+</p>
                <p>Restaurants Partnered</p>
              </div>
              <div className="NumDataP">
                <p>17,457+</p>
                <p>Food items</p>
              </div>
            </div>
            <div className="HomeFooter">
              <Footer />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="responsiveNavbar1">
            <Respo_Navbar1 />
          </div>
          <div className="responsiveNavbar2">
            <Respo_Navbar2 />
          </div>
          <div className="AddressBar">
            <img src="Location1.png" alt="" />
            <span>Lution Street, N4G-00....</span>
          </div>
          <div className="HomePg_Searching">
            <HomePg_Searching />
          </div>
          <div className="RespoDiscountOffer">
            <RestoRespoDeal />
          </div>
          <div className="RespoOrderCategory">
            <RespoOrderCategory />
          </div>
          <div className="RespoPopuResto">
            <RespoPopuResto />
          </div>
          <div className="OdrIsMoreImg">
            <img src="OdrIsMoreImg.jpg" alt="" />
          </div>
          <div className="RespoSignUpOpt">
            <img src="businessSignUpImg.png" alt="" />
            <img src="riderSignUpImg.png" alt="" />
          </div>
          <div className="RespoKnowMore">
            <p>Know more about us!</p>
            <div className="Mobile_LowerPart">
              <div className="Mobile_lowerLeft">
                <div>How does Order.UK work?</div>
                <p>What payment methods are accepted?</p>
                <p>Can I track my order in real-time?</p>
                <p className="Mobile_para2">
                  Are there any special discounts or promotions available?
                </p>
                <p>Is Order.UK available in my area?</p>
              </div>
              <div className="Mobile_lowerRight">
                <div className="Mobile_cards">
                  <div className="Mobile_LR1">
                    <p className="Mobile_lrP">Place an Order!</p>
                    <img
                      className="Mobile_lrImg"
                      src="order-food1.png"
                      alt=""
                    />
                    <p className="CardBtmPara">
                      Place order through our website or Mobile app
                    </p>
                  </div>
                  <div className="Mobile_LR2">
                    <p className="Mobile_lrP">Track Your Order!</p>
                    <img
                      className="Mobile_lrImg"
                      src="food1.png"
                      alt=""
                    />
                    <p className="CardBtmPara">
                      Track your order status with delivery time
                    </p>
                  </div>
                  <div className="Mobile_LR3">
                    <p className="Mobile_lrP">Receive Your Order!</p>
                    <img
                      className="Mobile_lrImg"
                      src="order-food1.png"
                      alt=""
                    />
                    <p className="CardBtmPara">
                      Receive your order at lightning-fast speed!
                    </p>
                  </div>
                </div>
                <div className="Mobile_para">
                  Order.UK simplifies the food ordering process. Browse through
                  our diverse menu, select your favorite dishes, and proceed to
                  checkout. Your delicious meal will be on its way to your
                  doorstep in no time!
                </div>
              </div>
            </div>
          </div>
          <div className="Mob_NumData">
            <div className="Mob_NumDataP">
              <p>546+</p>
              <p>Registered Riders</p>
            </div>
            <div className="Mob_NumDataP">
              <p>789,900+</p>
              <p>Orders Delivered</p>
            </div>
            <div className="Mob_NumDataP">
              <p>690+</p>
              <p>Restaurants Partnered</p>
            </div>
            <div className="Mob_NumDataP">
              <p>17,457+</p>
              <p>Food items</p>
            </div>


          </div>
          <div className="respoFooter">
            <RespoFooter/>
          </div>
        </>
      )}
    </>
  );
};

export default HomePg;