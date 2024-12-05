import React from 'react';
import {BASE_URL} from "../services/helper"
import '../components/EditCardInfo.css';

const EditCardInfo = ({setActiveCardEditPg, getedCardData}) => {

const onHandleBack=()=>{
    setActiveCardEditPg(false);

}

const updateCardInfo = async ()=>{
    const response = await fetch(`${BASE_URL}/api/auth/editCardData`,{
        method:"PUT",
        headers:{
            "Content-Type":""
        }
    })
}



    return (
        // <div className="payBox">
            <div className="paycontainer">
                <p>Edit Payment Method</p>

                <div className="cardinfo">
                    <div className="cardINP">
                        <label htmlFor="CardNumber">Card Number</label>
                        <input type="text" />
                    </div>

                    <div className="cardINP">
                        <label htmlFor="Expiration">Expiration</label>
                        <input type="text" />
                    </div>

                    <div className="cardINP">
                        <label htmlFor="CVC">CVC</label>
                        <input type="text" />
                    </div>

                    <div className="cardINP">
                        <label htmlFor="CardName">Name on Card</label>
                        <input type="text" />
                    </div>
                </div>

                <div className="methFooter">
                    <span className="methfootl" style={{backgroundColor: "rgba(102, 55, 0, 1)", padding:"1rem 2rem",marginLeft:"1rem", borderRadius:"12px",
                        fontSize:"1.3rem",
                        color:"white"
                    }}>Remove</span>
                    <span className="methfootr">
                        <span style={{color:'black', fontSize:"1.3rem"}} className="cancel" 
                        onClick={onHandleBack} >Cancel</span>
                        <span style={{backgroundColor: "white", padding:"1rem 2rem", marginLeft:"1rem",marginRight:"1rem",borderRadius:"12px", fontSize:"1.3rem"}} className="sChange">Save Changes</span>
                    </span>
                </div>
            </div>
        // </div>
    );
};

export default EditCardInfo;