import React from 'react';
import { TextField, Box } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   input: {
//     display: 'flex',
//   },
// });

function Filter({ setFind, find }) {
  // const classes = useStyles();

  function inputFindHendler({ target: { value } }) {
    setFind(value);
  }

  return (
    <form autoComplete="off">
      <Box display="flex" flexDirection="column">
        <TextField
          id="standard-basic"
          label="find contact by name"
          value={find}
          onChange={inputFindHendler}
          margin="dense"
        />
      </Box>
    </form>
  );
}

export default Filter;
