import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <Navbar bg="primary" sticky="top" variant="dark">
                <Container>
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link  as={Link}  to="/service">Services</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {
                            user ?
                                <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>Sign out</button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
    );
};

export default Header;