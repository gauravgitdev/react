import React from 'react';
import { createRoot } from "react-dom/client";
import Navbar from './components/Navbar';//importing default Navbar component
import { ProductCard } from './components/ProductCard';//importing named export ProductCard component
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Kid from './components/kid';
import Men from './components/Men';
import {Error} from './components/Error';

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
        }
    ],
    errorElement:<Error/>
  },
   
])


const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
