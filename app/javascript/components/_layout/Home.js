import React from "react"
import PropTypes from "prop-types"
class Home extends React.Component {
  render () {
    console.log(this.props);
    return (
      <React.Fragment>
        title: {this.props.title}
        body: {this.props.body}
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  greeting: PropTypes.string
};
export default Home
