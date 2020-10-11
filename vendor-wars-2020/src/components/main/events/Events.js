import React from 'react';
import Ticker from 'react-ticker';

import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  events: {
    flex: 1,
  },
  ticker: {
    width: '100%',
  },
}));

function Events(props) {
  const classes = useStyles(props);
  const theme = useTheme();

  return (
    <div className={classes.events}>
      <h2>Daily Events</h2>
      <Ticker mode="smooth" className={classes.ticker}>
        {() => (
          <>
            <p>
              Saturday, October 4, 2020: Chiefs game today! There will
              be more cops on the streets and tickets will sell for
              more.
            </p>
          </>
        )}
      </Ticker>
    </div>
  );
}

export default Events;
