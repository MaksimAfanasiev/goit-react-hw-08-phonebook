import { AuthNav } from "components/AuthNav/AuthNav"
import { UserMenu } from "components/UserMenu/UserMenu"
import { useSelector } from "react-redux"

export const AppBar = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <header>
            {isLoggedIn
                ?
                <UserMenu />
                :
                <AuthNav />}
        </header>
    )
}