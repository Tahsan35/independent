
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');
    }

    const handleSignup = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email);
    }

    return (
        <div className="text-center mx-auto w-50 mt-3">
            <h2 className='text-warning my-4'>Please Sign up</h2>
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3">
                    <Form.Control type="name" placeholder="Enter name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
                <br />
            </Form>
                <p>Already have an account ? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Log in</Link></p>
        </div>
    );
};

export default Signup;