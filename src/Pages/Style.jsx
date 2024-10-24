import {
  Box,
  styled,
  TableCell,
  tableCellClasses,
  TableRow,
} from "@mui/material";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export const Outline = styled(Box)(() => ({
  backgroundColor: "#F0F0F0",
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
}));

export const Searchbar = styled(Box)(() => ({
  backgroundColor: "#FFFFFF",
  height: "85%",
  width: "80%",
}));

export const Table1 = styled(Box)(() => ({
  backgroundColor: "#FFFFFF",
  height: "685px",
  width: "100%",
  border: "1px solid #E6E6E6",
  borderRadius: "8px",
}));

export const Flex = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
}));
export const DoneIcon = styled(IoCheckmarkDoneOutline)(({ response }) => ({
  color: response === "yes" ? "#665CD7" : "#E5E5E5",
  fontSize: "18px",
}));

export const Filter = styled(Box)(() => ({
  height: "40px",
  display: "flex",
  width: "50px",
  justifyContent: "center",
  backgroundColor: "#49C792",
  borderRadius: "5px",
  color: "#FFFFFF",
  fontSize: "20px",
  alignItems: "center",
}));

export const Search = styled(Box)(() => ({
  backgroundColor: "#FFFFFF",
  height: "40px",
  width: "310px",
  border: "1px solid #CACACA",
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",
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

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    height: "20px",
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

export const stylesnew = {
  boxContainer: {
    height: "98%",
    width: "97%",
    overflow: "hidden",
  },
  heading: {
    display: "flex",
    alignItems: "center",
    height: "70px",
    justifyContent: "space-between",
  },

  title: {
    color: "#353448",
    fontSize: "20px",
    fontWeight:'600'
  },

  searchicon: {
    fontSize: "28px",
    marginLeft: "8px",
    display: "flex",
    alignItems: "center",
    height: "100%",
    color: "#888888",
    justifyContent: "space-between",
  },

  tablefooterc: {
    borderTop: "1px solid #E6E6E6",
    borderBottom: "none",
    color: "#71707E",
    fontSize: "14px",
  },

  flex: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  photo: {
    width: 28,
    height: 28,
  },

  view: {
    color: "#49C792 !important",
    textDecoration: "underline",
    cursor: "pointer",
  },

  button: (reminder) => ({
    backgroundColor: reminder === 'Added' ? '#B9B9B9' : '#49C792',
    borderRadius: "4px",
    padding: '2.5px 0px',
    width: '65px',
    fontSize: '12px',
    color: '#FFFFFF',
    textTransform: "none",
  })
};
