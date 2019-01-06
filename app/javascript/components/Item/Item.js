import React from "react";

const styles = {
  content: {
    border: "1px solid #00d4c0",
    padding: "15px",
    margin: "10px"
  },
  subheader: {
    fontWeight: 700
  }
};

const Item = props => {
  const { item } = props;

  return (
    <div style={styles.content}>
      <h4>This is an Item component</h4>
      <p style={styles.subheader}>
        The data shown below is rendered via the rails API
      </p>
      <p>itemId {item.id}</p>
      <p>itemName {item.name}</p>
      <p>itemDescription {item.description}</p>
    </div>
  );
};

export default Item;
