import { Link } from "react-router-dom";

export default function Recipes({
  handleChange,
  handleSubmit,
  recipes,
  handleFilter,
}) {
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
        <form className="categories">
          <select onChange={handleFilter}>
            <option value="all">All</option>
            <option value="beef">Beef</option>
            <option value="breakfast">Breakfast</option>
            <option value="chicken">Chicken</option>
            <option value="dessert">Dessert</option>
            <option value="goat">Goat</option>
            <option value="lamb">Lamb</option>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="pasta">Pasta</option>
            <option value="pork">Pork</option>
            <option value="seafood">Seafood</option>
            <option value="side">Sides</option>
            <option value="starter">Starters</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
          </select>
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
