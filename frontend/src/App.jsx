import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import Info from "./pages/Info"
import Reviews from "./pages/Reviews"


function App() {

  return (
    <div className="w-screen h-screen font-poppins">
      <Navbar />
      <Hero />
      <Info />
      <Reviews />
    </div>
  )
}

export default App
