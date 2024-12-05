import React from 'react'
import "./Map.css"

const Map = () => {
  return (
    <>
    <div className="MapContainer">
        <div className="ImportMap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.7749166304!2d77.30126160627866!3d12.95445953756361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1732877536991!5m2!1sen!2sin" width="600" height="450"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="MapBox">
            <p>McDonald’s</p>
            <p>South London</p>
            <p>Tooley St, London Bridge, London SE1 2TF, United Kingdom</p>
            <p>Phone number</p>
            <p>+934443-43</p>
            <p>Website</p>
            <p>http://mcdonalds.uk/</p>
        </div>
    </div>
    
    </>
  )
}

export default Map
