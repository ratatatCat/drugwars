import React from 'react';

import { useTheme, makeStyles } from '@material-ui/core/styles';

import SunnyDay from '../../../images/sunnyday.jpg';

const useStyles = makeStyles((theme) => ({
  photo: {
    height: '200px',
    width: '200px',
    marginTop: '20px',
  },
  status: {
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

function Status(props) {
  const classes = useStyles(props);
  const theme = useTheme();

  return (
    <div className={classes.status}>
      <div style={{ flex: '1' }}>
        <p>
          <b>Day:</b> {props.dayNum}/60
        </p>
        <p>
          <b>Cash:</b> 200
        </p>
        <p>
          <b>Debt:</b> 0
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
        <p>
          <b>Weather:</b> Sunny
        </p>
      </div>
      <div style={{ flex: '1' }}>
        <img
          className={classes.photo}
          src={SunnyDay}
          alt="Sunny Day"
        />
      </div>
    </div>
  );
}

export default Status;
