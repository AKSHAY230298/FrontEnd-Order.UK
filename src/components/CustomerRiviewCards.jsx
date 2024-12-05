import React from "react";
import "./CustomerRiviewCards.css";

const CustomerRiviewCards = () => {
  return (
    <>
      <div className="custoReview">
        <div className="innerCustoReview">
          <div className="reviewHeading">
            <h1>Customer Reviews</h1>
            <div className="scrollbtns">
              <img src="ScrollLeftBtn.png" alt="" />
              <img src="ScrollRightBtn.png" alt="" />
            </div>
          </div>
          <div className="reviewCards">
            <div className="card">
              <div className="cardHead">
                <div className="profileLeft">
                  <div className="ProfileImg">
                    <img src="profileImg.png" alt="" />
                  </div>
                  <div className="ProfileInfo">
                    <p>St Glx</p>
                    <p>South London</p>
                  </div>
                </div>
                <div className="profileRight">
                  <div className="str_date">
                    <img src="starImg.png" alt="" />
                  </div>
                  <div className="clock">
                    <img src="clkImg.png" alt="" />
                    <p>24th September, 2023</p>
                  </div>
                </div>
              </div>
              <div className="cardBody">
                <p>The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.</p>
              </div>
            </div>
            <div className="card">
              <div className="cardHead">
                <div className="profileLeft">
                  <div className="ProfileImg">
                    <img src="profileImg.png" alt="" />
                  </div>
                  <div className="ProfileInfo">
                    <p>St Glx</p>
                    <p>South London</p>
                  </div>
                </div>
                <div className="profileRight">
                  <div className="str_date">
                    <img src="starImg.png" alt="" />
                  </div>
                  <div className="clock">
                    <img src="clkImg.png" alt="" />
                    <p>24th September, 2023</p>
                  </div>
                </div>
              </div>
              <div className="cardBody">
                <p>The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.</p>
              </div>
            </div>
            <div className="card">
              <div className="cardHead">
                <div className="profileLeft">
                  <div className="ProfileImg">
                    <img src="profileImg.png" alt="" />
                  </div>
                  <div className="ProfileInfo">
                    <p>St Glx</p>
                    <p>South London</p>
                  </div>
                </div>
                <div className="profileRight">
                  <div className="str_date">
                    <img src="starImg.png" alt="" />
                  </div>
                  <div className="clock">
                    <img src="clkImg.png" alt="" />
                    <p>24th September, 2023</p>
                  </div>
                </div>
              </div>
              <div className="cardBody">
                <p>The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.</p>
              </div>
            </div>
            
          </div>
          <div className="ratingImg">
            <img src="ratingImg.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerRiviewCards;
