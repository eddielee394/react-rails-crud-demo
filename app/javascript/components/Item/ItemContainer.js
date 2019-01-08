import React, { Component } from "react";

import ItemList from "./ItemList";
import ItemCreate from "./ItemCreate";

class ItemContainer extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    this.props.setLoading();

    fetch("/api/v1/items.json")
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data });
      })
      .then(() => this.props.setLoading());
  };

  createItem = (item, callback) => {
    let body = JSON.stringify({ item });

    this.props.setLoading();

    fetch("http://localhost:3001/api/v1/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(response => response.json())
      .then(response => this.createItemsState(response))
      .then(() => callback())
      .then(() => this.props.setLoading())
      .catch(error => console.log("Error adding item", error));
  };

  updateItem = (item, callback) => {
    let body = JSON.stringify({ item });

    this.props.setLoading();

    fetch(`http://localhost:3001/api/v1/items/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(response => response.json())
      .then(response => this.updateItemsState(response))
      .then(() => callback())
      .then(() => this.props.setLoading())
      .catch(error => console.log("Error updating item", error));
  };

  deleteItem = (id, callback) => {
    this.props.setLoading();

    fetch(`http://localhost:3001/api/v1/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(() => this.deleteItemsState(id))
      .then(() => callback())
      .then(() => this.props.setLoading())
      .catch(error => console.log("Error deleting item", error));
  };

  createItemsState = item => {
    const { items } = this.state;
    this.setState({ items: [...items, item] });
  };

  updateItemsState = item => {
    this.setState(prevState => {
      const updatedItems = prevState.items.map(_item => {
        if (_item.id === item.id) {
          return { ..._item, ...item };
        } else {
          return _item;
        }
      });

      return { items: updatedItems };
    });
  };

  deleteItemsState = id => {
    const { items } = this.state;
    const updatedItems = items.filter(item => item.id !== id);
    return this.setState({
      items: updatedItems
    });
  };

  render() {
    const { items } = this.state;
    const { isLoading, setLoading } = this.props;

    //lets log out the items so we know what's being returned
    console.log("Items: ", items);

    return (
      <div>
        <ItemList
          items={items}
          handleCreateItem={this.createItem}
          handleUpdateItem={this.updateItem}
          handleDeleteItem={this.deleteItem}
          isLoading={isLoading}
        />
      </div>
    );
  }
}

export default ItemContainer;
