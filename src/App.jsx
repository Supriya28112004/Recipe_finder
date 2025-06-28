// // import React from 'react';
// // import {BrowserRouter,Route,Routes} from "react-router-dom";
// // import Searchbar from './components/Searchbar';
// // import RecipeDetails from "./components/RecipeDetails";

// // function App() {
// //   return (
// //     <div
// //       className="min-h-screen bg-cover bg-center py-8 px-4"
// //       style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/04/43/37/07/240_F_443370711_sqHRnSIQovW6uyQ5ZwDpd4kjCG8Q6swm.jpg')" }} // image in public/
// //     >
// //       <h1 className="text-5xl font-bold text-center text-orange-600 mb-10 drop-shadow-md">
// //         🍽️ Recipe Finder
// //       </h1>

// //       <Routes>
// //       <Route path="/"element={<Searchbar />}/>
// //       <Route path="/recipe/:recipeID" element={<RecipeDetails />} />
// //       </Routes>
  
// //     </div>
// //   );
// // }

// // export default App;




// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Searchbar from './components/Searchbar';
// import RecipeDetails from './components/RecipeDetails';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen w-full bg-fixed bg-center bg-cover"
//       style={{
//           backgroundImage:
//             "url('https://t4.ftcdn.net/jpg/04/43/37/07/240_F_443370711_sqHRnSIQovW6uyQ5ZwDpd4kjCG8Q6swm.jpg')",
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center',
//           minHeight:"100vh",
//         }}>
//         <h1 className="text-5xl text-center font-bold text-orange-700 drop-shadow mb-10">
//           🍽️ Recipe Finder
//         </h1>
//         <Routes>
//           <Route path="/" element={<Searchbar />} />
//           <Route path="/recipe/:recipeID" element={<RecipeDetails />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }





import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Searchbar from './components/Searchbar';
import RecipeDetails from './components/RecipeDetails';

function AppWrapper() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div
      className="min-h-screen w-full bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: isHome
          ? "url('https://t4.ftcdn.net/jpg/04/43/37/07/240_F_443370711_sqHRnSIQovW6uyQ5ZwDpd4kjCG8Q6swm.jpg')"
          : 'none',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
         minHeight:"100vh",
                

      }}
    >
      <h1 className="text-5xl text-center font-bold text-orange-700 drop-shadow mb-10">
        🍽️ Recipe Finder
      </h1>
      <Routes>
        <Route path="/" element={<Searchbar />} />
        <Route path="/recipe/:recipeID" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}



