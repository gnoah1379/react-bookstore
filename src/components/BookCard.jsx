import '../css/BookCard.css';
import { useBookContext } from "../contexts/BookContext";

function BookCard({ book }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useBookContext()
    const favorite = isFavorite(book.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(book.id)
        else addToFavorites(book)
    }

    return (
        <div className="book-card">
            <div className="book-poster">
                <img src={`https://image.tmdb.org/t/p/w500${book.poster_path}`} alt={book.title} />
                <div className="book-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>☆</button>
                </div>
            </div>
            <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );
}

export default BookCard;