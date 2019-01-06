import React from "react"
import PropTypes from "prop-types"
import Header from "./Header";
import Body from "./Body";

const styles = {
  content: {
    border: "2px solid #0041d4",
    padding: "25px",
    margin: "10px"
  }
};

class Main extends React.Component {

  render () {
    return (
      <div style={styles.content}>
        <h1>This is the Main layout component</h1>
        <Header/>
        <Body />
      </div>
    );
  }
}

Main.propTypes = {
  greeting: PropTypes.string
};
export default Main
