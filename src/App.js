import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Admin from "./component/Admin";
import Basket from "./component/Basket";
import Addproduct from "./component/Addproduct";
import ProductCard from "./component/ProductCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/productcard" element={<ProductCard />} />
      </Routes>
    </div>
  );
}

export default App;
