import { Link } from "react-router-dom";
import logo from "../assets/quick-lab-logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-nav">
      <div className="container-fluid w-75">
        <Link
          className="navbar-brand d-flex align-items-center gap-2 p-2 rounded nav-logo"
          to="/"
        >
          <img
            src={logo}
            alt="Logo Quick Lab"
            width="96"
            height="96"
            className="d-inline-block align-text-top rounded"
          />
          <h1 className="text-white fs-2">Ferramentas</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item px-2">
              <Link
                className="custom-link fs-5 shadow"
                aria-current="page"
                to="/"
              >
                MATEMÁTICA
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link
                className="custom-link fs-5 shadow"
                aria-current="page"
                to="/"
              >
                COMPUTAÇÃO
              </Link>
            </li>
          </ul>
        </div>
        <form className="input-group w-25 shadow" role="search">
          <input
            type="text"
            class="form-control"
            placeholder="Buscar"
            aria-label="search"
            aria-describedby="basic-addon1"
          />

          <span class="input-group-text m-0 p-0" id="basic-addon1">
            <button className="btn custom-search" type="submit">
              <i class="bi bi-search"></i>
            </button>
          </span>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
