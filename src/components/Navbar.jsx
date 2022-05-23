import '../style/style.css'
import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg menu z-index-alto">
            <Link to="/" className='navbar-brand ms-4'>Star wars</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse padreElementosMenu" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/Personajes">Personajes</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Planetas">Planetas</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Naves">Naves</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}