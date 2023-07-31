import { React } from "react";

import { Link } from '@inertiajs/react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Layout({ children, auth }) {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">NgePlay</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" href="/">Home</Link>
                            </li>
                            {auth.user ? (
                                <>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/lagu/create">Tambah</Link>
                                </li>
                                    <NavDropdown title={auth.user.email} id="basic-nav-dropdown">
                                        <Link className="dropdown-item" href="/profil">Profil</Link>
                                        <NavDropdown.Divider />
                                        <Link className="dropdown-item" href={route('logout')} method="post" as="button">
                                            Keluar
                                        </Link>
                                    </NavDropdown>
                                </>
                            ) : (
                                <>
                                <li className="nav-item">
                                    <Link className="nav-link" href={route('login')}>Log in</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" href={route('register')}>Register</Link>
                                </li>

                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        <main className="container mt-5">
            { children }
        </main>

        </>
    )

}

export default Layout