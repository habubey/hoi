import React from "react";
import "./Header.css";

import MainButton from "../MainButton/Mainbutton";
const Header = () => {
  return (
    <div>
      <div className="text" style={{marginTop:"130px"}}>
        <h1 style={{fontSize:"70px", fontFamily:"Poppins"}} >Premium Health Tourism </h1>
        <h5 style={{fontSize:"20px", fontFamily:"Poppins"}}>
          Get a Free Quote from one of the best clinics and surgeons with no
          hussle!
        </h5>
        
      </div>
      <div className="main">
        <MainButton />
        <h5 className="mobiles">Get a Free Quote from one of the best clinics and surgeons with no
          hussle!</h5>
        <div className="subtitle">
          <h6>• No Credit Card</h6>
          <h6>• Free Quote in a Minutes </h6>
        </div>
      </div>
      <>
        <div class="middle">
          <div class="mouse"></div>
        </div>
      </>
    </div>
  );
};

export default Header;
