import React, { useState } from 'react';

import { useTheme, makeStyles } from '@material-ui/core/styles';

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
  const theme = useTheme();

  return (
    <div className={classes.knockoffs}>
      <h2>Sell Prices:</h2>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th />
            <th style={{ textAlign: 'left' }}>Item</th>
            <th style={{ textAlign: 'left' }}>Price</th>
          </tr>
          <tr>
            <td></td>
            <td>Joakley Sunglasses</td>
            <td>$15</td>
          </tr>
          <tr>
            <td></td>
            <td>Chiefs Tickets - Upper Section</td>
            <td>$75</td>
          </tr>
          <tr>
            <td></td>
            <td>Chiefs Tickets - Lower Section</td>
            <td>$200</td>
          </tr>
          <tr>
            <td></td>
            <td>Concert T-Shirts</td>
            <td>$15</td>
          </tr>
          <tr>
            <td></td>
            <td>Water</td>
            <td>$5</td>
          </tr>
          <tr>
            <td></td>
            <td>Event Parking</td>
            <td>$20</td>
          </tr>
          <tr>
            <td></td>
            <td>Local Event Tickets</td>
            <td>$20</td>
          </tr>
          <tr>
            <td></td>
            <td>Louie Vuitton Replica</td>
            <td>$20</td>
          </tr>
          <tr>
            <td></td>
            <td>Fake Rolex</td>
            <td>$50</td>
          </tr>
          <tr>
            <td></td>
            <td>Luxury Sneakers</td>
            <td>$50</td>
          </tr>
          <tr>
            <td></td>
            <td>Replica Rayban</td>
            <td>$30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Knockoffs;
