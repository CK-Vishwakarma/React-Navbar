import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <ul
      className={click ? "dropdown-menu active" : "dropdown-menu"}
      onClick={handleClick}
    >
      {MenuItems.map((items, index) => {
        return (
          <li key={index}>
            <Link
              className={items.cname}
              to={items.path}
              onClick={() => {
                setClick(false);
              }}
            >
              {items.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
