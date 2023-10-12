import React from "react";
import { Link } from "react-router-dom";
const Cocktail = (cocktail) => {
  const { id, name, info, img, glass } = cocktail;
  return (
    <article className="drink-container" key={id}>
      <div className="image-container">
        <img src={img} alt="img" />
      </div>
      <footer>
        <h3>{name}</h3>
        <h4>{info}</h4>
        <p>{glass}</p>
        <Link to={`/cocktail/${id}`}>
          <button className="detail-btn"> Detail</button>
        </Link>
      </footer>
    </article>
  );
};
export default Cocktail;
