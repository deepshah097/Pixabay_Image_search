import React, { Component } from "react";
import "./App.css";
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles } from "@material-ui/core/styles";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";

export class App extends Component {
  render() {
    return (
      // <MuiThemeProvider>
      <div>
        {/* <NavBar /> */}
        {/* <Search /> */}
        <button id="btn-deep">MDP</button>
        <div id="div-gotit">
          <label>
            You have already installed the app go to crome setting and open the
            app
          </label>
          <button id="btn-gotit">Got it</button>
        </div>
      </div>
      //  </MuiThemeProvider>
    );
  }
}

export default withStyles(null)(App);
