import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Reel.css"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
};

export default function BasicModal({ buttonImage, contentImage }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!buttonImage) {
    return <div></div>;
  }
  return (
    <div>
      <div className="borderGrad"
        style={{
          margin: "4px",
          border: "2px",
          
         
          borderRadius: "65px",
          
      
        }}
      >
        <img className="buttonup" alt="" src={buttonImage} onClick={handleOpen} ></img>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            alt=""
            src={contentImage}
            style={{ width: "100%", height: "100%" }}
          ></img>
        </Box>
      </Modal>
    </div>
  );
}
