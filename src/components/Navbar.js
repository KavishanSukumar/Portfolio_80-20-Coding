import React from "react";
import logo from "../logo.png";
//React fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#"><img className={"logo"} src={logo} alt="logo..."/></a>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container-fluid ">
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">aboutme</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">howwork</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;