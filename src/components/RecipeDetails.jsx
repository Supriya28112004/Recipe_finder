
import React, { useState, useEffect } from 'react';
 import { useParams, Link } from 'react-router-dom';

export default function RecipeDetails() {
     const { recipeID } = useParams();
      const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`);
        const data = await response.json();
        if (data.meals && data.meals.length > 0) {
          setRecipe(data.meals[0]);
        } else {
          setRecipe(null);
        }
      } catch (error) {
        console.error('Error:', error);
        setRecipe(null);
      }
    };
    fetchData();
  }, [recipeID]);

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe?.[`strIngredient${i}`];
      const measure = recipe?.[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  if (!recipe) {
    return <p className="text-center text-orange-700 text-lg mt-10">Loading the  recipe...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 py-10">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-xl text-gray-800">
        <h2 className="text-3xl font-extrabold text-orange-700 mb-4 text-center">{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-1 h-auto rounded-xs mb-6 shadow-md" />
        <div className="text-base mb-4">
          <p className="mb-1"><span className="font-semibold text-gray-700">Category:</span> {recipe.strCategory}</p>
          <p><span className="font-semibold text-gray-700">Area:</span> {recipe.strArea}</p>
        </div>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-orange-600">🧂 Ingredients:</h3>
        <ul className="list-disc list-inside space-y-1 mb-6">
          {getIngredients().map((item, index) => (
            <li key={index}>{item.ingredient} - {item.measure}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold mb-2 text-orange-600">👩‍🍳 Instructions:</h3>
        <p className="text-justify leading-relaxed text-gray-700 whitespace-pre-line">{recipe.strInstructions}</p>

        <Link to="/" className="inline-block mt-6 text-orange-600 font-semibold hover:underline">
          ← Back to Search
        </Link>
      </div>
    </div>
  );
}
