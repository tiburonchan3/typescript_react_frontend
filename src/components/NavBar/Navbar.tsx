import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export const NavbarMenu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>VideoList</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" className="nav-link">Lista de videos</NavLink>
            <NavLink to="/new-video" className="nav-link">Crear nuevo video</NavLink>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
