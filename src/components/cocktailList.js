import React from "react";
import Cocktail from "./cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

export default function CocktailList() {
  const { cocktail, loading } = useGlobalContext();
  console.log(cocktail);
  if (loading) {
    return <Loading />;
  }
  if (cocktail.length < 1) {
    return (
      <h2 className="section-title">
        No cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className="section">
      <div className="drinks">
        {cocktail.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
