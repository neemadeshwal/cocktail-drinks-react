import React from "react";

const searchDrink = "www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("a");
  const [cocktail, setCocktail] = React.useState([]);

  const fetchDrink = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        setLoading(false);
        const newCocktails = drinks.map((drink) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass
          } = drink;
          return {
            id: idDrink,
            name: strDrink,
            img: strDrinkThumb,
            type: strAlcoholic,
            glass: strGlass
          };
        });
        setCocktail(newCocktails);
      } else {
        setCocktail([]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }, [searchTerm]);

  React.useEffect(() => {
    fetchDrink();
  }, [searchTerm, fetchDrink]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setSearchTerm,
        cocktail,
        searchTerm
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { useGlobalContext, AppProvider };
