/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <header className="navigation fixed-top " >
            <nav className="navbar navbar-expand-lg navbar-dark" >
                <NavLink className="navbar-brand font-tertiary h3" to={ '/' }>
                    <img className="logo" src="images/logo.png" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navigation">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item MQ-List">
                            {/* <a href="#">Home</a> */}
                            <NavLink className="nav-link" to={ `/` }>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#Depts">Departments</a> */}
                            <NavLink className="nav-link" to={ `Departments` }>Departments</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={ `Products` }>Products</NavLink>
                            {/* <a className="nav-link" href="#Products">Products</a> */}
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={ `Team` }>Team</NavLink>
                            {/* <a className="nav-link" href="#Team">Team</a> */}
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={ `Contact` }>Contact</NavLink>
                            {/* <a className="nav-link" href="#Contact">Contact</a> */}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
