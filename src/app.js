import React from 'react';
import { createRoot } from "react-dom/client";
import Navbar from './components/Navbar';//importing default Navbar component
import { ProductCard } from './components/ProductCard';//importing named export ProductCard component

const App = () => {
  return (
    <div>
      <Navbar />
      <br />
      <ProductCard />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
