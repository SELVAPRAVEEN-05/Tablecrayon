import {  Dialog, styled } from "@mui/material";

export const Dialogue = styled(Dialog)(() => ({
  "& .MuiDialogContent-root": {
    padding: 0,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  "& .MuiDialogActions-root": {
    padding: 0,
  },
  "& .MuiPaper-root": {
    height: "375px",
    width: "500px",
  },
}));

export const stylesnew = {
    head:{
        height:'63px',
        padding:'0 24px',
        display:'flex',
        alignItems:'center',
        color:'View feedback',
        fontWeight:'600',
        justifyContent:'space-between'
    }
  };
