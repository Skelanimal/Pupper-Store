import React, { Component } from "react";
import itemData from "./itemData";
import AllItems from "../../components/shopAll/ShopAll";

class ShopAll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: itemData
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <AllItems key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopAll;
