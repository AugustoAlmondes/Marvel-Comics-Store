import { AllComics } from "./pages/AllComics/AllComics"
import Cart from "./pages/Cart/Cart"
import Home from "./pages/LandingPage/Home"
import Layout from "./pages/Layout"
import ProductDetails from "./pages/ProductDetails/ProductDetails"

import { BrowserRouter as Router, Routes, Route } from "react-router"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/products" element={<AllComics />} />
          <Route path="/cart" element={<Cart/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
