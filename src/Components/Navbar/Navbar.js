import React from "react";
import Logo from "../../Images/hoi-health-tourism.png";
import "../Navbar/Navbar.css";
import Reel from "../Reel/Reel"
import logo1 from "../../Images/hoisaglik.png";
import story from "../../Images/hoi-health-hair-transplant.jpeg"
import logo2 from "../../Images/reel2.png";
import story2 from "../../Images/story2.jpeg"
import logo3 from "../../Images/reel3.png";
import story3 from "../../Images/story3.jpeg"
import logo4 from "../../Images/reel4.png";
import story4 from "../../Images/story4.jpeg"


const Navbar = () => {
  return (
    <div className="navbar" style={{height:"110px"}} >
      <img src={Logo} alt="HoiLogo" height={75} />

<div className="stories"> 
 <Reel buttonImage={logo1} contentImage={story}  /> 
 <Reel buttonImage={logo2} contentImage={story2}  />  
 <Reel buttonImage={logo3} contentImage={story3}  />  
 <Reel buttonImage={logo4} contentImage={story4}  />  

</div>



      <div className="buttonbar">



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
