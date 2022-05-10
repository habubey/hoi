import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
export default function BasicButtonGroup() {
  return (
    <div>
<Button startIcon={<LoginIcon />} variant="contained" color="success" style={{
            marginBottom: "35px",
            marginRight: "10px",
            backgroundColor: "#fdee9b",
            color: "black",
            
          }}>
  Login
</Button>
        
<Button startIcon={<VpnKeyIcon />} variant="contained" color="success" style={{
            marginBottom: "35px",
            marginLeft: "10px",
            backgroundColor: "#fdee9b",
            color: "black",
            
          }}>
  Sign Up
</Button>

      <Stack direction="row" spacing={2}>
        <Button
          style={{
            marginLeft: "35px",
            backgroundColor: "#fdee9b",
            color: "black",
            
          }}
          variant="outlined"
          startIcon={<GoogleIcon />}
        >
          Gmail
        </Button>
        <Button
          style={{
            marginLeft: "35px",
            backgroundColor: "#fdee9b",
            color: "black",
          }}
          variant="outlined"
          startIcon={<FacebookIcon />}
        >
          Facebook
        </Button>
      </Stack>
      {" "}
    </div>
  );
}
