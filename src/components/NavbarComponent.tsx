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
                <Navbar.Brand as={Link} to="/">Fantasy Coin League</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    {/* <Nav.Link href="/leagues">Leagues</Nav.Link> */}
                    <NavDropdown title="Leagues" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/leagues">All Leagues</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/my_leagues">Your Leagues</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/createLeague">Create New League</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>

                    <Nav className="container-fluid">

                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    {!doesTokenExist() && <Nav.Link className="ml-auto" as={Link} to="/login">Login</Nav.Link>}
                    {!doesTokenExist() && <Nav.Link as={Link} to="/register">Register</Nav.Link>}
                    {/* If user is not logged in, display the above. If they are, display the below */}
                    {/* doesTokenExist() && <Nav.Link href="/user">My Account</Nav.Link> */}
                    {doesTokenExist() && <Nav.Link onClick={logout} href="/">Log Out</Nav.Link>}
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