import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (
    <React.Fragment>

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Your Files"
        inputProps={{ 'aria-label': 'search files' }}
      />
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
      </React.Fragment>
  );
}