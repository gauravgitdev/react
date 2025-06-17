import React from 'react';
import {Suspense,lazy} from 'react';
import { createRoot } from "react-dom/client";
import Navbar from './components/Navbar';//importing default Navbar component
import { ProductCard } from './components/ProductCard';//importing named export ProductCard component
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Kid from './components/kid';
import Men from './components/Men';
import {Error} from './components/Error';
import ProductDetails from './components/ProductDetails';
import About from './components/about'
// import Grocery from './components/grocery' //normal import na krk hum lazy se import karenge 
// lazy loading ko hi code splitting, dynamic import etc kahtae hain
const Grocery = lazy(()=>import('./components/grocery'));

const App = () => {
  return (
    <div>
      <Navbar />
      <br />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
    path:"/kid",
    element:<Kid/>
         },
      {
    path:"/Men",
    element:<Men/>
        },
        {
    path:"/",
    element:<ProductCard/>
        },
     {
   path: "/product/:id",
  element: <ProductDetails />
        },
         {
   path: "/about",
  element: <About />
        },
         {
    path:"/grocery",
    element:<Suspense fallback = {<h1>Loading...</h1>}><Grocery/></Suspense>
         },
    ],
    errorElement:<Error/>
  },
   
])


const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
