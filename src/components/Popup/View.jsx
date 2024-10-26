import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";
import { useState } from "react";
import { Dialogue, stylesnew } from "./Style";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function View({ setPrincing }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setPrincing(false);
  };

  return (
    <Dialogue
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
    >
      <DialogContent>
        <Box sx={stylesnew.head }>
            <Box>View feedback</Box>
            <Box>x</Box>
        </Box>
        <Box>body</Box>
      </DialogContent>
    </Dialogue>
  );
}
