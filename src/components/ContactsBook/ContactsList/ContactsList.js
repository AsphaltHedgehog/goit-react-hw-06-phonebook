
import css from './contactlist.module.css'

import { deleteContact } from '../../../redux/actions';

import { useDispatch, useSelector } from "react-redux";

function ContactsList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch()

  const renderContactsHandler = () => {
    
    const filteredList = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));

    return filteredList.map(({ id, name, number }) => (
      <li key={id} className={css.item}>{name}: {number}
        <button
          type='button'
          onClick={() => dispatch(deleteContact(id))}
          className={css.btn}
        >Delete</button>
      </li>
    ));
  };


  return (
    <div className={css.wrapper}>
      {renderContactsHandler()}
    </div>
  );
};

export default ContactsList;