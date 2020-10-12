import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  bag: {
    flex: 1,
  },
  table: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

function Bag(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.bag}>
      <h2>Bag Space: 75/100</h2>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Item</TableCell>
            <TableCell>Qty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell />
            <TableCell>Concert T-Shirts</TableCell>
            <TableCell>30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>Event Parking</TableCell>
            <TableCell>10</TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>Water</TableCell>
            <TableCell>20</TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>Fake Rolex</TableCell>
            <TableCell>10</TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>Replica Rayban</TableCell>
            <TableCell>5</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Bag;
