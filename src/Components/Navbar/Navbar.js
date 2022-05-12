import React, { useState } from "react";
import Logo from "../../Images/hoi-health-tourism.png";
import "../Navbar/Navbar.css";
import Reel from "../Reel/Reel";
import logo1 from "../../Images/hairwhite.png";
import story from "../../Images/hoi-health-hair-transplant.jpeg";
import logo2 from "../../Images/reel2.png";
import story2 from "../../Images/story2.jpeg";
import logo3 from "../../Images/reel3.png";
import story3 from "../../Images/story3.jpeg";
import logo4 from "../../Images/reel4.png";
import story4 from "../../Images/story4.jpeg";
import useWindowsSize from "../../hooks/useWindowsSize";


import {
  Button,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton
} from "@mui/material";
import { Inbox, Mail, Menu } from "@mui/icons-material";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState();
  const size = useWindowsSize();
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(!openDrawer);
  };

  return (
    <div className="navbar" style={{ height: "110px", boxShadow: "none" }}>
      <img src={Logo} alt="HoiLogo" height={75} />

      <div className="stories">
        <Reel buttonImage={logo1} contentImage={story} />
        <Reel buttonImage={logo2} contentImage={story2} />
        <Reel buttonImage={logo3} contentImage={story3} />
        <Reel buttonImage={logo4} contentImage={story4} />
      </div>

      {size.width > 720 && (
        <div className="buttonbar">
          <a href="https://hoi.com.tr/" class="button1">
            {" "}
            Login{" "}
          </a>
          <a href="https://hoi.com.tr/" class="button2">
            Get Started
          </a>
        </div>
       
      )} 
      {size.width <= 720 && <div> <Button onClick={toggleDrawer(true)}>
        <IconButton><Menu/> </IconButton>
        
        
        </Button>
      <SwipeableDrawer
        anchor={"right"}
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <List>
          {["Login", "Get Started"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer></div> }
      
    </div>
  );
};

export default Navbar;
