// // import React, { useState,useEffect } from 'react';
// // import RecipeList from "./RecipeList.jsx";

// // export default function Searchbar() {
// //   const [text, setText] = useState("");
// //   const[data,setData]=useState([]);
// //   const[query,setQuery]=useState("")
// //   const [loading,setLoading]=useState(false);

// //   const handletext =async () => {
// //     if(!text.trim())
// //       return;
// //     setQuery(text);
// //    // console.log("enter the food item", text);
// //   };
// //   useEffect(()=>
// //   {
// //     if(!query.trim())
// //       return;
// //     const fetchdata=async()=>
// //     {
// //       setLoading(true);
// //       try{
// //         const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
// //         // if (!response.ok) throw new Error("API response not ok");
// //         const json= await response.json();
// //         setData(json.meals||[]);
    
// //       }
// //       catch(error)
// //       {
// //         console.error("Error fetching data",error);
// //         setData([]);
// //       }
// //       setLoading(false);

// //     };
// //     fetchdata();
// //   },[query]);
    
// //   return (
// //     <div className="flex justify-center items-center h-screen bg-gray-100">
// //       <form onSubmit={(e) => {
// //           e.preventDefault();
// //           handletext();
// //         }}
// //       className="bg-white p-6 rounded shadow-md flex gap-4">
// //         <input
// //           type="text"
// //           value={text}
// //           onChange={(e) => setText(e.target.value)}
// //           className="border border-gray-300 rounded px-4 py-2"
// //           placeholder="Enter food item"
// //         />
// //         <button
// //           type="submit"
// //          // onClick={handletext}
// //           className="bg-amber-400 text-white px-4 py-2 rounded hover:bg-amber-500"
// //         >
// //           Search
// //         </button>
// //       </form>
// //     //   <div className="bg-white p-4 rounded shadow w-full max-w-md">
// //         <RecipeList recipes={data} loading={loading} />
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState, useEffect } from 'react';
//  import RecipeList from './RecipeList.jsx';

// export default function Searchbar() {
//   const [text, setText] = useState('');
//   const [query, setQuery] = useState('');
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = (e) => {
//    e.preventDefault();
//     if (!text.trim()) return;
//     setQuery(text);
//   };

//   useEffect(() => {
//     if (!query.trim()) return;
//     const fetchRecipes = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
//         );
//         const json = await res.json();
//         setData(json.meals || []);
//       } catch (err) {
//         console.error('Error fetching recipes:', err);
//         setData([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRecipes();
//   }, [query]);

//   return (
//     <div className="flex flex-col items-center">
//       <form
//         onSubmit={handleSearch}
//         className="w-full max-w-2xl p-6 rounded-lg shadow-md flex gap-4 mb-8"
//       >
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           className="flex-1 border-2 border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-orange-400"
//           placeholder="Search for a recipe..."
//         /> 
//         <button
//           type="submit"
//           className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
//         >
//           Search
//         </button>
//       </form>

//       <RecipeList recipes={data} loading={loading} />
//     </div>
//   );
// }


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
