import "./App.css";
import Header from "./Compoenets/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./Compoenets/ProductListing";
import ProductsDetail from "./Compoenets/ProductsDetail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route exact path="/products/:productId" element={<ProductsDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
