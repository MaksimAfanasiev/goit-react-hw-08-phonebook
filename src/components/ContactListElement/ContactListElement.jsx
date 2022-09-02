import PropTypes from "prop-types"
import { useDispatch } from "react-redux";
import {removeContact} from "../../reduxStore/operations"
import css from "./ContactListElement.module.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export const ContactListElement = ({contact}) => {
    const dispatch = useDispatch();

    const { id, name, number } = contact;

    return (
        <>
            <ListGroup.Item className={css.contactListItem}><span>{name}: {number}
                <Button variant="secondary" className={css.deleteBtn} type="button" onClick={() => dispatch(removeContact(id))}>Delete</Button>
                </span>
            </ListGroup.Item>
        </>
    )
}

ContactListElement.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
}