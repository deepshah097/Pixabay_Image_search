import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};
function NavBar(props) {
  return (
    <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Pixabay Image Finder
            <button className="add-button">Add to home screen</button>
          </Typography>
        </Toolbar>
      </AppBar>
  );
}
export default withStyles(styles)(NavBar);
