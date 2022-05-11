import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
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
      <img alt="" src={buttonImage} onClick={handleOpen} width="40"></img>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img alt="" src={contentImage} style={{width:"100%", height:"100%"}} ></img>
        </Box>
      </Modal>
    </div>
  );
}
