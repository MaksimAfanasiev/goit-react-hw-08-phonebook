import { useSelector, useDispatch } from "react-redux"
import { logOut } from "reduxStore/operations";

export const UserMenu = () => {
    const userName = useSelector(state => state.auth.user.name);
    const dispatch = useDispatch();

    return (
        <>
            
            <p>Welcome, {userName}</p>
            <button type="button" onClick={() => {dispatch(logOut())}}>LogOut</button>
        </>
    )
}