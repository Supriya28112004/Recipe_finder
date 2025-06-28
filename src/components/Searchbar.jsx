import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';

export default function Searchbar() {
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setQuery(text);
  };

  useEffect(() => {
    if (!query.trim()) return;
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const json = await res.json();
        setData(json.meals || []);
      } catch (err) {
        console.error('Error fetching recipes:', err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [query]);

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSearch} className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md flex gap-4 mb-8">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border-2 border-orange-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder-orange-400"
          placeholder="Search for a recipe..."
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Search
        </button>
      </form>
      <RecipeList recipes={data} loading={loading} />
    </div>
  );
}
