function BookCard({ book }) {

    function onFavoriteClick() {

    }

    return (
        <div className="book-card">
            <div className="book-poster">
                <img src={book.image} alt={book.title} />
                <div className="book-overlay">
                    <button className="favorite-book" onClick={onFavoriteClick}>☆</button>
                </div>
            </div>
            <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.price}</p>
            </div>
        </div>
    );
}

export default BookCard;