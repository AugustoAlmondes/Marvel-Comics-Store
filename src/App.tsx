import Footer from "./components/Footer"
import { Header } from "./components/Header"
import Home from "./pages/LandingPage/Home"

function App() {

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <Home/>
      <Footer />
    </div>
  )
}

export default App
