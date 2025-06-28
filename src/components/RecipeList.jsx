// import React from 'react'
// import {Link} from "react-router-dom";

// export default function RecipeList({recipes,loading}) {
//         if(loading)
//         {
//         return <p className="text-center text-gray-50">Loading for Recipes......</p>;
//         }
//       //  const [hasSearched,setHasSearched]useState(false);
//         if(!recipes||recipes.length===0)
//         {
//             return <p className="text-center text-gray-50">No recipes found</p>
//         }
//         return(

//               <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {recipes.map((item) => (
//         <li
//           key={item.idMeal}
//           className="bg-white rounded-lg shadow-md overflow-hidden"
//         >
//           <img
//             src={item.strMealThumb}
//             alt={item.strMeal}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h3 className="text-lg font-bold text-orange-700">{item.strMeal}</h3>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }
           


import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeList({ recipes, loading }) {
  if (loading) {
    return <p className="text-center text-orange-600 font-medium">Searching for recipes...</p>;
  }

  if (!recipes || recipes.length === 0) {
    return <p className="text-center text-gray-500 italic">No recipes found. Try something else!</p>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((item) => (
        <li key={item.idMeal} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Link to={`/recipe/${item.idMeal}`}>
            <img src={item.strMealThumb} alt={item.strMeal} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-orange-700">{item.strMeal}</h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}





// import React from 'react';

// export default function RecipeList({ recipes, loading }) {
//   if (loading) {
//     return <p className="text-orange-700 font-medium">Loading for recipes...</p>;
//   }

//   if (!recipes || recipes.length === 0) {
//     return <p className="text-gray-500 italic">No recipes found. Try something else!</p>;
//   }

  // return (

 


//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
//       {recipes.map((item) => (
//         <div
//           key={item.idMeal}
//           className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-200"
//         >
//           <img
//             src={item.strMealThumb}
//             alt={item.strMeal}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-orange-800">{item.strMeal}</h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
