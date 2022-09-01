import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../reduxStore/operations";


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
            <form autoComplete="off" onSubmit={onFormSubmit}>
                <label>
                    Name
                    <input type="text" name="name" value={name} onChange={onInputChange} />
                </label>
                <label>
                    Email
                    <input type="email" name="email" value={email} onChange={onInputChange} />
                </label>
                <label>
                    Password
                    <input type="password" name="password" value={password} onChange={onInputChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}