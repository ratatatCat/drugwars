import React from 'react';
import { withFirebase } from '../../Firebase';

import Button from '@material-ui/core/Button';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonPrimary: {
    margin: '12px',
    background: theme.palette.primary.main,
  },
}));

function SignOutButton(props) {
  const classes = useStyles(props);
  const theme = useTheme();

  return (
    <div style={{ flex: '1' }}>
      <Button
        variant="contained"
        onClick={props.firebase.doSignOut}
        className={classes.buttonPrimary}
      >
        Sign Out
      </Button>
    </div>
  );
}

export default withFirebase(SignOutButton);
