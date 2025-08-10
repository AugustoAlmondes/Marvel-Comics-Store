import Home from "./pages/LandingPage/Home"
import Layout from "./pages/Layout"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from "react-router"
import { CartProvider } from "./providers/CartProvider"
import Cart from "./pages/Cart/Cart";
import { ComicsProvider } from "./providers/ComicsProvider";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import AllComics from "./pages/AllComics/AllComics";

const queryClient = new QueryClient();

function App() {

  return (


    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ComicsProvider>

        <Router>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="/products" element={<AllComics />} />
              /* <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </Router>

        </ComicsProvider>
      </CartProvider>
    </QueryClientProvider>
  )
}

export default App
