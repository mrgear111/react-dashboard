import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Sales Performance Dashboard</h1>
            </div>

            <ul className="navbar-links">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/details">Details</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;