function Navbar() {
  return (
    <nav className="navbar container navbar-expand-lg">
      <a
        className="navbar-brand"
        href="#"
        style={{ fontSize: "24px", fontWeight: "700", color: "#f3f3f2" }}
      >
        COMFLY
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarComfly"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarComfly">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Vuelos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Hoteles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Vuelo + Hotel
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Paquetes
            </a>
          </li>
        </ul>
        <span className="navbar-text ms-3">📞 2902 1891</span>
      </div>
    </nav>
  );
}

export default Navbar;
