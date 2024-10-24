import React, { useState } from "react";
import { Box, TablePagination } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import {
  Outline,
  stylesnew,
  Flex,
  Table1,
  StyledTableCell,
  StyledTableRow,
  DoneIcon,
  Signalcolour,
  
} from "./Style";
import Searchstar from "../components/Search/Search";
import Filterstar from "../components/Iconbutton/Filter";
import Buttonsty from "../components/Button/Button";

function HomeTable() {
  const Rowdata = [
    {
      id: "1",
      date: "31 Jan 2023, 01:30 PM",
      nameprofile: {},
      name: "George Fernandes",
      signal: "Communication",
      performance: "Excellent",
      response: "yes",
      view: "view",
      reminder: "Add",
    },
    {
      id: "2",
      date: "31 Jan 2023, 02:00 PM",
      nameprofile: {},
      name: "Maria Lopez",
      signal: "Teamwork",
      performance: "Very Good",
      response: "yes",
      view: "view",
      reminder: "Added",
    },
    {
      id: "3",
      date: "31 Jan 2023, 03:30 PM",
      nameprofile: {},
      name: "John Doe",
      signal: "Leadership",
      performance: "Need Improvement",
      response: "no",
      view: "view",
      reminder: "Add",
    },
    {
      id: "1",
      date: "31 Jan 2023, 01:30 PM",
      nameprofile: {},
      name: "George Fernandes",
      signal: "Communication",
      performance: "Average",
      response: "yes",
      view: "view",
      reminder: "Add",
    },
    {
      id: "2",
      date: "31 Jan 2023, 02:00 PM",
      nameprofile: {},
      name: "Maria Lopez",
      signal: "Teamwork",
      performance: "Very Good",
      response: "yes",
      view: "view",
      reminder: "Added",
    },
    {
      id: "3",
      date: "31 Jan 2023, 03:30 PM",
      nameprofile: {},
      name: "John Doe",
      signal: "Leadership",
      performance: "Need Improvement",
      response: "no",
      view: "view",
      reminder: "Add",
    },
    {
      id: "1",
      date: "31 Jan 2023, 01:30 PM",
      nameprofile: {},
      name: "George Fernandes",
      signal: "Communication",
      performance: "Excellent",
      response: "yes",
      view: "view",
      reminder: "Added",
    },
    {
      id: "2",
      date: "31 Jan 2023, 02:00 PM",
      nameprofile: {},
      name: "Maria Lopez",
      signal: "Teamwork",
      performance: "Very Good",
      response: "yes",
      view: "view",
      reminder: "Added",
    },
    {
      id: "3",
      date: "31 Jan 2023, 03:30 PM",
      nameprofile: {},
      name: "John Doe",
      signal: "Leadership",
      performance: "Need Improvement",
      response: "no",
      view: "view",
      reminder: "Add",
    },
    {
      id: "1",
      date: "31 Jan 2023, 01:30 PM",
      nameprofile: {},
      name: "George Fernandes",
      signal: "Communication",
      performance: "Excellent",
      response: "yes",
      view: "view",
      reminder: "Add",
    },
  ];

  const Column = [
    {
      id: "1",
      Header: "Date",
      width: "180px",
    },
    {
      id: "2",
      Header: "To",
      width: "230px",
    },
    {
      id: "3",
      Header: "Signal",
      width: "150px",
    },
    {
      id: "4",
      Header: "Performance",
      width: "120px",
    },
    {
      id: "5",
      Header: "Response",
      width: "100px",
    },
    {
      id: "6",
      Header: "Feedback",
      width: "100px",
    },
    {
      id: "7",
      Header: "Reminder",
      width: "100px",
    },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Outline>
      <Box sx={stylesnew.boxContainer}>
        <Box sx={stylesnew.heading}>
          <Box sx={stylesnew.title}>Feedbacks</Box>
          <Flex>
            <Searchstar />
            <Filterstar />
          </Flex>
        </Box>
        <Table1>
          <Table>
            <TableHead>
              <TableRow>
                {Column.map((column) => (
                  <StyledTableCell key={column.id}>
                    {column.Header}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Rowdata.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>{row.date}</StyledTableCell>
                  <StyledTableCell sx={stylesnew.flex}>
                    <Avatar sx={stylesnew.photo} />
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell>{row.signal}</StyledTableCell>
                  <StyledTableCell sx={stylesnew.flex}>
                    <Signalcolour performance={row.performance} />
                    {row.performance}
                  </StyledTableCell>
                  <StyledTableCell>
                    <DoneIcon response={row.response} />
                  </StyledTableCell>
                  <StyledTableCell sx={{ ...stylesnew.view }}>
                    {row.view}
                  </StyledTableCell>
                  <StyledTableCell><Buttonsty reminder={row.reminder}/></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              count={Rowdata.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              sx={stylesnew.tablefooterc}
            />
          </Table>
        </Table1>
      </Box>
    </Outline>
  );
}

export default HomeTable;
