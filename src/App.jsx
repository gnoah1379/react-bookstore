import './App.css'
import { Route } from "react-router-dom"
import Routers from "./Routers"
import HomePage from "./pages/HomePage"
import FavoritePage from "./pages/FavoritePage"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routers>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routers>
      </main>
    </>
  )
}

export default App
