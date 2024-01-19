import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export class Header extends Component {

    render() {
        return (
            <>
                <Navbar bg="dark" expand="lg" variant='dark' fixed='top' className='mb-4'>
                    <Container fluid>
                        <NavLink to='/' className='navbar-brand'>News Monkey</NavLink>
                        <Navbar.Toggle />
                        <Navbar.Collapse id="navbarScroll">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" ariaCurrent="page" to="/" >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" ariaCurrent="business" to="/business">Business</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" ariaCurrent="entertainment" to="/entertainment">Entertainment</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" ariaCurrent="health" to="/health">Health</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" ariaCurrent="science" to="/science">Science</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" ariaCurrent="sports" to="/sports">Sports</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" ariaCurrent="technology" to="/technology">Technology</NavLink>
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Header