import { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default class NavbarComp extends Component {

    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/login">Fantasy Coin League</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    {/* <Nav.Link href="/leagues">Leagues</Nav.Link> */}
                    <NavDropdown title="Leagues" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">All Leagues</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Your Leagues</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Create New League</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/login">DELETE THIS TEST</Nav.Link>
                    </Nav>

                    <Nav className="container-fluid">

                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    {!doesTokenExist() && <Nav.Link className="ml-auto" href="/login">Login</Nav.Link>}
                    {!doesTokenExist() && <Nav.Link href="/register">Register</Nav.Link>}
                    {/* If user is not logged in, display the above. If they are, display the below */}
                    {/* doesTokenExist() && <Nav.Link href="/user">My Account</Nav.Link> */}
                    {doesTokenExist() && <Nav.Link onClick={logout} href="/login">Log Out</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        )
    }
}


function doesTokenExist() {
    let token:any;

    if (localStorage.getItem("fcl-auth-token")) {
        token = localStorage.getItem("fcl-auth-token");
    }
    else {
        token = "";
    }

    return !!token;

}

let logout = () => {
    localStorage.removeItem("fcl-auth-token");

}