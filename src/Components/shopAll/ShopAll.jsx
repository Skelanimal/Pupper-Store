import React from "react";

import CollectionItem from "../collection-item/collection-item";

import "./ShopAll-style.scss";

const AllItems = ({ title, items }) => (
  <div className="all-items">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.map(({ id, ...otherItemProps }) => (
        <CollectionItem key={id} {...otherItemProps} />
      ))}
    </div>
  </div>
);

export default AllItems;
