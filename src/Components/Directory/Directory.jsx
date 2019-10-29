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
          subtitle: "Cover that fuzzy 'lil head"
        },
        {
          title: "Tummy Warmers",
          imageUrl: "https://bit.ly/2MTvzeG",
          subtitle: "Keep the belly warm"
        },
        {
          title: "Booties",
          imageUrl: "https://bit.ly/2q400pe",
          subtitle: "For little feeties"
        },
        {
          title: "Kittos",
          imageUrl: "https://bit.ly/2MSF4uz",
          subtitle: "Shop for the Kittos",
          size: "large"
        },
        {
          title: "Doggos",
          imageUrl: "https://bit.ly/2WnGeS3",
          subtitle: "Shop for the Doggos",
          size: "large"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory">
        {this.state.categories.map(({ title, imageUrl, subtitle, size }) => (
          <DirectoryItem
            key={title}
            title={title}
            imageUrl={imageUrl}
            subtitle={subtitle}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
