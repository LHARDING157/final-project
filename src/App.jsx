import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Recipes from "./pages/Recipes";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RecipePage from "./pages/RecipePage";
import Home from "./pages/Home";
import About from "./pages/About";

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

  async function handleFilter(event) {
    if (event.target.value == "all") {
      getRecipes();
    } else {
      const API = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${event.target.value}`;
      const res = await axios.get(API);
      setRecipes(res.data.meals);
    }
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
          <Link className="nav" to="/">
            <h1 className="title">RandomFoods</h1>
          </Link>
          <Link className="nav" to="/">
            Home
          </Link>
          <Link className="nav" to="/Recipes">
            Recipes
          </Link>
          <Link className="nav" to="/About">
            About
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
                handleFilter={handleFilter}
              />
            }
          />
          <Route path="/Recipe/:id" element={<RecipePage />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <div class="footerWrap">
          <div class="footer">
            <div class="footerContent">
              <p className="footer">&#169; Luke Harding</p>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
