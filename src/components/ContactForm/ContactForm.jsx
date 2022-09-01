import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addContact} from "../../reduxStore/operations"
import css from "./ContactForm.module.css";


export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  function onInputChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value)
        break;
      
      case 'number':
        setNumber(value)
        break;
      
      default:
        break;
    }
  }

  function addContactItem(name, number) {
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`)
      return
    } else {
      dispatch(addContact({
          name,
          number,
      }));
    }
  }

  function onFormSubmit(e){
    e.preventDefault();
    
    addContactItem(name, number);

    setName('');
    setNumber('');
  }

  return (
    <form className={css.contactForm} onSubmit={onFormSubmit}>

      <label className={css.formLabel}>
        Name
        <input className={css.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onInputChange}
        />
      </label>

      <label className={css.formLabel}>
        Number
        <input className={css.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onInputChange}
        />
      </label>

      <button className={css.formButton} type="submit">Add contact</button>

    </form>)
}