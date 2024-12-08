import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top pt-0 small_screen_nav">
                <div className="container ">
                    <Link className="navbar-brand fw-bold logo_color" to="/">
                        <img src="/public/logo.png" alt="icon" />
                    </Link>
                    {/* Toggle Button for Mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Collapsible Navbar */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarScroll">
                        <ul className="navbar-nav navbar-nav-scroll gradient-background p-1">
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold mx-3 py-3" to={"/"}>
                                    GAMES
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold mx-3 py-3" to={"/About"}>ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-semibold mx-3 py-3" href="#">
                                    TOURNAMENTS
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold mx-3 py-3" to={"/Contact"}>CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-semibold mx-3 py-3" href="#">
                                    JACKPOTS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-semibold mx-3 py-3" href="#">
                                    EVENTS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-semibold mx-3 py-3" href="#">
                                    COMMUNITY
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
