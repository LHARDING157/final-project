import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipePage() {
  const [recipe, setRecipe] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getRecipe();
  }, []);

  async function getRecipe() {
    const API = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const res = await axios.get(API);
    setRecipe(res.data.meals[0]);
  }

  return (
    <div className="recipePage-container">
      <div className="recipePage">
        <img src={recipe.strMealThumb} alt="" />
        <h2>{recipe.strMeal}</h2>
        <div className="ingredients">
          <h3>Ingredients</h3>
          <p>
            {recipe.strIngredient1} {recipe.strMeasure1}
          </p>
          <p>
            {recipe.strIngredient2} {recipe.strMeasure2}
          </p>
          <p>
            {recipe.strIngredient3} {recipe.strMeasure3}
          </p>
          <p>
            {recipe.strIngredient4} {recipe.strMeasure4}
          </p>
          <p>
            {recipe.strIngredient5} {recipe.strMeasure5}
          </p>
          <p>
            {recipe.strIngredient6} {recipe.strMeasure6}
          </p>
          <p>
            {recipe.strIngredient7} {recipe.strMeasure7}
          </p>
          <p>
            {recipe.strIngredient8} {recipe.strMeasure8}
          </p>
          <p>
            {recipe.strIngredient9} {recipe.strMeasure9}
          </p>
          <p>
            {recipe.strIngredient10} {recipe.strMeasure10}
          </p>
          <p>
            {recipe.strIngredient11} {recipe.strMeasure11}
          </p>
          <p>
            {recipe.strIngredient12} {recipe.strMeasure12}
          </p>
          <p>
            {recipe.strIngredient13} {recipe.strMeasure13}
          </p>
          <p>
            {recipe.strIngredient14} {recipe.strMeasure14}
          </p>
          <p>
            {recipe.strIngredient15} {recipe.strMeasure15}
          </p>
          <p>
            {recipe.strIngredient16} {recipe.strMeasure16}
          </p>
          <p>
            {recipe.strIngredient17} {recipe.strMeasure17}
          </p>
          <p>
            {recipe.strIngredient18} {recipe.strMeasure18}
          </p>
          <p>
            {recipe.strIngredient19} {recipe.strMeasure19}
          </p>
          <p>
            {recipe.strIngredient20} {recipe.strMeasure20}
          </p>
        </div>
      </div>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}
