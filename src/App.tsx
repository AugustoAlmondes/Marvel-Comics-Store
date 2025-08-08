import Footer from "./components/Footer"
import { Header } from "./components/Header"
import Home from "./pages/LandingPage/Home"
import ProductDetails from "./pages/ProductDetails/ProductDetails"

function App() {

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      {/* <Home/> */}
      <ProductDetails/>
      <Footer />
    </div>
  )
}

export default App
