import React from "react";
import { useGlobalContext } from "../context";

const Form = () => {
  const { setSearchTerm, searchTerm } = useGlobalContext();

  const searchValue = React.useRef("");
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="drink-form-container">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" ref={searchValue} />
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
