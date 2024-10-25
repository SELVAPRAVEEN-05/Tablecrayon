import {
  Box,
  styled,
  TableCell,
  tableCellClasses,
  TableRow,
} from "@mui/material";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

export const StyledTableCell = styled(TableCell)(({ align }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    height: "19px",
    color: "#353448",
  },
  [`&.${tableCellClasses.head}`]: {
    fontSize: 18,
    color: "#353448",
    fontWeight: "600",
    textAlign:
      align === "Response" || align === "Reminder" || align === "Feedback"
        ? "center"
        : "left",
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  td: {
    border: 0,
    padding: "14.5px 15px",
  },
}));

export const DoneIcon = styled(IoCheckmarkDoneSharp)(({ response }) => ({
  color: response === "yes" ? "#665CD7" : "#E5E5E5",
  fontSize: "18px",
  display: "flex",
  // marginLeft:'30px'
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
  },
  tablefooterc: {
    borderTop: "1px solid #E6E6E6",
    borderBottom: "none",
    color: "#71707E",
    fontSize: "14px",
    width: "97%",
    position: "fixed",
    bottom: 20,
  },

  view: {
    color: "#49C792 !important",
    textDecoration: "underline",
    cursor: "pointer",
    textAlign: "center",
  },

  out: {
    height: "630px",
    overflowY: "auto",
    overflowX: "hidden",
    scrollbarWidth: "none",
  },
  scrollableTableBody: {
    maxHeight: "573px",
    overflowY: "auto",
    overflowX: "hidden",
    scrollbarWidth: "none",
  },

  center: {
    display: "flex",
    justifyContent: "center",
  },
};
