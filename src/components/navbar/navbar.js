import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'


export default function Navbarsign() {
    return (
        <>
            <Navbar bg="light" variant="light" className="fixed-top">
                <Navbar.Brand>Tander</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/sign-in">Login</Nav.Link>
                        <Nav.Link href="/sign-up">SignUp</Nav.Link></Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}