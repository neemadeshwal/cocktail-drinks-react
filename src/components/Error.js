import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="error-page">
      <h1>Ohh!</h1>
      <p>We can't seem to find page you are looking for</p>
      <Link to="/">
        <button>Back to home</button>
      </Link>
    </div>
  );
}
