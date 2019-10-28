import React from "react";
import "./Homepage-style.scss";

const Homepage = () => (
  <div className="homepage">
    <div className="directory">
      <div className="directory-item">
        <div className="content">
          <h1 className="title">'Lil Headcovers</h1>
          <span className="subtitle">Cover that fuzzy 'lil head</span>
        </div>
      </div>
      <div className="directory-item">
        <div className="content">
          <h1 className="title">Tummy Covers</h1>
          <span className="subtitle">Keep their belly warm</span>
        </div>
      </div>
      <div className="directory-item">
        <div className="content">
          <h1 className="title">Booties</h1>
          <span className="subtitle">Tiny little booties for feeties</span>
        </div>
      </div>
      <div className="directory-item">
        <div className="content">
          <h1 className="title">Cattos</h1>
          <span className="subtitle">Shop for Cattos!</span>
        </div>
      </div>
      <div className="directory-item">
        <div className="content">
          <h1 className="title">Doggos</h1>
          <span className="subtitle">Shop for Doggos!</span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
