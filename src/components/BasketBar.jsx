import React, { useEffect } from "react";
import "./BasketBar.css";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../services/helper"

const BasketBar = ({ cartData, setCartData }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/order");
  };

  const handleDelete = async (data) => {
    const title = data;
    console.log(title);

    const deleteResponse = await fetch(
      `${BASE_URL}/api/auth/delCartData`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(title),
      }
    );

    if (deleteResponse.ok) {
      const response = await fetch(
        `${BASE_URL}/api/auth/getCartInfo`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        setCartData(responseData.msg);
      }
    }

  };

  function calculateTotal(cartData) {
    return cartData.reduce((total, item) => {
      return total + item.quantity * parseFloat(item.price);
    }, 0);
  }
  
      const totalSum = calculateTotal(cartData);

  return (
    <>
      <div className="basketCheckout">
        <div className="shareCart">
          <img src="shareCartImg.png" alt="" />
        </div>
        <div className="cartHead">
          <img src="FullShoppingBasket.png" alt="" />
          <p>My Basket</p>
        </div>

        {cartData.map((data) => (
          <div className="selectedItem">
            <div className="qty">{data.quantity}x</div>
            <div className="itemsName">
              <p>₹ {data.price}</p>
              <p> {data.head} </p>
            </div>
            <img
              onClick={() => handleDelete(data)}
              src="RemoveImg.png"
              alt=""
            />
          </div>
        ))}

        {/* <div className="selectedItem">
          <div className="qty">1x</div>
          <div className="itemsName">
            <p>₹70</p>
            <p>Potato Veggie</p>
            <p>With extra fries</p>
          </div>
          <img src="RemoveImg.png" alt="" />
        </div>
        <div className="selectedItem">
          <div className="qty">1x</div>
          <div className="itemsName">
            <p>₹40</p>
            <p>Coke Coca Cola</p>
          </div>
          <img src="RemoveImg.png" alt="" />
        </div> */}

        <div className="TotalCalc">
          <div className="subTotal">
            <span>Sub Total: </span>
            <span>₹{totalSum}</span>
          </div>
          <div className="subTotal">
            <span>Discounts: </span>      
            <span>-₹3.00</span>
          </div>
          <div className="subTotal">
            <span>Delivery Fee: </span>
            <span>₹3.00</span>
          </div>
        </div>
        <div className="totalPayDiv">
          <div className="totalPay">
            <span>Total to pay</span>
            <span>₹{totalSum}</span>
          </div>

          <div className="totalPay1">
            <p>Choose your free item..</p>
            <img src="Forward Button.png" alt="" />
          </div>

          <div className="totalPay1">
            <p>Apply Coupon Code here</p>
            <img src="Forward Button1.png" alt="" />
          </div>
        </div>
        <div className="bottomChekoutBtn">
          <div className="deliveryDiv">
            <div className="delivery">
              <img src="scooter.png" alt="" />
              <p>Delivery</p>
              <p>Starts at 17:50</p>
            </div>
            <div className="collection">
              <img src="store.png" alt="" />
              <p>Collection</p>
              <p>Starts at 16:50</p>
            </div>
          </div>
          <div className="chkoutBtn">
            <p onClick={handleNavigate}>
              Checkout! <img src="Forward Button3.png" alt="" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketBar;
