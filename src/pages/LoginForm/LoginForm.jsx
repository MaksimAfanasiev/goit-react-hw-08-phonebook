import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "reduxStore/operations";
import css from "./LoginForm.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    
    const onInputChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            
            case 'password':
                setPassword(value);
                break;
        
            default:
                break;
        }
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        dispatch(logIn(userData));
        setEmail('');
        setPassword('');
    }

    return (
        <main>
            <h1>Login</h1>
            <Form autoComplete="off" onSubmit={onFormSubmit} className={css.logForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={onInputChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={password} onChange={onInputChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
            </Form>
        </main>
    )
}