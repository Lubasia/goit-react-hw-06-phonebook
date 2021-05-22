import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions'
import styles from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.ContactList}>
    <h2> Contacts </h2>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.ContactListItem} key={id}>
        <span className={styles.ContactListName}>{name} :</span>
        <span> {number} </span>
        <button
          className={styles.ContactListBtn}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          {' '}
          Del 🗑
        </button>
      </li>
    ))}
  </ul>
);
const getFilteredContacts = (allContacts, filter) => {
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
const mapStateToProps = ({ contacts: { items, filter } }) => {
  return {
    contacts: getFilteredContacts(items, filter),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phoneBookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
