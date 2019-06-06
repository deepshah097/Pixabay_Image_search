import React, { Component } from "react";

export default class HomeScreen extends Component {
  addScript = () => {
    let deferredPrompt;

    window.addEventListener("beforeinstallprompt", e => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      document.querySelector(".add-button").style.display = "block";
    });
    document.querySelector(".add-button").addEventListener("click", e => {
      // hide our user interface that shows our A2HS button
      console.log("hellllloooo");
      document.querySelector(".add-button").style.display = "none";
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        deferredPrompt = null;
      });
    });
  };
  render() {
    return (
      <div>
        <button className="add-button" onClick={this.addScript}>
          Add to home screen
        </button>
      </div>
    );
  }
}
