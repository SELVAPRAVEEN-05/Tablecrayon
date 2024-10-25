import { Box, styled } from "@mui/material";

export const Outline = styled(Box)(() => ({
  backgroundColor: "#F0F0F0",
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
}));

export const Heading = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  height: "70px",
  justifyContent: "space-between",
}));

export const Titlehead = styled(Box)(() => ({
  color: "#353448",
  fontSize: "20px",
  fontWeight: "600",
}));

export const Container = styled(Box)(() => ({
  height: "98%",
  width: "97%",
  overflow: "hidden",
}));

export const Table1 = styled(Box)(() => ({
  backgroundColor: "#FFFFFF",
  height: "685px",
  width: "100%",
  border: "1px solid #E6E6E6",
  borderRadius: "8px",
  overflowY:'scroll',
  scrollbarWidth:'none'
}));

export const Flex = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
}));


