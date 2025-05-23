import '../css/BookCard.css';

function BookCard({ book }) {

    function onFavoriteClick() {

    }

    return (
        <div className="book-card">
            <div className="book-poster">
                <img src={`https://image.tmdb.org/t/p/w500${book.poster_path}`} alt={book.title} />
                <div className="book-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>☆</button>
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