import React, { Component } from "react";
import Item from "./Item";
import ItemCreate from "./ItemCreate";
import ItemUpdate from "./ItemUpdate";

class ItemList extends Component {
  render() {
    const {
      items,
      handleDeleteItem,
      handleCreateItem,
      handleUpdateItem,
      isLoading
    } = this.props;

    return (
      <div className="container-fluid" style={styles.content}>
        <h3>This is an ItemList component</h3>
        <div className="row">
          <div className="col-12">
            <ItemCreate
              handleCreateItem={handleCreateItem}
              isLoading={isLoading}
            />
          </div>
        </div>
        {items.map(item => (
          <div className="row" key={item.id}>
            <div className="col-12 col-md-6">
              <Item
                item={item}
                handleDeleteItem={handleDeleteItem}
                isLoading={isLoading}
              />
            </div>
            <div className="col-12 col-md-6">
              <ItemUpdate
                item={item}
                handleUpdateItem={handleUpdateItem}
                isLoading={isLoading}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const styles = {
  content: {
    border: "1px solid #673ab7",
    padding: "15px"
  }
};

export default ItemList;
