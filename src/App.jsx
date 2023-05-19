import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
// import LoginButton from "./components/Login";
// import LogoutButton from "./components/Logout";
// import Profile from "./components/Profile";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    getRecipe();
  }, []);

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  async function getRecipe() {
    try {
      const API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
      const res = await axios.get(API);
      setRecipe(res.data.meals);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1 className="title">Recipes</h1>
      {/* <LoginButton />
      <LogoutButton />
      <Profile /> */}
      <div className="wrap">
        <form className="search" onSubmit={handleSubmit}>
          <input
            className="searchTerm"
            onChange={handleChange}
            placeholder="Search Recipe"
          />
          <button className="searchButton" onClick={getRecipe}>
            🔍
          </button>
        </form>
      </div>
      <div className="recipe-container">
        {recipes.map(function (recipe) {
          console.log(recipe);
          return (
            <div className="recipe">
              <img src={recipe.strMealThumb} alt="" />
              <h2>{recipe.strMeal}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
