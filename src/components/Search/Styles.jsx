import { Box, styled } from "@mui/material";

export const Searchbar = styled(Box)(() => ({
    backgroundColor: "#FFFFFF",
    height: "85%",
    width: "80%",
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

  export const stylesnew = {
    searchicon: {
        fontSize: "25px",
        marginLeft: "8px",
        marginRight: "8px",
        display: "flex",
        alignItems: "center",
        height: "100%",
        color: "#888888",
        justifyContent: "space-between",
      },
  }