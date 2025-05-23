import BookCard from "../components/bookcard";
import { useState, useEffect } from "react";
import { searchBooks, getAllBooks } from "../services/api";
import '../css/Home.css'

function HomePage() {

    const [searchQuery, setSearchQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const data = await getAllBooks();
                setBooks(data);
            } catch (error) {
                setError("Error fetching books:", error);
            }
            finally {
                setLoading(false);
            }
        }

        loadBooks();
    }, []);

    const handlerSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchBooks(searchQuery)
            setBooks(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search books...")
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="home">
            <div>
                <h1>Welcome to the Bookstore</h1>
                <p>Discover your next great read!</p>
            </div>

            <form onSubmit={handlerSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for books..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="book-grid">
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default HomePage;