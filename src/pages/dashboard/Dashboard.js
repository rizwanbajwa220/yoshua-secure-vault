import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FilesTable from "./FilesTable";
import SearchBar from "./SearchBar";
import InputFileUpload from "./FileUpload";

export default function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 40,
              borderRadius: 20,
            }}
          >
            <InputFileUpload/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              height: 40,
              borderRadius: 20,
              pl:2,
              pr:1
            }}
          >
            <SearchBar/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <FilesTable />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
