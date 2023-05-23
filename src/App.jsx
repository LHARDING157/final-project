import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Recipes from "./pages/Recipes";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RecipePage from "./pages/RecipePage";
import Home from "./pages/Home";

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
    getRecipes();
  }

  async function getRecipes() {
    try {
      const API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
      const res = await axios.get(API);
      if (res.data.meals) {
        setRecipes(res.data.meals);
      } else {
        setRecipes([]);
      }
      console.log(res.data.meals);
    } catch (error) {
      console.log(error);
      setRecipes([]);
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="navhead">
          <h1 className="title">RandomFoods</h1>
          <Link className="nav" to="/">
            Home
          </Link>
          <Link className="nav" to="/Recipes">
            Recipes
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
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
