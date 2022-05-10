import * as React from "react";

import TextField from "@mui/material/TextField";


import MenuItem from '@mui/material/MenuItem';

import SurgeryForm from "./components/SurgeryForm"
export default function BasicButtonGroup() {
  return (
      <div> 
    <TextField 
    style={{width:"450px"}}
      id="standard-name"
      label="Enter your surgery"
     select
      InputProps={{
        endAdornment: (
          <SurgeryForm/>
        ),
      }}
>
<MenuItem value={10}>Hair Transplant</MenuItem>
    <MenuItem value={20}>Rhinoplasty</MenuItem>
    <MenuItem value={30}>Liposuction</MenuItem>
    <MenuItem value={30}>Dental Implant</MenuItem>
    <MenuItem value={30}>Hollywood Smile</MenuItem>
    <MenuItem value={30}>Dental Veneers</MenuItem>


    

    </TextField>

</div>

  );
}
