import React from "react";
import "../css/FloatingIcons.css";
import {
  FaLeaf,
  FaSeedling,
  FaSpa,
  FaPagelines,
  FaTree,
  FaTint,
  FaSun,
  FaAppleAlt
} from "react-icons/fa";

const icons = [
  { icon: <FaLeaf />, className: "icon1" },
  { icon: <FaSeedling />, className: "icon2" },
  { icon: <FaSpa />, className: "icon3" },
  { icon: <FaPagelines />, className: "icon4" },
  { icon: <FaTree />, className: "icon5" },
  { icon: <FaTint />, className: "icon6" },
  { icon: <FaSun />, className: "icon7" },
  { icon: <FaAppleAlt />, className: "icon8" }
];

const FloatingIcons = () => {
  return (
    <div className="orbit-wrapper">
      <div className="orbit-container">
        {icons.map((item, index) => (
          <div key={index} className={`orbit-icon ${item.className}`}>
            {item.icon}
          </div>
        ))}

        <div className="center-brand">
          <h2>The Bloom</h2>
          <p>Nature in Motion</p>
        </div>
      </div>
    </div>
  );
};

export default FloatingIcons;