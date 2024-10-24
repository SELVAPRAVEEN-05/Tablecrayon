import { Box, styled, TableCell, tableCellClasses, TableRow } from "@mui/material";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

export const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
      height: "18px",
      color: "#353448",
    },
    [`&.${tableCellClasses.head}`]: {
      fontSize: 18,
      color: "#353448",
      fontWeight: "600",
    },
  }));

  export const StyledTableRow = styled(TableRow)(() => ({
    td: {
      border: 0,
    },
  }));

  export const DoneIcon = styled(IoCheckmarkDoneSharp)(({ response }) => ({
    color: response === "yes" ? "#665CD7" : "#E5E5E5",
    fontSize: "18px",
    marginLeft: "40px",
    display: "flex",
    alignItems: "center",
  }));

  export const Signalcolour = styled(Box)(({ performance }) => ({
    backgroundColor:
      performance === "Excellent"
        ? "#007C32"
        : performance === "Very Good"
        ? "#AEC934"
        : performance === "Need Improvement"
        ? "#F27024"
        : performance === "Average"
        ? "#F2EB24"
        : "red",
    height: "20px",
    width: "20px",
    borderRadius: "50px",
  }));

  export const stylesnew = {
    flex: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
      },

      photo: {
        width: 27,
        height: 27,
      },tablefooterc: {
        borderTop: "1px solid #E6E6E6",
        borderBottom: "none",
        color: "#71707E",
        fontSize: "14px",
      },
    
      view: {
        color: "#49C792 !important",
        textDecoration: "underline",
        cursor: "pointer",
        display: "flex",
        marginBottom: "-10px",
        marginLeft: "25px",
      },
  }