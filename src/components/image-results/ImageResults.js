// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";

// const styles = {
//   card: {
//     maxWidth: 500,
//     float: "left",
//     margin: "2px"
//   },
//   media: {
//     height: 100
//   }
// };

// function ImageResults(props) {

//   const { classes, images } = props;
//   return (
//     <React.Fragment>
//       {images.map(img => (

//       <Card key={img.id} className={classes.card}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image={img.largeImageURL}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               {img.user}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//       ))}
//     </React.Fragment>
//   );
// }

// ImageResults.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(ImageResults);

// IconButton.

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function ImageResults(props) {
  const { classes, images } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Search Result</ListSubheader>
        </GridListTile>
        {images.map(img => (
          <GridListTile key={img.id}>
            <img src={img.largeImageURL} alt="" />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageResults.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageResults);