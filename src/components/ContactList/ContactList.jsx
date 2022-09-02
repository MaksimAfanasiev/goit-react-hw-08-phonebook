import { ContactListElement } from "components/ContactListElement/ContactListElement"
import css from "./ContactList.module.css"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../reduxStore/operations"
import ListGroup from 'react-bootstrap/ListGroup'


export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);
    const isLoading = useSelector(state => state.contacts.isLoading);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts())
    }, [dispatch])

    const visibleContacts = contacts
  .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        isLoading
            ?
            <p>Loading...</p>
            :
        <ListGroup className={css.contactList}>
            {
                visibleContacts.map(contact => {
                    return <ContactListElement key={contact.id} contact={contact}/>
                })
            }
        </ListGroup>
    )
}