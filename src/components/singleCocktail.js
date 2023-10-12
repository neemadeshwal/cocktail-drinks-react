import React from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";

export default function SingleCocktail() {
  const lookForDetails =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${lookForDetails}${id}`);
        const data = await response.json();
        // console.log(data.drinks[0]);
        if (data.drinks) {
          const details = data.drinks[0];
          const {
            idDrink: id,
            strDrink: name,
            strCategory: type,
            strDrinkThumb: image,
            strGlass: glass,
            strAlcoholic: info,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          } = details;
          const Ingredient = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          ];
          const newCocktail = {
            id,
            name,
            image,
            type,
            Ingredient,
            glass,
            info,
            instructions
          };
          setCocktail(newCocktail);
          // setCocktail({drink:details.strDrink})
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2>No cocktail to display</h2>;
  }
  return (
    <div className="single-container">
      <Link to="/">
        <button className="back-to-home-btn">Back to home</button>
      </Link>
      <h2>{cocktail.name}</h2>
      <div className="cocktails-details">
        <div className="s-image-container">
          <img src={cocktail.image} alt={cocktail.name} />
        </div>
        <div className="s-cocktail-info">
          <p>
            {" "}
            <span className="s-info">name:</span>
            {cocktail.name}
          </p>
          <p>
            {" "}
            <span className="s-info">type:</span>
            {cocktail.type}
          </p>
          <p>
            {" "}
            <span className="s-info">glass:</span>
            {cocktail.glass}
          </p>
          <p>
            {" "}
            <span className="s-info">info:</span>
            {cocktail.info}
          </p>
          <p>
            {" "}
            <span className="s-info">Ingredient:</span>
            {cocktail.Ingredient.join(",")}
          </p>
          <p>
            {" "}
            <span className="s-info">Instructions:</span>
            {cocktail.instructions}
          </p>
        </div>
      </div>
    </div>
  );
}
