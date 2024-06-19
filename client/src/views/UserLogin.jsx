import React from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import '../styles/Login.css';

const UserLogin = () => {
    return (

        <div className="auth-container mx-auto p-3">
            <h3 class="text-center">Login</h3>
            <Form className="d-flex flex-column align-items-center">
                <Form.Group className="col-10 mb-4" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email"/>
                </Form.Group>
                <Form.Group className="col-10 mb-4" controlId="formPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <a href="/ForgotPassword" className="nav-link active text-success mb-5">Quên mật khẩu?</a>
                <Button variant="primary" type="submit" size="sm">
                    Tiếp tục
                </Button>
            </Form>
        </div>
    );
};

export default UserLogin;