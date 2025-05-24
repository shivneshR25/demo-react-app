import '../css/Navbar.css';
import { Link } from "react-router-dom";

function Navbar () {
    return ( 
        <nav className="navbar">
            <div className="navbar-brand">
                Movie List
            </div>
            <div className="navbar-links">
                <Link to="/">Movies</Link>
                <Link to="/favorites">Favorites</Link>
            </div>
        </nav>
     );
}

export default Navbar ;