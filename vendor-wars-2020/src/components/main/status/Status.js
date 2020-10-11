import React from 'react';

import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  status: {
    flex: '1',
  },
}));

function Status(props) {
  const classes = useStyles(props);
  const theme = useTheme();

  return (
    <div className={classes.status}>
      <p>Day: 14/60</p>
      <p>Cash: 400</p>
      <p>Debt: 5000</p>
      <p>Weapons:</p>
      <p>Armor:</p>
      <p>Crew:</p>
    </div>
  );
}

export default Status;
