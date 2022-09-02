import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../reduxStore/operations";
import css from "./RegistrationForm.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const RegistrationForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const onInputChange = ({target: {name, value}}) => {
        switch (name) {
            case "name":
                setName(value)
                break;
            
            case "email":
                setEmail(value)
                break;
            
            case "password":
                setPassword(value)
            break;
        
            default:
            break;
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name,
            email,
            password,
        };

        dispatch(register(userData));
        setName('');
        setEmail('');
        setPassword('')
    }

    return (
        <main>
            <h1>Registration</h1>
            <Form autoComplete="off" onSubmit={onFormSubmit} className={css.regForm}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={name} onChange={onInputChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={onInputChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={password} onChange={onInputChange} required/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </main>
    )
}