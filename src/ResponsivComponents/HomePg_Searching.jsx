import React from 'react';
import './HomePg_Searching.css'


const HomePg_Searching = () => {
  return (
    <>
    <div className='RespoSearch' >
      <span className='orderFood' >Order Restaurant food, takeaway and groceries.</span>
      <div className="OrderHead">

      <p className='OrderHead1' >Feast Your Senses,</p>
        <p className='OrderHead2' >Fast and Fresh</p>
      </div>
      <span className='postCode' >Enter a postcode to see what we deliver</span>

        <div className="RespoSearchBar">
            <input className='srchInp' type="text" placeholder='e.g. EC4R 3TE' />
            <div className="InpArrow">
                <img src="nextPg.png"  />
            </div>
        </div>

    </div>
    </>
  );
}

export default HomePg_Searching;