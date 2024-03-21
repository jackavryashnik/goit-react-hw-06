import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ id }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const contact = contacts.filter(e => (e.id = id));

  return (
    <li className={css.contact}>
      <div className={css.contactInfo}>
        <p>
          <IoPersonSharp /> {contact.name}
        </p>
        <p>
          <FaPhoneAlt /> {contact.number}
        </p>
      </div>
      <button
        className={css.btn}
        onClick={() => dispatch(deleteContact(contact))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
