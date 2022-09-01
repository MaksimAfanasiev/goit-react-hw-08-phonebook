import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "reduxStore/operations";

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
            <h1>LOGIN</h1>
            <form autoComplete="off" onSubmit={onFormSubmit}>
                <label>
                    Email
                    <input type="email" name="email" value={email} onChange={onInputChange}/>
                </label>
                <label>
                    Password
                    <input type="password" name="password" value={password} onChange={onInputChange}/>
                </label>
                <button type="submit">Login</button>
            </form>
        </main>
    )
}