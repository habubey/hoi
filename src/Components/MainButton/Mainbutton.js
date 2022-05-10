import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
