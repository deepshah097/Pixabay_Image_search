import React, { Component } from 'react';
import './App.css';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';


export class App extends Component {
  render() {
    return(
      // <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
    //  </MuiThemeProvider>
    );
  }
}

export default withStyles(null)(App);
