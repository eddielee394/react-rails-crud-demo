import React from "react";
import PropTypes from "prop-types";
import ItemList from "../Item/ItemList";
import ItemCreate from "../Item/ItemCreate";

class Body extends React.Component {
  state = {
    items: [],
    isLoading: false
  };

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    this.setLoading();
    fetch("/api/v1/items.json")
      .then(response => response.json())
      .then(data => {
        this.setState({ items:  data, isLoading: false });
      });
  };

  setItemsState = item => {
    const { items } = this.state;
    this.setState({ items: [...items, item], isLoading: false });
  };

  setLoading = () => {
    const { isLoading } = this.state;

    //check state is loading to avoid multiple requests
    if (!isLoading) {
      this.setState(prevState => ({
        isLoading: !prevState.isLoading
      }));
    }
  };

  render() {
    const { items, isLoading } = this.state;
    //lets log out the items so we know what's being returned
    console.log("Items: ", items);

    return (
      <div>
        <ItemCreate
          setItemsState={this.setItemsState}
          setLoading={this.setLoading}
          isLoading={isLoading}
        />
        <ItemList items={items} />
      </div>
    );
  }
}

export default Body;
