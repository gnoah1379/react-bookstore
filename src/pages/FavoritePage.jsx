import '../css/Favorites.css';
import { useBookContext } from "../contexts/BookContext";
import BookCard from "../components/bookcard";

function FavoritePage() {
    const { favorites } = useBookContext();

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="book-grid">
                    {favorites.map((book) => (
                        <BookCard book={book} key={book.id} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="favorite-empty">
                <h2>No Favorite Books Here</h2>
                <p>Start adding books to your favorite.</p>
            </div>
        </>
    );
}

export default FavoritePage;