// import Cart from "./pages/Cart/Cart"
import Home from "./pages/LandingPage/Home"
import Layout from "./pages/Layout"
// import ProductDetails from "./pages/ProductDetails/ProductDetails"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from "react-router"
import { CartProvider } from "./providers/CartProvider"
import { AllComics } from "./pages/AllComics/AllComics";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const queryClient = new QueryClient();

function App() {

  return (


    <QueryClientProvider client={queryClient}>
      <CartProvider>

        <Router>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="/products" element={<AllComics />} />
              /* <Route path="/product" element={<ProductDetails />} />
              {/* <Route path="/cart" element={<Cart />} /> */}
            </Route>
          </Routes>
        </Router>

      </CartProvider>
    </QueryClientProvider>
  )
}

export default App
