import { NavLink, Outlet } from 'react-router-dom';
import css from "./AuthNav.module.css"

export const AuthNav = () => {
    return (
        <>
            <ul className={css.navList}>
                <li><NavLink to={"/register"}>Registration</NavLink></li>
                <li><NavLink to={"/login"}>LogIn</NavLink></li>
            </ul>
           
            <Outlet />
        </>
    )
}