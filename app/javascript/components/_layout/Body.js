import React from "react";
import PropTypes from "prop-types";
import ItemList from "../Item/ItemList";

class Body extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    console.log("component mounted");
    fetch("/api/v1/items.json")
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }

  render() {
    const { items } = this.state;
    //lets log out the items so we know what's being returned
    console.log("Items: ", items);

    return (
      <React.Fragment>
        <div>
          <ItemList items={items} />
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
