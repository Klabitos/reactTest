import '../style/style.css'

export function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg menu z-index-alto">
            <a className="navbar-brand ms-4" href="#">Star Wars</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse padreElementosMenu" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="" href="#">Personajes</a>
                </li>
                <li className="nav-item">
                    <a className="" href="#">Planetas</a>
                </li>
                <li className="nav-item">
                    <a className="" href="#">Naves</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}