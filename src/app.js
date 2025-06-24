import React, { useContext } from 'react';
import {useState} from 'react'
import {Suspense,lazy} from 'react';
import { createRoot } from "react-dom/client";
import Navbar from './components/Navbar';//importing default Navbar component
import { ProductCard } from './components/ProductCard';//importing named export ProductCard component
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Kid from './components/kid';
import Men from './components/Men';
import Login from './components/Login';
import {Error} from './components/Error';
import ProductDetails from './components/ProductDetails';
import About from './components/about'
import CompoA from './components/compoA'
import Cart from './components/cart'
import Signup from './components/signup';
import UserContext from './utils/UserContext';
import Memo from './components/Memo';
import Ref from './components/ref';
import { Provider } from 'react-redux';//this will wrap all the app componenet to communicate b/w the react and redux
import appStore from './store/store';//
// import Grocery from './components/grocery' //normal import na krk hum lazy se import karenge 
// lazy loading ko hi code splitting, dynamic import etc kahtae hain
const Grocery = lazy(()=>import('./components/grocery'));

const App = () => {
  const [Username,setUsername] = useState()
  return (
    <Provider store={appStore}> 
    {/* //here we are passing probes of redux  */}
    <UserContext.Provider value={{name:Username,setUsername}}>
      {/* here i am wraping the all th component 
      by UserContext.provider through which i can access 
      the UserContext data in all nested component */}
    <div>
      <Navbar />
      <br />
      <CompoA/> 
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
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
    path:"/signup",
    element:<Signup/>
         },
      {
    path:"/Men",
    element:<Men/>
        },
      {
    path:"/login",
    element:<Login/>
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
   path: "/memo",
  element: <Memo />
        },{
   path: "/ref",
  element: <Ref />
        },
         {
   path: "/cart",
  element: <Cart/>
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
