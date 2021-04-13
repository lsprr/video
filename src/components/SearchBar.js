import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <section className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="video-search">Video Search</label>
          <input
            type="text"
            id="video-search"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
