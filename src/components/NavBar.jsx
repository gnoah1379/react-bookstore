import { Link } from 'react-router-dom'
import '../css/Navbar.css'

function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-content">
                <div className="navbar-brand">
                    <Link to="/">Book App</Link>
                </div>
                <ul className="navbar-menu">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/favorite" className="nav-link">Favorites</Link>
                    <Link to="/bookDetail" className="nav-link">Book Detail</Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar