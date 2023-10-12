import React from "react";

export default function NewsLetter() {
  return (
    <div className="newsletter-form-container">
      <h1>Our NewsLetter</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="lastname">Lastname</label>
        <input type="text" name="lastname" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <button className="newsletter-form-submit-btn">submit</button>
      </form>
    </div>
  );
}
