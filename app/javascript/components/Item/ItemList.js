import React, { Component } from "react";
import Item from "./Item";
const styles = {
  content: {
    border: '1px solid #00BCD4',
    padding: '15px'
  }
};

class ItemList extends Component {
  render() {
    const { items } = this.props;
    return (
      <div style={styles.content}>
        <h3>This is an ItemList component</h3>
        {items.map(item => (
          <div key={item.id}>
            <Item item={item} />
          </div>
        ))}
      </div>
    );
  }
}

export default ItemList;
