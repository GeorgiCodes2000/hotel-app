import { Link } from 'react-router-dom';
function Navbar() {

    return (
        <div className="navbar">
            <div className="nav-left">
                <h1>Hotel Finder</h1>
            </div>
            <ul className="nav-right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rooms">Rooms</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;