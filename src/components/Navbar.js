import React from 'react'
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <BootstrapNavbar bg="light" expand="sm">
            <BootstrapNavbar.Brand as={Link}  to='/'>
                My Drive
            </BootstrapNavbar.Brand>
            <Nav>
                <Nav.Link as={Link} to='/user'>
                    Profile                    
                </Nav.Link>
            </Nav>
        </BootstrapNavbar>
    )
}
