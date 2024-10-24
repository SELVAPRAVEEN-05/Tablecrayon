import React, { useState } from "react";
import Table from "@mui/material/Table";
import { Box, TablePagination } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import photo from "../../assets/image1.jpg";
import { stylesnew } from "../../Pages/Style";
import {
  StyledTableCell,
  StyledTableRow,
  DoneIcon,
  Signalcolour,
} from "../../Pages/Style";
import Buttonsty from "../Button/Button";
function Tablesty() {
  const Rowdata = [
    {
      id: "1",
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
      id: "1",
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
      id: "1",
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
      id: "1",
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
    <Table>
      <TableHead>
        <TableRow>
          {Column.map((column) => (
            <StyledTableCell key={column.id}>{column.Header}</StyledTableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {Rowdata.map((row) => (
          <StyledTableRow key={row.id}>
            <StyledTableCell>{row.date}</StyledTableCell>
            <StyledTableCell sx={stylesnew.flex}>
              <Avatar src={row.nameprofile} sx={stylesnew.photo} />
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
            <StyledTableCell>
              <Buttonsty reminder={row.reminder} />
            </StyledTableCell>
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
  );
}

export default Tablesty;
