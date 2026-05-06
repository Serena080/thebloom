import React, { useState, useEffect } from "react";
import "../css/Searchbar.css";

const Searchbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  // handle input change
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // debounce search (wait 400ms after typing)
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (onSearch) {
        onSearch(search);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [search, onSearch]);

  return (
    <div className="group">
      {/* Search Icon */}
      <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
        <g>
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
      </svg>

      {/* Input */}
      <input
        placeholder="Search..."
        type="search"
        className="input"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default Searchbar;