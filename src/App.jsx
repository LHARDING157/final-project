import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Recipes from "./pages/Recipes";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RecipePage from "./pages/RecipePage";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  async function getRecipes() {
    try {
      const API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
      const res = await axios.get(API);
      setRecipes(res.data.meals);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setRecipes(
        "https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png.webp"
      );
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="title">RandomFoods</h1>
        <Link to="/">Home</Link>
        <Link to="/Recipes">Recipes</Link>
        <Routes>
          <Route
            path="/Recipes"
            element={
              <Recipes
                recipes={recipes}
                getRecipes={getRecipes}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route path="/Recipe/:id" element={<RecipePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
