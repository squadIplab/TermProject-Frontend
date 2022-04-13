import React from "react";
import { useState } from "react";
import "./FeatureButton.css";
const Featurebutton = ({ feature, handler }) => {
  const [imageOptions, setImageOptions] = useState({});
  const handleClick = () => {
    handler(feature.api, imageOptions);
  };
  const handleChange = (e) => {
    setImageOptions((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="feature-button-root">
      {feature.options.map((option, i) => {
        return (
          <div key={i} className="feature-button-inputs">
            <input
              type="text"
              name={option}
              value={imageOptions[option] || ""}
              placeholder={option}
              onChange={handleChange}
            />
          </div>
        );
      })}
      <button className="feature-btn" onClick={handleClick}>
        {feature.name}
      </button>
    </div>
  );
};

export default Featurebutton;
