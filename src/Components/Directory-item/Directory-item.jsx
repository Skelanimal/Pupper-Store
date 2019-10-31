import React from "react";
import { withRouter } from "react-router-dom";

import "./Dir-item-style.scss";

const DirectoryItem = ({
  title,
  imageUrl,
  subtitle,
  size,
  history,
  linkUrl,
  match
}) => (
  <div
    className={`${size} directory-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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

export default withRouter(DirectoryItem);
