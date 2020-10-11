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
      <p>
        <b>Day:</b> 1/60
      </p>
      <p>
        <b>Cash:</b> 400
      </p>
      <p>
        <b>Debt:</b> 5000
      </p>
      <p>
        <b>Prestige:</b> 1/100
      </p>
      <p>
        <b>Crew:</b> 0
      </p>
      <p>
        <b>Wanted Level:</b> 0
      </p>
    </div>
  );
}

export default Status;
