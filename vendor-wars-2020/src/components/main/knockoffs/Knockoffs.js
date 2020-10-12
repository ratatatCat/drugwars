import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  table: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  knockoffs: {
    flex: 1,
  },
}));

function Knockoffs(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.knockoffs}>
      <h2>Buy/Sell Prices:</h2>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell style={{ width: '200px' }}>Item</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Joakley Sunglasses</TableCell>
            <TableCell>5</TableCell>
            <TableCell>$15</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Chiefs Tickets - Upper Section</TableCell>
            <TableCell>3</TableCell>
            <TableCell>$75</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Chiefs Tickets - Lower Section</TableCell>
            <TableCell>5</TableCell>
            <TableCell>$200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Concert T-Shirts</TableCell>
            <TableCell>10</TableCell>
            <TableCell>$15</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Water</TableCell>
            <TableCell>20</TableCell>
            <TableCell>$5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Event Parking</TableCell>
            <TableCell>30</TableCell>
            <TableCell>$20</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Local Event Tickets</TableCell>
            <TableCell>5</TableCell>
            <TableCell>$20</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Louie Vuitton Replica</TableCell>
            <TableCell>3</TableCell>
            <TableCell>$20</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Fake Rolex</TableCell>
            <TableCell>2</TableCell>
            <TableCell>$50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Luxury Sneakers</TableCell>
            <TableCell>5</TableCell>
            <TableCell>$50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Replica Rayban</TableCell>
            <TableCell>5</TableCell>
            <TableCell>$30</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Knockoffs;
