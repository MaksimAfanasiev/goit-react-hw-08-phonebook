import { useSelector, useDispatch } from "react-redux"
import { logOut } from "reduxStore/operations";
import css from "./UserMenu.module.css";
import Button from 'react-bootstrap/Button';

export const UserMenu = () => {
    const userName = useSelector(state => state.auth.user.name);
    const dispatch = useDispatch();

    return (
        <>
            <p className={css.welcomeWord}>Welcome,</p> <span className={css.welcomeName}>{userName}</span>
            <Button variant="primary" className={css.logoutBtn} type="button" onClick={() => {dispatch(logOut())}}>LogOut</Button>
        </>
    )
}