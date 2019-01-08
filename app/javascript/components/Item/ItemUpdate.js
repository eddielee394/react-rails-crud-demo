import React, { Component } from "react";

class ItemUpdate extends Component {
  state = {
    item: this.props.item,
    showForm: false
  };

  setShowFormState = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
  };

  handleItemSubmit = e => {
    e.preventDefault();
    const { item } = this.state;
    this.props.handleUpdateItem(item, this.handleFormReset);
  };

  handleShowForm = e => {
    e.preventDefault();
    this.setShowFormState();
  };

  handleInputChange = e => {
    const { item } = this.state;
    const { name, value } = e.target;
    this.setState({
      item: {
        ...item,
        [name]: value
      }
    });
  };

  handleFormReset = () => {
    this.setState({
      item: {
        name: "",
        description: ""
      }
    });
  };

  render() {
    const { item, showForm } = this.state;

    const btnIsDisabled = this.props.isLoading ? "disabled" : "";
    const formBtnText = showForm ? "Hide Edit Item Form" : "Show Edit Item Form";

    const itemUpdateForm = showForm && (
      <form onSubmit={this.handleItemSubmit} method="PUT">
        <input
          name="name"
          value={item.name}
          onChange={this.handleInputChange}
          placeholder="Enter item name"
        />
        <input
          name="description"
          value={item.description}
          onChange={this.handleInputChange}
          placeholder="Enter item description"
        />
        <button type="submit" disabled={btnIsDisabled}>
          Submit
        </button>
      </form>
    );

    return (
      <div className="item-create-container" style={styles.content}>
        <h3>This is the ItemUpdate component</h3>
        <div
          className="item-showform-button-container"
          style={styles.formButtonContainer}
        >
          <button onClick={this.handleShowForm}>{formBtnText}</button>
        </div>
        <div
          className="item-create-form-container"
          style={styles.formContainer}
        >
          {itemUpdateForm}
        </div>
      </div>
    );
  }
}

const styles = {
  content: {
    border: "1px solid #ffc107",
    padding: "15px",
    margin: "10px"
  },
  formButtonContainer: {
    display: "inline-block",
    marginRight: "10px"
  },
  formContainer: {
    display: "inline-block"
  }
};

export default ItemUpdate;
