import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '../../components/Typography/Typography';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Overview from '../../components/Overview/Overview';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    display: 'grid',
    gridTemplateColumns: '640px 640px',
    gridGap: '10px'
  },
  container: {
    '& > *': {
      height: '100%'
    }
  }
});


function MyProfile(props) {
  const { classes } = props;

  

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        My Portfolio 
      </Typography>
      <div className={classes.images}>
         My Profile
      </div>
      <div>
        <Overview />
      </div>
    </Container>
  );
}

MyProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyProfile);
