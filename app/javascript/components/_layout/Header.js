import React from "react"

class Header extends React.Component {
  render () {
    return (
      <div style={styles.content}>
        <h2>This is the header component</h2>
      </div>
    );
  }
}
const styles = {
  content: {
    border: '1px solid #2196F3',
    padding: '15px',
    marginBottom: '10px'
  }
};

export default Header
