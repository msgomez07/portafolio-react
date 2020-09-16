import React from 'react'

export default function Header() {
    return (
      <div className="fixed-top">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <p className="navbar-brand" href="#">
            WELCOME
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <p className="nav-link" href="#">
                 I am...
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link" href="#">
                  Projects
                </p>
              </li>
              <li className="nav-item">
                <p
                  className="nav-link"
                  href="#"
                >
                  Contact
                </p>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}
