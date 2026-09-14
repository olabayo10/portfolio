import { useState } from "react";
import logo from "../images/eagle.jpg";

function Navbar({menuOpen, setMenuOpen}) {

    function closeMenu() {
        setMenuOpen(false);
    }

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="nav-head">
            <div className="nav-div">
                <div className="nav-h2">
                    <a href="#hero" onClick={closeMenu}>
                        <img
                            src={logo}
                            alt="logo"
                            className="nav-img"
                        />
                    </a>
                </div>

                <nav className={`nav-main ${menuOpen ? "show" : ""}`}>
                    <ul className="nav-list">

                        <li>
                            <a href="#about" onClick={closeMenu}>
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#skills" onClick={closeMenu}>
                                Skills
                            </a>
                        </li>

                        <li>
                            <a href="#projects" onClick={closeMenu}>
                                Projects
                            </a>
                        </li>

                        <li>
                            <a href="#contact" onClick={closeMenu}>
                                Contact
                            </a>
                        </li>

                        <li>
                            <a
                                href="/cv.pdf"
                                download
                                onClick={closeMenu}
                            >
                                Download CV
                            </a>
                        </li>

                    </ul>
                </nav>

                <div
                    className={`menu-icon ${menuOpen ? "show" : ""}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        </header>
    );
}

export default Navbar;
