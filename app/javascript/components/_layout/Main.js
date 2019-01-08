import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";

class Main extends Component {
  render() {
    return (
      <div style={styles.content}>
        <h1>This is the Main layout component</h1>
        <Header />
        <Body />
      </div>
    );
  }
}

const styles = {
  content: {
    border: "2px solid #0041d4",
    padding: "25px",
    margin: "10px"
  }
};

export default Main;
