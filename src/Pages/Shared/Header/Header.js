import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="primary" sticky="top" variant="dark">
                <Container>
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link  as={Link}  to="/service">Services</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    );
};

export default Header;