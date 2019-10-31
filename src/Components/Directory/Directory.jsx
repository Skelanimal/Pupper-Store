import React, { Component } from "react";
import DirectoryItem from "../Directory-item/Directory-item";

import "./Directory-style.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      categories: [
        {
          title: "'Lil Head Covers",
          imageUrl: "https://bit.ly/2MVl76s",
          subtitle: "Cover that fuzzy 'lil head",
          linkUrl: "hats"
        },
        {
          title: "Tummy Warmers",
          imageUrl: "https://bit.ly/2MTvzeG",
          subtitle: "Keep the belly warm",
          linkUrl: ""
        },
        {
          title: "Booties",
          imageUrl: "https://bit.ly/2q400pe",
          subtitle: "For little feeties",
          linkUrl: ""
        },
        {
          title: "Kittos",
          imageUrl: "https://bit.ly/2MSF4uz",
          subtitle: "Shop for the Kittos",
          size: "large",
          linkUrl: ""
        },
        {
          title: "Doggos",
          imageUrl: "https://bit.ly/2WnGeS3",
          subtitle: "Shop for the Doggos",
          size: "large",
          linkUrl: ""
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory">
        {this.state.categories.map(({ ...categoriesProps }) => (
          <DirectoryItem key={categoriesProps.title} {...categoriesProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
