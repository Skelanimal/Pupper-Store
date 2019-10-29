import React from "react";
import "./Dir-item-style.scss";

const DirectoryItem = ({ title, imageUrl, subtitle, size }) => (
  <div className={`${size} directory-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
);

export default DirectoryItem;
