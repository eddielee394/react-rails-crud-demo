import React,{Component} from "react";
import ItemContainer from "../Item/ItemContainer";

class Body extends Component {
  state = {
    isLoading: false
  };

  setLoading = () => {
    const { isLoading } = this.state;

    //check state is loading to avoid multiple requests
    // if (!isLoading) {
      this.setState(prevState => ({
        isLoading: !prevState.isLoading
      }));
    // }
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div className="body-container">
        <ItemContainer isLoading={isLoading} setLoading={this.setLoading} />
      </div>
    );
  }
}

export default Body;
