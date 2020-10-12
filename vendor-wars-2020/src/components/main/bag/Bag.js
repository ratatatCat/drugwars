import React, { useState } from 'react';

import { useTheme, makeStyles } from '@material-ui/core/styles';

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
  const theme = useTheme();

  return (
    <div className={classes.bag}>
      <h2>Bag Space: 75/100</h2>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th style={{ textAlign: 'left' }}>Item</th>
            <th style={{ textAlign: 'left' }}>Qty</th>
          </tr>
          <tr>
            <td>Concert T-Shirts</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Event Parking</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Water</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Fake Rolex</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Replica Rayban</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Bag;
