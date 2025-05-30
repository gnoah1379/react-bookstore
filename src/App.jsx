import './css/App.css'
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FavoritePage from "./pages/FavoritePage"
import BookDetailPage from "./pages/BookDetailPage"
import CartPage from "./pages/CartPage"
import { BookProvider } from "./contexts/BookContext"
import NavBar from "./components/NavBar"

function App() {
  return (
    <BookProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/bookDetail" element={<BookDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </BookProvider>
  )
}

export default App
