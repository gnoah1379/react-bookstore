import BookCard from "../components/bookcard";

function HomePage() {

    const [searchQuery, setSearchQuery] = useState("");

    const book = [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: "$10.99",
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            price: "$12.99",
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            price: "$15.99",
        },

    ];

    const handlerSearch = (e) => {
        e.preventDefault();
        setSearchQuery("");
    }

    return (
        <>
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
                <button type="submit" className="search-btn">Search</button>
            </form>

            <div className="book-grid">
                {book.map(book => (
                    book.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
                        <BookCard key={book.id} book={book} />
                    )
                ))}
            </div>
        </>
    );
}

export default HomePage;