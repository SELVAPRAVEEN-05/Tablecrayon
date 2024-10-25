import React, { useState } from "react";
import Table from "@mui/material/Table";
import { Box, TablePagination } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import photo from "../../assets/image1.jpg";
import { stylesnew } from "./Style";
import {
  StyledTableCell,
  StyledTableRow,
  DoneIcon,
  Signalcolour,
} from "./Style";
import Buttonsty from "../Button/Button";

function Tablesty({ searchQuery }) {
  const Rowdata = [
    {
      id: "1",
      date: "31 Jan 2023, 01:30 PM",
      nameprofile: photo,
      name: "Samuel Guerrero",
      signal: "Communication",
      performance: "Excellent",
      response: "yes",
      view: "View",
      reminder: "Add",
    },
    {
      id: "2",
      date: "31 Jan 2023, 02:00 PM",
      nameprofile: photo,
      name: "Maria Lopez",
      signal: "Teamwork",
      performance: "Very Good",
      response: "yes",
      view: "View",
      reminder: "Added",
    },
    {
      id: "3",
      date: "31 Jan 2023, 03:30 PM",
      nameprofile: photo,
      name: "John Doe",
      signal: "Leadership",
      performance: "Need Improvement",
      response: "no",
      view: "View",
      reminder: "Add",
    },
    {
      id: "4",
      date: "31 Jan 2023, 01:30 PM",
      nameprofile: photo,
      name: "George Fernandes",
      signal: "Communication",
      performance: "Average",
      response: "yes",
      view: "View",
      reminder: "Add",
    },
    {
      id: "5",
      date: "31 Jan 2023, 02:00 PM",
      nameprofile: photo,
      name: "Maria Lopez",
      signal: "Teamwork",
      performance: "Very Good",
      response: "yes",
      view: "View",
      reminder: "Added",
    },
    {
      id: "6",
      date: "31 Jan 2023, 03:30 PM",
      nameprofile: photo,
      name: "John Doe",
      signal: "Leadership",
      performance: "Need Improvement",
      response: "no",
      view: "View",
      reminder: "Add",
    },
    {
      id: "7",
      date: "31 Jan 2023, 01:30 PM",
      nameprofile: photo,
      name: "George Fernandes",
      signal: "Communication",
      performance: "Excellent",
      response: "yes",
      view: "View",
      reminder: "Added",
    },
    {
      id: "8",
      date: "31 Jan 2023, 02:00 PM",
      nameprofile: photo,
      name: "Maria Lopez",
      signal: "Teamwork",
      performance: "Very Good",
      response: "yes",
      view: "View",
      reminder: "Added",
    },
    {
      id: "9",
      date: "31 Jan 2023, 03:30 PM",
      nameprofile: photo,
      name: "John Doe",
      signal: "Leadership",
      performance: "Need Improvement",
      response: "no",
      view: "View",
      reminder: "Add",
    },
    {
      id: "10",
      date: "31 Jan 2023, 01:30 PM",
      nameprofile: photo,
      name: "George Fernandes",
      signal: "Communication",
      performance: "Excellent",
      response: "yes",
      view: "View",
      reminder: "Add",
    },
    {
      id: "11",
      date: "31 Jan 2023, 01:30 PM",
      nameprofile: photo,
      name: "George Fernandes",
      signal: "Communication",
      performance: "Excellent",
      response: "yes",
      view: "View",
      reminder: "Add",
    },
    {
      id: "12",
      date: "31 Jan 2023, 01:30 PM",
      nameprofile: photo,
      name: "George Fernandes",
      signal: "Communication",
      performance: "Excellent",
      response: "yes",
      view: "View",
      reminder: "Add",
    },
  ];

  const Column = [
    {
      id: "1",
      Header: "Date",
    },
    {
      id: "2",
      Header: "To",
    },
    {
      id: "3",
      Header: "Signal",
    },
    {
      id: "4",
      Header: "Performance",
    },
    {
      id: "5",
      Header: "Response",
    },
    {
      id: "6",
      Header: "Feedback",
    },
    {
      id: "7",
      Header: "Reminder",
    },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredRows = Rowdata.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentPageRows = filteredRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box>
      <Box sx={stylesnew.out}>
        <Table>
          <TableHead>
            <TableRow>
              {Column.map((column) => (
                <StyledTableCell key={column.id} align={column.Header}>
                  {column.Header}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageRows.map((row) => (
              <StyledTableRow  key={row.id}>
                <StyledTableCell>{row.date}</StyledTableCell>
                <StyledTableCell>
                  <Box sx={stylesnew.flex}>
                    <Avatar src={row.nameprofile} sx={stylesnew.photo} />
                    {row.name}
                  </Box>
                </StyledTableCell>
                <StyledTableCell>{row.signal}</StyledTableCell>
                <StyledTableCell>
                  <Box sx={stylesnew.flex}>
                    <Signalcolour performance={row.performance} />
                    {row.performance}
                  </Box>
                </StyledTableCell>
                <StyledTableCell>
                  <Box sx={stylesnew.center}>
                    <DoneIcon response={row.response} />
                  </Box>
                </StyledTableCell>
                <StyledTableCell sx={{ ...stylesnew.view }}>
                  {row.view}
                </StyledTableCell>
                <StyledTableCell>
                  <Box sx={stylesnew.center}>
                    <Buttonsty reminder={row.reminder} />
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={stylesnew.tablefooterc}
      />
    </Box>
  );
}

export default Tablesty;
