import { AuthNav } from "components/AuthNav/AuthNav"
import { UserMenu } from "components/UserMenu/UserMenu"
import { useSelector } from "react-redux"
import {NavLink} from "react-router-dom"

export const AppBar = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    console.log(isLoggedIn)

    return (
        <header>
            <NavLink to={'/contacts'}>PhoneBook</NavLink>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}