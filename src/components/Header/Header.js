import { useState } from "react";
import ModalContact from "../ModalContact/ModalContact";

const Header = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a href="/" className="navbar-link">
            <p className="mb-0 fs-20">{data.title}</p>
          </a>
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
              <button className="btn p-0">
                <li className="nav-item">
                  <p className="nav-link mb-0">Home</p>
                </li>
              </button>
              <button className="btn p-0" onClick={() => setIsActive(true)}>
                <li className="nav-item">
                  <p className="nav-link mb-0">Contact Us</p>
                </li>
              </button>
            </ul>
          </div>
        </div>
      </nav>
      {/* {isActive && <ModalContact setIsActive={setIsActive} isActive={isActive} />} */}
      <ModalContact setIsActive={setIsActive} isActive={isActive} />
    </>
  );
};

export default Header;
