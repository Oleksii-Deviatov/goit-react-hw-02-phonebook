import React from 'react';
import {
  Card,
  CardContent,
  IconButton,
  Box,
  CardActionArea,
} from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  listItem: {
    '&:not(:last-child)': {
      marginBottom: 10,
    },
  },
});

function Conact({ id, name, number, delContact }) {
  const classes = useStyles();

  return (
    <li className={classes.listItem}>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <p>
                {name}: {number}
              </p>
              <IconButton
                color="primary"
                component="span"
                onClick={() => delContact(id)}
              >
                <DeleteForeverTwoToneIcon />
              </IconButton>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </li>
  );
}

export default Conact;
