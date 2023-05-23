import { Link } from "react-router-dom";

export default function Recipes({ handleChange, handleSubmit, recipes }) {
  return (
    <div>
      <div className="wrap">
        <form className="search" onSubmit={handleSubmit}>
          <input
            className="searchTerm"
            onChange={handleChange}
            placeholder="Search Recipe"
          />
          <button className="searchButton" type="submit">
            🔍
          </button>
        </form>
      </div>
      <div className="recipe-container">
        {recipes.map(function (recipe, idx) {
          console.log(recipe);
          return (
            <Link
              className="recipeNames"
              key={idx}
              to={`/recipe/${recipe.idMeal}`}
            >
              <div className="recipe">
                <img src={recipe.strMealThumb} alt="" />
                <h2>{recipe.strMeal}</h2>
              </div>
            </Link>
          );
        })}
        {recipes.length === 0 && <h3>No results found</h3>}
      </div>
    </div>
  );
}
