import PropTypes from "prop-types"
import { useDispatch } from "react-redux";
import {removeContact} from "../../reduxStore/operations"
import css from "./ContactListElement.module.css";

export const ContactListElement = ({contact}) => {
    const dispatch = useDispatch();

    const { id, name, phone } = contact;

    return (
        <>
            <li className={css.contactListItem}>{name}: {phone}
                <button className={css.deleteBtn} type="button" onClick={() => dispatch(removeContact(id))}>Delete</button>
            </li>
        </>
    )
}

ContactListElement.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }),
}