import React from "react";
import Logo from "../../Images/hoi-health-tourism.png";
import "../Navbar/Navbar.css";
import Reel from "../Reel/Reel"
import logo1 from "../../Images/hoisaglik.png";
import story from "../../Images/hoi-health-hair-transplant.jpeg"

const Navbar = () => {
  return (
    <div className="navbar" style={{height:"130px"}} >
      <img src={Logo} alt="HoiLogo" height={60} />
 <Reel buttonImage={logo1} contentImage={story}  />
 {/* <Reel buttonImage={logo1} contentImage={story}  />  bunlaarıı deü,itrsss*/}

      <div>




        <a href="https://hoi.com.tr/" class="button1">
          {" "}
          Login{" "}
        </a>
        <a href="https://hoi.com.tr/" class="button2">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Navbar;
