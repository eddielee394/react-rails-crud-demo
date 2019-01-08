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
      <div style={styles.content}>
        <h3>This is an ItemList component</h3>
        <ItemCreate handleCreateItem={handleCreateItem} isLoading={isLoading} />
        {items.map(item => (
          <div key={item.id}>
            <Item
              item={item}
              handleDeleteItem={handleDeleteItem}
              isLoading={isLoading}
            />
            <ItemUpdate
              item={item}
              handleUpdateItem={handleUpdateItem}
              isLoading={isLoading}
            />
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
