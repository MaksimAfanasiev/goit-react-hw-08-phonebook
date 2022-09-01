import { NavLink, Outlet } from 'react-router-dom';

export const AuthNav = () => {
    return (
        <>
            <ul>
                <li><NavLink to={"/register"}>Registration</NavLink></li>
                <li><NavLink to={"/login"}>LogIn</NavLink></li>
            </ul>
           
            <Outlet />
        </>
    )
}