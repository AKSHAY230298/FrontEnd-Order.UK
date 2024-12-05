import React, { useEffect, useState } from "react";
import "./OrderDetails.css";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../services/helper"


const OrderDetails = () => {
  const [orderData, setOrderData] = useState([]);

  const getCartData = async () => {
    const response = await fetch(`${BASE_URL}/api/auth/getCartInfo`, {
      method: "GET",
    });

    // console.log(response);

    if (response.ok) {
      const data = await response.json();
      setOrderData(data.msg);
    }

    console.log(orderData);
  };

  const calculateTotal = (orderData) => {
    return orderData.reduce((total, item) => {
      return total + item.quantity * parseFloat(item.price);
    }, 0);
  };

  const sum = calculateTotal(orderData);

  useEffect(() => {
    getCartData();
  }, []);

  const navigate = useNavigate();

  const handlePaymetPg = () => {
    navigate("/payment");
  };

  const handleBack = () => {
    navigate("/product");
  };

  const handleAddClick = () => {
    navigate("/address");
  };

  return (
    <>
      <div className="ordersinfo">
        <div className="yourDeatail">
          <img onClick={handleBack} src="arrow-left.png" alt="" />
          <p>Your Order Details</p>
        </div>

        <div className="orderinformation">
          <div className="orderinfoLeft">
            <div className="orders">
              {orderData.map((data) => (
                <div className="oreder1">
                  <div className="order1info">
                    <img src="Rectangle 11.png" alt="" />

                    <div className="fnameandItem">
                      <p>{data.head}</p>
                      <p>{data.quantity}x item</p>
                    </div>
                  </div>

                  <div className="order1Price">₹{data.price}</div>
                </div>
              ))}
            </div>

            <div className="writenote">
              <p>Notes</p>
              <input type="text" name="" id="" placeholder="Add order notes" />
            </div>
          </div>

          <div className="orderinforight">
            <div className="Deliveryhead">Delivery Address</div>

            <div onClick={handleAddClick} className="orderinfo1">
              <div className="addressWithImg">
                <img src="Location2.png" alt="" />

                <div className="DeliveryAdd">
                  <p>Delivery Address</p>
                  <p>45, Green Street, Sector 12...</p>
                </div>
              </div>

              <div className="addressArrow">
                <img src="ArrowRight.png" alt="" />
              </div>
            </div>

            <div className="orderinfo2">
              <div className="orderinfoItems">
                <p>Items</p>
                <p>₹{sum}</p>
              </div>

              <div className="orderinfoTax">
                <p>Sales Tax</p>
                <p>₹10</p>
              </div>
            </div>
            <div className="orderinfo3">
              <span>Subtotal </span>
              <span>₹{sum + 10}</span>
            </div>
            <div onClick={handlePaymetPg} className="orderinfo4">
              Choose Payment Method
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
