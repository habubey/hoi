import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import story from "../../../Images/hoisaglik.png";
import Signup from "../components/SignUp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [signupToggle, setSignupToggle] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSignupToggle(false);
  };
  const handleNext = () => setSignupToggle(true);
  //   next e bastık falsu true yaptık

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        style={{
          borderRadius: "40px",
          margin: "5px 0",
          backgroundColor: "#fdee9b",
          color: "black",
          width: "150px",
          height: "50px",
          fontSize: "10px"
        }}
      >
        {" "}
        Get Your Free Quote{" "}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          {/* tek children olabilir o yüzden div koyduk */}
          {signupToggle && (
            <Box
              sx={style}
              style={{
                textAlign: "center",
                fontFamily: "Poppins",
              }}
            >
              <Signup />
            </Box>
          )}

          {!signupToggle && (
            <Box
              sx={style}
              style={{
                textAlign: "center",
                fontFamily: "Poppins",
              }}
            >
              <h4>Get Free Quote</h4>
              <p>Choose Your Clinic-Surgery</p>
              <TextField
                id="standard-name"
                label="Enter your surgery"
                fullWidth
                select
              >
                <MenuItem value={10}>
                  {" "}
                  <img
                    src={story}
                    style={{ width: "30px", margin: "10px" }}
                    alt=""
                  />
                  Hair Transplant • https://hoisaglik.com/{" "}
                </MenuItem>
              </TextField>

              <TextField
                style={{
                  marginTop: "11px",
                }}
                id="outlined-basic"
                label="Name-Surname"
                variant="outlined"
                fullWidth
              />
              <TextField
                style={{
                  marginTop: "11px",
                }}
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                fullWidth
              />
              <TextField
                style={{
                  marginTop: "11px",
                  textAlign: "center",
                }}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                fullWidth
              />
              <br />

              <FormControl>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  style={{
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>

              <Button
                variant="contained"
                onClick={handleNext}
                style={{
                  borderRadius: "40px",
                  margin: "11px 0px",
                  backgroundColor: "#fdee9b",
                  color: "#777049",
                  width: "250px",
                  height: "50px",
                }}
              >
                {" "}
                NEXT{" "}
              </Button>
            </Box>
          )}
        </>
      </Modal>

      {/* <Signup/> */}
    </div>
  );
}
