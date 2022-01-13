const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <p className="navbar-brand mb-0">Navbar</p>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <p className="nav-link active mb-0">Home</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link mb-0">Contact Us</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
