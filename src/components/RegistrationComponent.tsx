import { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class RegistrationComp extends Component {
    render() {
        return (
            <>
            <h1>Register A New User</h1>
            <Form.Group>
                <Form.Label className="mb-3" id="usernameField">Username:</Form.Label>
                <Form.Control type="text" placeholder="Username"/> 
            </Form.Group>
            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" id="firstPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" id="secondPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </>
        )
    }
}