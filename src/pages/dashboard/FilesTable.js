import * as React from "react";
import Title from './Title';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
function createData(name, type) {
  return { name, type };
}

const rows = [
  createData("Frozen yoghurt", ".pdf"),
  createData("Ice cream sandwich", ".doc"),
  createData("Eclair", ".xls"),
];

export default function BasicTable() {
  const handleDelete = (name) => {
    alert(`Deleting ${name}`);
  };

  const handleDownload = (name) => {
    alert(`Downloading ${name}`);
  };

  return (
    <React.Fragment>
      <Title>Your Files</Title>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">File type</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={() => handleDelete(row.name)}
                  aria-label="delete"
                >
                  <DeleteIcon fontSize="small" color="error" />
                </IconButton>
                <IconButton
                  onClick={() => handleDownload(row.name)}
                  aria-label="download"
                >
                  <CloudDownloadIcon fontSize="small" color="primary" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </React.Fragment>
  );
}
